import {expect, test} from '@oclif/test'

describe('env-lookup', () => {
  test
  .stdout()
  .command(['env-lookup'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['env-lookup', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
