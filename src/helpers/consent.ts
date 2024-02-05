import {readFile, writeFile} from 'node:fs/promises'
import {homedir} from 'node:os'
import {join} from 'node:path'
const CONSENT_PATH = join(homedir(), '.heroku-env-plugin-privacy-consent')

export async function readPermanentConsent() {
  try {
    const consent = await readFile(CONSENT_PATH, {encoding: 'utf8'})
    return consent === 'yes'
  } catch {
    return false
  }
}

export async function writePermanentConsent(decision: 'no' | 'yes') {
  await writeFile(CONSENT_PATH, decision, {encoding: 'utf8'})
  return true
}
