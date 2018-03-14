'use strict';

const { expect } = require('chai');
const cleaner = require('../index');

const objTest = {
    completeValidKey: { str: "string" },
    emptyObj: {},
    validKey: { emptyObj: {}, emtpyStr: '', validKey: '1', nullKey: null, emptyDeep: { emptyObj: {}}},
    emptyStr: '',
    validKey2: 34,
    nullKey: null,
    deepEmptyObj: { emptyObj: {} }
};

describe('Clean test object', () => {

    it('Should not modify original object', () => {
        const copy = Object.assign({}, objTest);
        cleaner(copy);
        expect(copy).to.deep.equal(objTest);
    })

    it('Should be clean recursively an complex object', () => {
        const cleanObj = cleaner(objTest);
        
        expect(cleanObj).to.have.property('completeValidKey');
        expect(cleanObj.completeValidKey).to.have.property('str');
        
        expect(cleanObj).not.to.have.property('emptyObj');

        expect(cleanObj).to.have.property('validKey');
        expect(cleanObj.validKey).not.to.have.property('emptyObj');
        expect(cleanObj.validKey).not.to.have.property('emptyStr');
        expect(cleanObj.validKey).to.have.property('validKey');
        expect(cleanObj.validKey).not.to.have.property('emptyDeep');
        
        expect(cleanObj).not.to.have.property('emptyStr');

        expect(cleanObj).to.have.property('validKey2');

        expect(cleanObj).not.to.have.property('deepEmptyObj');
    })

    it('Should fail it input parameter is not an object', () => {
        expect(cleaner.bind(null, [])).to.throw(Error);
    })
});

