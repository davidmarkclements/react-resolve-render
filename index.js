'use strict'
const { renderToString } = loadReactDomServer()
const { promisify } = require('util')
const timeout = promisify(setTimeout)

async function render (element, opts = { tick: 75, max: 10, logger: console }) {
  const { tick = 75, max = 10, logger = console } = opts
  let str = ''
  let nextStr = ''
  let loop = max < 0 ? 0 : max
  try {
    do {
      str = renderToString(element)
      if (nextStr === str) return str
      await timeout(tick)
      nextStr = renderToString(element)
      if (nextStr === str) return str
    } while (loop--)
  } catch (err) {
    err.message = 'react-resolve-render: ' + err.message
    logger.error(err)
    return str
  }
}

function loadReactDomServer () {
  try {
    return require('react-dom/server')
  } catch (err) {
    throw Error(
      'react-resolve-render depends on react-dom/server as a peer dependency.' +
      'Please make sure react-dom/server is installed.'
    )
  }
}

module.exports = render
