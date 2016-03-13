'use strict';

const BrowserTemplateProvider = require('../browser/TemplateProvider');

class TemplateProvider extends BrowserTemplateProvider {

	/**
	 * Registers compiled (precompiled) Jade template.
	 * http://jadejs.com/reference.html
	 * @param {string} name Template name.
	 * @param {string} compiled Compiled template source.
	 */
	registerCompiled(name, compiled) {

		/* eslint no-new-func: 0 */
		const getTemplate = new Function('jade', `return ${compiled};`);
		this._templates[name] = getTemplate(this._jade.runtime);
	}

	/**
	 * Compiles (precompiles) Jade template.
	 * http://jade-lang.com/api/
	 * @param {string} source Template source.
	 * @returns {string} Precompiled source (template specification).
	 */
	compile(source) {
		return this._jade.compileClient(source, this._jadeOptions);
	}
}

module.exports = TemplateProvider;
