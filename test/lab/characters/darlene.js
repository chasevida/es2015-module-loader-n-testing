// test/lab/characters/elliot-anderson.js

import {expect} from 'code';
import Lab from 'lab';
import darlene from '../../../src/mr-robot/characters/darlene'

var lab = exports.lab = Lab.script()
var {describe, it} = lab
var she = it


describe('Darlene', () => {

    she('should be called Darlene', (done) => {

        expect(darlene().name).to.equal('Darlene')
        done()
    })

    she('should have no hacking skills', (done) => {

        expect(darlene().hackerLevel()).to.equal(0)
        done()
    })

})
