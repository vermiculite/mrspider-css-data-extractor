var sinon = require('sinon');
var chai = require('chai');
var should = chai.should();
var CssDataExtractor = require('..');

describe('cssDataExtractor', function () {

    var validConfig;

    beforeEach(function () {
        validConfig = {};
    });

    it('should create a data property in the page', function () {
        var page = {};
        var spider = {};
        var next = sinon.spy();
        var cssDataExtractor = CssDataExtractor(validConfig);
        cssDataExtractor(page, spider, next);
        next.called.should.equal(true);
        should.exist(page.data);
    });

    it('should not overwrite an already existing data property given a page with a data property', function () {
        var page = {
            data: {
                success: true
            }
        };
        var spider = {};
        var next = sinon.spy();
        var cssDataExtractor = CssDataExtractor(validConfig);
        cssDataExtractor(page, spider, next);
        page.data.success.should.equal(true);
    });


    it('should throw an error if passed no options', function () {
        (function () {
            var cssDataExtractor = CssDataExtractor(null);
        }).should.throw(Error);
    });
});