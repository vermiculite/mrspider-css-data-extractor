module.exports = function (options) {
    validateOptions(options);
    
    return function (page, spider, next) {
        page.data = page.data || {};
        next();
    };
};


function validateOptions(options) {
    if(!options) {
        throw new Error('options are required for a css data extractor');
    }
}