'use strict';

const Jade = require('jade');
const TemplateProvider = require('./lib/TemplateProvider');

module.exports = {
	register(locator) {
		locator.registerInstance('jade', Jade);
		locator.register('templateProvider', TemplateProvider, true);
	},
	Jade,
	TemplateProvider
};
