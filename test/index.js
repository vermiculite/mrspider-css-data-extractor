var sinon = require('sinon');
var chai = require('chai');
var should = chai.should();
var CssDataExtractor = require('..');

describe('cssDataExtractor', function() {

    it('should create a data property in the page', function() {
        var page = {};
        var spider = {};
        var next = sinon.spy();
        var cssDataExtractor = CssDataExtractor();
        cssDataExtractor(page, spider, next);
        next.called.should.equal(true);
        should.exist(page.data);
    })
});