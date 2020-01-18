<h1 align="center">react-resolve-render</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/davidmarkclements/react-resolve-render#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/davidmarkclements/react-resolve-render/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/davidmarkclements/react-resolve-render/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/davidmarkclements/react-resolve-render" />
  </a>
  <a href="https://twitter.com/davidmarkclem" target="_blank">
    <img alt="Twitter: davidmarkclem" src="https://img.shields.io/twitter/follow/davidmarkclem.svg?style=social" />
  </a>
</p>

> awaitable React renderToString for stateful Server Side Rendering

### 🏠 [Homepage](https://github.com/davidmarkclements/react-resolve-render#readme)

## About

Attempting to render a React application with asynchronously fetched state is non-trivial. One typical category of approaches leads to the need to render the application multiple times (e.g. hitting the route 2 or 3 times) in order to load the state cache. The `react-resolve-render` module is an awaitable function which keeps rendering until the output is consistent. This allows full state hydration on the first request.

## Usage

```js
import { createServer } from 'http'
import render from 'react-resolve-render'
import { createElement } from 'react'
import App from './App'

// these are the default options:
const renderOptions = { 
  tick: 75, 
  max: 10, 
  logger: console 
}

createServer(async (req, res) => {
  try {
    const str = await render(createElement(App), renderOptions)
    res.end(str)
  } catch (err) {
    console.error(err)
    res.statusCode = 500
    res.end('Server Error')
  }
}).listen(3000)
```

## Install

```sh
npm install
```

## Tests

```sh
npm test
```

## Author

👤 **David Mark Clements**

* Twitter: [@davidmarkclem](https://twitter.com/davidmarkclem)
* Github: [@davidmarkclements](https://github.com/davidmarkclements)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/davidmarkclements/react-resolve-render/issues). You can also take a look at the [contributing guide](https://github.com/davidmarkclements/react-resolve-render/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [David Mark Clements](https://github.com/davidmarkclements).<br />
This project is [MIT](https://github.com/davidmarkclements/react-resolve-render/blob/master/LICENSE) licensed.
