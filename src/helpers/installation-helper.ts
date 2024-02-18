import {getInstalledPath} from 'get-installed-path'
import {exec} from 'node:child_process'
import * as util from 'node:util'
const execAsync = util.promisify(exec)

getInstalledPath('@heroku-cli/command', {
  local: true,
  // eslint-disable-next-line unicorn/prefer-top-level-await
}).then(async (path) => {
  await execAsync(`cd ${path} && yarn build || true`)
})
