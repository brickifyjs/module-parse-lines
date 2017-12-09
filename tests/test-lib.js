'use strict';

var o = require('ospec');
var parse = require('../lib');

o.spec('API', function () {
  o('parse with options', function () {
    var content = '\n\n\n\n1\n2\n3\n4';

    function lineParser(result, lineNumber, line, previousLine, nextLine) {
      return result + parseInt(line);
    }

    var result = parse(content, lineParser, 0, {
      callBack: function (result) {
        return result / 2;
      }
    });

    o(result).equals(5);
  });

  o('parse without options', function () {
    var content = '1\n2\n3\n4';

    function lineParser(result, lineNumber, line, previousLine, nextLine) {
      return result + parseInt(line);
    }

    var result = parse(content, lineParser, 0);

    o(result).equals(10);
  });
});
