'use strict';

function parseLines(lines, parser, result) {
  var ctxResult = result;

  for (var i = 0, len = lines.length; i < len; i++) {
    ctxResult = parser(ctxResult, i, lines[i], lines[i - 1], lines[i + 1]);
  }

  return ctxResult;
}

function parseContent(content) {
  var lines = content.split(/\n/g);

  return lines;
}

function parse(content, parser, result, opts) {
  var ctxOpts = opts || {};

  var lines = parseContent(content);
  var ctxResult = parseLines(lines, parser, result);

  ctxResult = ctxOpts.callBack && ctxOpts.callBack(ctxResult) || ctxResult;

  return ctxResult;
}

module.exports = parse;
