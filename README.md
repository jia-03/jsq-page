# jsq-page

[![Build Status][travis-image]][travis-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> static web app workflow

## Installation

```shell
$ npm install jsq-page

# or yarn
$ yarn add jsq-page
```

## Usage

<!-- TODO: Introduction of API use -->

```javascript
const jsqPage = require('jsq-page')
const result = jsqPage('zce')
// result => 'zce@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### jsqPage(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; jia-03 <565269683@qq,com>



[travis-image]: https://img.shields.io/travis/jia-03/jsq-page/master.svg
[travis-url]: https://travis-ci.org/jia-03/jsq-page
[downloads-image]: https://img.shields.io/npm/dm/jsq-page.svg
[downloads-url]: https://npmjs.org/package/jsq-page
[version-image]: https://img.shields.io/npm/v/jsq-page.svg
[version-url]: https://npmjs.org/package/jsq-page
[license-image]: https://img.shields.io/github/license/jia-03/jsq-page.svg
[license-url]: https://github.com/jia-03/jsq-page/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/jia-03/jsq-page.svg
[dependency-url]: https://david-dm.org/jia-03/jsq-page
[devdependency-image]: https://img.shields.io/david/dev/jia-03/jsq-page.svg
[devdependency-url]: https://david-dm.org/jia-03/jsq-page?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: https://standardjs.com
