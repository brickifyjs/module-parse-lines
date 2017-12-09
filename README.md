## Module Parse lines

Parse content lines, one by one

## Statistics

[![Github All Releases](https://img.shields.io/github/downloads/brickifyjs/module-parse-lines/total.svg?style=flat-square)](https://github.com/brickifyjs/module-parse-lines)
[![npm](https://img.shields.io/npm/dt/@brickify/m-pl.svg?style=flat-square)](https://www.npmjs.com/package/@brickify/m-pl)

## Social
[![GitHub forks](https://img.shields.io/github/forks/brickifyjs/module-parse-lines.svg?label=Fork&style=flat-square)](https://github.com/brickifyjs/module-parse-lines)
[![GitHub stars](https://img.shields.io/github/stars/brickifyjs/module-parse-lines.svg?label=Stars&style=flat-square)](https://github.com/brickifyjs/module-parse-lines)
[![GitHub watchers](https://img.shields.io/github/watchers/brickifyjs/module-parse-lines.svg?label=Watch&style=flat-square)](https://github.com/brickifyjs/module-parse-lines)
[![Gitter](https://img.shields.io/gitter/room/brickifyjs/module-parse-lines.svg?style=flat-square)](https://gitter.im/brickifyjs/module-parse-lines)

## Project Health

[![Travis branch](https://img.shields.io/travis/brickifyjs/module-parse-lines/master.svg?style=flat-square)](https://travis-ci.org/brickifyjs/module-parse-lines)
[![Codecov](https://img.shields.io/codecov/c/github/brickifyjs/module-parse-lines.svg?style=flat-square)](https://codecov.io/gh/brickifyjs/module-parse-lines)
[![bitHound](https://img.shields.io/bithound/dependencies/github/brickifyjs/module-parse-lines.svg?style=flat-square)](https://www.bithound.io/github/brickifyjs/module-parse-lines/master/dependencies/npm)
[![bitHound](https://img.shields.io/bithound/devDependencies/github/brickifyjs/module-parse-lines.svg?style=flat-square)](https://www.bithound.io/github/brickifyjs/module-parse-lines/master/dependencies/npm)
[![Website](https://img.shields.io/website/https/m-pl.js.brickify.io.svg?label=website&style=flat-square)](https://m-pl.js.brickify.io)

## Install

```bash
$ npm install @brickify/m-pl
```

## Lib Parameters

* @param {string} content - Content to be parsed.
* @param {function} parser - Your line parser logic. (result, previousLine, line, nextLine)
* @param {Any} result - The first result that is passed on every line call.
* @param {Object} opts - Optional parameters. (opts)

## Parser Parameters

* @param {Any} result - Previous returned result.
* @param {number} lineNumber - line number.
* @param {string} line - Current line.
* @param {string|undefined} previousLine - Previous line.
* @param {string|undefined} nextLine - Next line.

## Options

* @param {function} callBack - Final callBack to be applied on the end result.

## Usage

```js
var parse = require('@brickify/m-pl');
var content = '\n\n\n\n1\n2\n3\n4';

function lineParser(result, lineNumber, line, previousLine, nextLine) {
  return result + parseInt(line);
}

parse(content, lineParser, 0, {
    callBack: function (result) {
      return result / 2;
    }
});

// Output : 5
```

## TODO
* Non blocking / Async version
* Add JSDoc, comment and Code Signature
