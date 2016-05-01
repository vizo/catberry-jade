# Catberry Jade Adapter

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/catberry/main?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge)

It is an adapter for [Jade](http://jade-lang.com/) template engine
that makes possible to use it from [Catberry](https://github.com/catberry/catberry) application.

## Installation

```bash
npm install catberry-jade --save
```

## Usage
You can use the adapter in ./browser.js, ./server.js or ./build.js as following:

```javascript
const jade = require('catberry-jade');
const cat = catberry.create(config);
jade.register(cat.locator);
```

In fact, [Catberry CLI](https://github.com/catberry/catberry-cli) does it for you.

## Global variables
You can add global variables to Catberry application's [`config`](https://github.com/reflog/catberry/blob/develop/docs/index.md#config), for example:

```javascript
{
	template: {
		globals: {
			globalVariableKey: 'globalVariableValue'
		},
		someOtherParameter: 'someOtherValue'
	},
	someOtherParameter: 'someOtherValue'
}
```

or at runtime, for example:
```javascript
  const templateProvider = cat.locator.resolve('templateProvider');
  templateProvider.globals = templateProvider.globals || {};
  templateProvider.globals.globalVariableKey = 'globalVariableValue';
```

## Contributing

There are a lot of ways to contribute:

* Give it a star
* Join the [Gitter](https://gitter.im/catberry/main) room and leave a feedback or help with answering users' questions
* [Submit a bug or a feature request](https://github.com/catberry/catberry-jade/issues)
* [Submit a PR](https://github.com/catberry/catberry-jade/blob/develop/CONTRIBUTING.md)

Denis Rechkunov <denis.rechkunov@gmail.com>
