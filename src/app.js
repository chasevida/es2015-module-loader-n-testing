// src/app.js

import MrRobot from './mr-robot';


export class App {

    constructor(message) {

        console.log(message);

        var mrRobot = new MrRobot();
        mrRobot.listCharacters();
    }
}

new App('Mr Robot');
