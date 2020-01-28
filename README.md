express-input
====
expressjs request helper laravel input method

## Installation
```
$ npm install express-input
```

## Usage
```javascript
const expressInput = require('express-input')
app.use(expressInput())
```
```javascript
const param1 = req.input('param1', 'defaultValue')
const params = req.input()
```

## Licence

[MIT](http://opensource.org/licenses/mit-license.php)

## Author

[nmrmsys](https://github.com/nmrmsys)