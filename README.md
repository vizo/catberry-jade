# Catberry Jade Adapter

[![NPM](https://nodei.co/npm/catberry-jade.png)](https://nodei.co/npm/catberry-jade/)

It is an adapter for [Jade](http://jade-lang.com/) template engine
that makes possible to use it from [Catberry](https://github.com/catberry/catberry) application.

## Usage
You can use the adapter like this in ./browser.js or ./server.js.
Actually, [Catberry CLI](https://github.com/catberry/catberry-cli) does it for you.

```javascript
var jade = require('catberry-jade'),
	cat = catberry.create(config);
jade.register(cat.locator);
```

## Contributing

There are a lot of ways to contribute:

* Give it a star
* Join the [Gitter](https://gitter.im/catberry/catberry) room and leave a feedback or help with answering users' questions
* [Submit a bug or a feature request](https://github.com/catberry/catberry-jade/issues)
* [Submit a PR](https://github.com/catberry/catberry-jade/blob/develop/CONTRIBUTING.md)

Denis Rechkunov <denis.rechkunov@gmail.com>