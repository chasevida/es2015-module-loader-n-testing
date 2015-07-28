// test/lab/lab-example.js

import {expect} from 'code'
import Lab from 'lab'

var lab = exports.lab = Lab.script()
var {describe, it} = lab


describe('Lab & Code', () => {

    it('should pass standard test', (done) => {

        expect(1 + 1).to.equal(2)
        done()
    })
})
