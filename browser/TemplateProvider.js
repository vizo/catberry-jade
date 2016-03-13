'use strict';

class TemplateProvider {

	/**
	 * Creates new instance of Jade template provider.
	 * @param {Locator} locator The service locator for resolving dependencies.
	 * @constructor
	 */
	constructor(locator) {
		const config = locator.resolve('config') || {};

		/**
		 * Current Jade factory.
		 * @type {Jade}
		 * @private
		 */
		this._jade = locator.resolve('jade');

		/**
		 * Config for Jade
		 *
		 * @private
		 */
		this._jadeOptions = config.jadeOptions || {};

		/**
		 * Current set of registered templates.
		 * @type {Object}
		 * @private
		 */
		this._templates = Object.create(null);
	}

	/**
	 * Registers compiled (precompiled) Jade template.
	 * http://jadejs.com/reference.html
	 * @param {string} name Template name.
	 * @param {string} compiled Compiled template source.
	 */
	registerCompiled(name, compiled) {

		/* eslint no-new-func: 0 */
		const getTemplate = new Function('jade', `return ${compiled};`);
		this._templates[name] = getTemplate(this._jade);
	}

	/**
	 * Renders template with specified data.
	 * @param {string} name Name of template.
	 * @param {Object} data Data context for template.
	 * @returns {Promise<string>} Promise for rendered HTML.
	 */
	render(name, data) {
		if (!(name in this._templates)) {
			return Promise.reject(new Error(`"${name}" not found among registered templates`));
		}

		let promise;
		try {
			promise = Promise.resolve(this._templates[name](data));
		} catch (e) {
			promise = Promise.reject(e);
		}
		return promise;
	}
}

module.exports = TemplateProvider;
