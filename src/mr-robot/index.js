// src/mr-robot/index.js

import * as angela from './characters/angela-moss'
import darlene from './characters/darlene'
import * as elliot from './characters/elliot-anderson'
import gideon from './characters/gideon-goddard'


export default class MrRobot {

    listCharacters() {

        console.log('\n - Characters                  - Hacker Skills')
        listName(elliot.name(), elliot.hackerLevel())
        listName(angela.name, angela.hackerLevel())
        listName(darlene().name, darlene().hackerLevel())
        listName(gideon.name, gideon.hackerLevel())
    }
}

var listName = (name, level) => {

    var total = 26 - name.length
    var spaces = ''

    for (var i = 0; i < total; ++ i) {
        spaces += ' '
    }

    console.log(`    - ${name} ${spaces} - ${level}`)
}
