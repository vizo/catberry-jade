'use strict';

const Jade = require('./lib/jade.js');
const TemplateProvider = require('./lib/TemplateProvider');

module.exports = {
	register(locator) {
		locator.registerInstance('jade', Jade);
		locator.register('templateProvider', TemplateProvider, true);
	},
	Jade,
	TemplateProvider
};
