// src/mr-robot/characters/elliot.js

var names = ['Elliot Anderson', 'Mr Robot']

export function name() {

    // destruct an array
    var [elliot, mrRobot] = names;

    return Math.random() > 0.5 ? elliot : mrRobot;
}

export function hackerLevel () {

    return 11
}
