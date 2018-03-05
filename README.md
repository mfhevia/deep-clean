# deep-clean

[![npm version][npmsemver-image]][npmsemver-url]
[![Build Status][ci-image]][ci-url]
[![Code Climate][cq-image]][cq-url]
[![Dependencies][deps-image]][deps-url]
[![Dev Dependencies][dev-deps-image]][dev-deps-url]
[![License][license-image]][license-url]

> `deep-clean` removes object properties containing nulls, empty string or empty object values.

## Table of Contents

* [Installing](#installing)
* [Usage](#usage)
* [Contributing and help](#contributing)
    * [Criticism](#criticism)
    * [Developing](#developing)
    * [Bug reports, feature requests and discussion](#contributing)
* [License](#license)
* [Frequently Asked Questions](#faq)


## <a name="installing"></a> Installing

```
npm install --save deep-clean
```

## <a name="usage"></a> Usage

`deep-clean` exports a function. This function works without side effects: input is cloned and *not* modified, the clean object is returned.

```javascript
const deepClean = require('deep-clean');

const dirtyObject = {
    key1: { 
        str: 'str' 
    },
    key2: { 
        emptyObj: {},
        emptyStr: '',
        valid: 43,
        nullValue: null,
        deepEmptyObj: { 
            empty: {}
        }
    },
    key3: 14,
    key4: { 
        a: {}
    }
};


const cleanObject = deepClean(dirtyObject);

/* 
    cleanObject will have all the original properties but those which value is {}, '' or null.
    cleanObject = {
        key1: { 
            str: 'str' 
        },
        key2: {
            valid: 43
        },
        key3: 14 
    }
*/
```

## <a name="contributing"></a> Contributing and help

### <a name="criticism"></a> Criticism
If you think something could be done better or simply sucks, bring up a issue on the [tracker](https://github.com/mfhevia/deep-clean/issues). Don't be shy. I really love feedback and technical discussions.

### <a name="developing"></a> Developing
Pull requests are welcome (and will make me cry in joy). Also, did I already say that I **love** technical discussions? Feel free to open a issue on the [tracker](https://github.com/mfhevia/deep-clean/issues) if you have any doubt.

### <a name="bugs"></a> Bug reports, feature requests and discussion

Use the [GitHub issue tracker](https://github.com/mfhevia/deep-clean/issues) to report any bugs or file feature requests

## <a name="license"></a> License

Copyright (c) 2017 Mario Fernández Hevia. Licensed under the MIT license.

## <a name="faq"></a> Frequently Asked Questions

### Should I use it in my project?

Probably not. At least, not yet. I usually follow __semver__ for modules versioning and while it is at 0.x.x you can expect breaking changes.



[npmsemver-image]: https://img.shields.io/badge/version-0.0.1-orange.svg
[npmsemver-url]: https://github.com/mfhevia/deep-clean
[ci-image]: https://circleci.com/gh/mfhevia/deep-clean.svg?style=svg
[ci-url]: https://circleci.com/gh/mfhevia/deep-clean
[cq-image]: https://api.codeclimate.com/v1/badges/9961fff740438ec1599b/maintainability
[cq-url]: https://codeclimate.com/github/mfhevia/deep-clean/maintainability
[deps-image]: https://david-dm.org/mfhevia/deep-clean.svg
[deps-url]: https://david-dm.org/mfhevia/deep-clean
[dev-deps-image]: https://david-dm.org/mfhevia/deep-clean/dev-status.svg
[dev-deps-url]: https://david-dm.org/mfhevia/deep-clean#info=devDependencies
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
