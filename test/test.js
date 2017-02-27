'use strict';

var expect = require('chai').expect;
var partsLib = require('../out/src/main');

describe('#partsLib', function() {
    it('should generate a test library from a directory', function() {
        var result = new partsLib.SagittaPartsLibrary();
        result.generatePartsLibrary();
    });

    it('should add a single part', function() {
        var result = new partsLib.SagittaPartsLibrary();
        result.insertOrUpdate('foo');
    });
});
