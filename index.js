module.exports = function () {
    return function (page, spider, next) {
        page.data = {};
        next();
    };
};