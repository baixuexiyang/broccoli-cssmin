var Filter = require('broccoli-filter');
var Uglifycss = require('uglifycss')

module.exports = UglifyCssFilter
UglifyCssFilter.prototype = Object.create(Filter.prototype)
UglifyCssFilter.prototype.constructor = UglifyCssFilter
function UglifyCssFilter (inputTree, options) {
  if (!(this instanceof UglifyCssFilter)) return new UglifyCssFilter(inputTree, options)
  Filter.call(this, inputTree, options)
  this.options = options || {
    maxLineLen: 0,
    expandVars: false,
    cuteComments: true
  };
}
UglifyCssFilter.prototype.extensions = ['css'];
UglifyCssFilter.prototype.targetExtension = 'css';

UglifyCssFilter.prototype.processString = function (string) {
  return Uglifycss.processFiles(string, this.options);
};
