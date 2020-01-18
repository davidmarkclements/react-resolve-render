'use strict'
const render = require('.')
const { createElement } = require('react')
const { test } = require('tap')

test('render', async ({ is }) => {
  var count = 0
  setTimeout(() => { count++ }, 5)
  var renderCount = 0
  const test = createElement(() => {
    renderCount++
    return createElement('div', null,
      createElement('span', null, 'count:' + count)
    )
  })
  is(await render(test), '<div data-reactroot=""><span>count:1</span></div>', 'renders final state only')
  is(renderCount, 3, 'does not exceed minimum necessary renders')
})
