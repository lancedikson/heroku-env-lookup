'use strict'
Object.defineProperty(exports, '__esModule', {value: true})
// eslint-disable-next-line camelcase
const get_installed_path_1 = require('get-installed-path')
// eslint-disable-next-line camelcase
const node_child_process_1 = require('node:child_process')
const util = require('node:util')
// eslint-disable-next-line camelcase
const execAsync = util.promisify(node_child_process_1.exec)
// eslint-disable-next-line camelcase
;(0, get_installed_path_1.getInstalledPath)('@heroku-cli/command', {
  local: true,
  // eslint-disable-next-line unicorn/prefer-top-level-await
}).then(async (path) => {
  console.log(path)
  await execAsync(`cd ${path} && yarn build || true`)
})
