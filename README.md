# Deep clean

Simple library to recursively clean an object. The returned object will not have null values, empty strings or empty objects.
Original object will not be modify.

## Installation:
```javascript
npm install deep-clean --save
```

## Usage example:
```javascript
const cleaner = require('deep-clean');

const objToClean = {
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

const cleanedObj = cleaner(objToTest);

/* 
    cleanedObj will be a copy obj to Test but without {}, '' or null properties
    cleanedObj = {
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

## Testing
```javascript
npm run test
```