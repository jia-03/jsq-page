const test = require('ava')
const jsqPage = require('..')

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => jsqPage(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(jsqPage('w'), 'w@zce.me')
  t.is(jsqPage('w', { host: 'wedn.net' }), 'w@wedn.net')
})
