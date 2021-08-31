"use strict";
exports.__esModule = true;
var path = require("path");
var module_alias_1 = require("module-alias");
var files = path.resolve(__dirname, '../..');
module_alias_1["default"].addAliases({
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'test')
});
