// test/mocha/characters/angela-moss.js

import {expect} from 'chai'
import * as angela from '../../../src/mr-robot/characters/angela-moss'

var she = it


describe('Angela Moss', () => {

    she('should be called Angela', () => {

        expect(angela.name).to.equal('Angela Moss')
    })

    she('should have some hacking skills', () => {

        expect(angela.hackerLevel()).to.be.above(4)
    })

})
