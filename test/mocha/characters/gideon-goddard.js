// test/mocha/characters/angela-moss.js

import {expect} from 'chai'
import gideon from '../../../src/mr-robot/characters/gideon-goddard'

var he = it


describe('Gideon Goddard', () => {

    he('should be called Gideon', () => {

        expect(gideon.name).to.equal('Gideon Goddard')
    })

    he('should have reasonable hacking skills', () => {

        expect(gideon.hackerLevel()).to.be.above(6)
    })

})
