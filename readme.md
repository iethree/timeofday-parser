# timeofday-parser

This is a simple script to parse a string containing a time of day into a known format. It accepts every reasonable english language time format I could think of.

[![NPM Version][npm-image]][npm-url]
[![Linux Build][travis-image]][travis-url]
## Install

`npm install timeofday-parser`

## Usage

```javascript

var timeParser = require('timeofday-parser');

output = timeParser.parse("906pm");
// {h: 9, m: 6}

output = timeParser.parse("26pm");
// false

```

## Examples

```
9        {"h":9,"m":0}
9am      {"h":9,"m":0}
9p       {"h":21,"m":0}
926      {"h":9,"m":26}
0926     {"h":9,"m":26}
2126     {"h":21,"m":26}
9:26pm   {"h":21,"m":26}
9.26 am  {"h":9,"m":26}
9,26  	 {"h":9,"m":0}
926pm    {"h":21,"m":26}
9.26 pm  {"h":21,"m":26}
0926am   {"h":9,"m":26}
926p     {"h":21,"m":26}
9,26     {"h":9,"m":0}
9260     false
26:90    false
26pm     false
```

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/timeofday-parser.svg
[npm-url]: https://npmjs.org/package/timeofday-parser
[travis-image]: https://img.shields.io/travis/iethree/timeofday-parser/master.svg
[travis-url]: https://travis-ci.org/iethree/timeofday-parser
