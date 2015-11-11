/*
 * catberry-jade
 *
 * Copyright (c) 2015 Denis Rechkunov and project contributors.
 *
 * catberry-jade's license follows:
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * This license applies to all parts of catberry-jade that are not externally
 * maintained libraries.
 */

'use strict';

module.exports = TemplateProvider;

/**
 * Creates new instance of Jade template provider.
 * @param {Jade} $jade Jade factory.
 * @constructor
 */
function TemplateProvider($jade) {
	this._jade = $jade;
	this._templates = Object.create(null);
}

/**
 * Current Jade factory.
 * @type {Jade}
 * @private
 */
TemplateProvider.prototype._jade = null;

/**
 * Current set of registered templates.
 * @type {Object}
 * @private
 */
TemplateProvider.prototype._templates = null;

/**
 * Registers compiled (precompiled) Jade template.
 * http://jadejs.com/reference.html
 * @param {string} name Template name.
 * @param {string} compiled Compiled template source.
 */
TemplateProvider.prototype.registerCompiled = function (name, compiled) {
	// jshint evil:true
	var getTemplate = new Function('jade', 'return ' + compiled + ';');
	this._templates[name] = getTemplate(this._jade);
};

/**
 * Renders template with specified data.
 * @param {string} name Name of template.
 * @param {Object} data Data context for template.
 * @returns {Promise<string>} Promise for rendered HTML.
 */
TemplateProvider.prototype.render = function (name, data) {
	if (!(name in this._templates)) {
		return Promise.reject(new Error('No such template'));
	}

	var promise;
	try {
		promise = Promise.resolve(this._templates[name](data));
	} catch (e) {
		promise = Promise.reject(e);
	}
	return promise;
};