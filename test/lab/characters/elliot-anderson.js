// test/lab/characters/elliot-anderson.js

import {expect} from 'code';
import Lab from 'lab';
import * as elliot from '../../../src/mr-robot/characters/elliot-anderson'

var lab = exports.lab = Lab.script()
var {describe, it} = lab
var he = it


describe('Elliot Anderson', () => {

    he('should not be altogether functional', (done) => {

        expect(elliot).to.not.be.a.function()
        done()
    })

    he('should be called Elliot Anderson', (done) => {

        expect(elliot.name()).to.equal('Elliot Anderson')
        done()
    })

    he('should have mean hacking skills!', (done) => {

        expect(elliot.hackerLevel()).to.be.above(10)
        done()
    })

})
