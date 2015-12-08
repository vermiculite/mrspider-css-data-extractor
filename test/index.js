var sinon = require('sinon');
var chai = require('chai');
var should = chai.should();
var CssDataExtractor = require('..');

describe('cssDataExtractor', function () {

    var validConfig;
    var validPage;

    beforeEach(function () {
        validConfig = {
            title: 'h1'
        };
        validPage = {
            $: function() {
                return {text: function() {
                    return 'hello';
                }}
            }
        };
    });

    it('should create a data property in the page', function () {
        var spider = {};
        var next = sinon.spy();
        var cssDataExtractor = CssDataExtractor(validConfig);
        cssDataExtractor(validPage, spider, next);
        next.called.should.equal(true);
        should.exist(validPage.data);
    });

    it('should not overwrite an already existing data property given a page with a data property', function () {
        validPage.data = {success: true};
        var spider = {};
        var next = sinon.spy();
        var cssDataExtractor = CssDataExtractor(validConfig);
        cssDataExtractor(validPage, spider, next);
        validPage.data.success.should.equal(true);
    });

    it('should throw an error given a page with no $ property', function () {
        validPage.data = {success: true};
        var spider = {};
        var next = sinon.spy();
        var cssDataExtractor = CssDataExtractor(validConfig);
        cssDataExtractor(validPage, spider, next);
        validPage.data.success.should.equal(true);
    });

    it('should throw an error given a page with no $ property', function () {
        validPage.data = {success: true};
        var spider = {};
        var next = sinon.spy();
        var cssDataExtractor = CssDataExtractor(validConfig);
        cssDataExtractor(validPage, spider, next);
        validPage.data.success.should.equal(true);
        validPage.data.title.should.equal('hello');
    });


    it('should throw an error if passed no options', function () {
        (function () {
            var cssDataExtractor = CssDataExtractor(null);
        }).should.throw(Error);
    });
});