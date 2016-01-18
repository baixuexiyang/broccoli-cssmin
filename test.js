'use strict'
/**
 * test compress css
 * @type {[type]}
 */
var cssmin = require('./');
var fixture = require('broccoli-fixture');
var chai = require('chai'),
	expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('broccoli-cssmin', function() {
	var options;
	before(function() {
		options = {
			maxLineLen: 0,
		    expandVars: false,
		    cuteComments: true
		};
	});
	it('compress', function() {
		var inputNode = new fixture.Node({
			'test.css': 'body{"color":red}'
		})
		return expect(fixture.build(new cssmin(inputNode, options))).to.eventually.deep.equal({
			'test.css': 'body{"color":red}'
		})
	})
})
