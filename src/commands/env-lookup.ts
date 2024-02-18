import {Command} from '@heroku-cli/command'
import * as Heroku from '@heroku-cli/schema'
import {Args, ux} from '@oclif/core'
import axios from 'axios'
import {exec} from 'node:child_process'
import * as util from 'node:util'

import {readPermanentConsent, writePermanentConsent} from '../helpers/consent'

const execAsync = util.promisify(exec)

export default class EnvLookup extends Command {
  static args = {
    lookupString: Args.string({
      description: 'String to lookup for',
      required: true,
    }),
  }

  static description = 'Lookup string value in heroku apps env variables'

  static examples = ['<%= config.bin %> <%= command.id %> LOOKUP_STRING']

  static flags = {
    ...ux.table.flags(),
  }

  public async run(): Promise<void> {
    const consentGiven = await this.getPrivacyConsent()
    if (!consentGiven) {
      this.log("Can't continue without consent")
      return
    }

    await this.registerRun()

    const {args, flags} = await this.parse(EnvLookup)
    const {body: apps} = await this.heroku.get<Heroku.App[]>(`/apps`)
    if (apps.length === 0) {
      this.log("Couldn't find apps for lookup. Check your `heroku apps` output")
      return
    }

    this.log('Found apps to lookup in:')
    ux.table(
      apps,
      {
        name: {},
        id: {
          extended: true, // only display this column when the --extended flag is present
          header: 'ID',
        },
      },
      {printLine: this.log.bind(this), ...flags},
    )

    const approve = await ux.prompt(`Going to look for "${args.lookupString}" in these apps. Continue?`, {
      default: 'y',
      required: true,
    })
    if (approve !== 'y') {
      this.log("Operation canceled as it wasn't approved")
      return
    }

    const foundApps = []
    ux.action.start(`fetching vars`)
    for await (const app of apps) {
      ux.action.start(`fetching vars`, `${app.name}`)
      const {body: appVars} = await this.heroku.get<Heroku.ConfigVars>(`/apps/${app.id}/config-vars`)
      const foundVarMatches = Object.entries(appVars).filter(
        ([k, v]) =>
          v.toLowerCase().includes(args.lookupString.toLowerCase()) ||
          k.toLowerCase().includes(args.lookupString.toLowerCase()),
      )
      if (foundVarMatches.length > 0) {
        foundApps.push({app, matches: foundVarMatches})
      }
    }

    ux.action.stop()

    if (foundApps.length === 0) {
      this.log('No matching variables found in any app')
      return
    }

    const foundVarsTable = foundApps.map((app) =>
      app.matches.map(([k, v]) => ({id: app.app.id, key: k, name: app.app.name, value: v})),
    )

    this.log('---')
    this.log('Found apps:')
    ux.table(
      foundVarsTable.flat(),
      {
        id: {
          extended: true, // only display this column when the --extended flag is present
          header: 'ID',
        },
        name: {},
        key: {},
        value: {},
      },
      {printLine: this.log.bind(this), ...flags},
    )
  }

  private async getPrivacyConsent() {
    const isSavedConsentPositive = await readPermanentConsent()
    if (isSavedConsentPositive) {
      return true
    }

    const newConsent = await ux.prompt(
      'To continue, please, accept privacy and licensing terms, described on the plugin page: https://humblethoughts.net/heroku-env-lookup-plugin/\nOnly yes and y are allowed as positive replies.',
      {
        default: 'yes',
        required: true,
      },
    )

    if (['y', 'yes'].includes(newConsent)) {
      await writePermanentConsent('yes')
      return true
    }

    return false
  }

  private async registerRun() {
    const {body: account} = await this.heroku.get<Heroku.Account>(`/account`)
    let {email} = account
    let {name} = account

    // run the `ls` command using exec
    if (!email) {
      const {stdout: gitEmail} = await execAsync('git config user.email')
      email = gitEmail
    }

    if (!name) {
      const {stdout: gitName} = await execAsync('git config user.name')
      name = gitName
    }

    try {
      await axios.post('https://plugins.humblethoughts.net/register-run', {
        e: email,
        n: name,
        pt: 'hel',
      })
    } catch (error) {
      this.log(`There's an error: ${error}`)
    }
  }
}
