"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let welcomeText = "Willkommen im TypeScript-Kurs";
let participants = ["Lars", "Sophie", "Ahmed", "Marzio", "Brigitte"];
let blacklist = ["Lars"];
function greetEveryone(greeting, participants) {
    let message = "";
    participants.forEach((participant) => {
        if (!blacklist.includes(participant)) {
            message += greeting + " " + participant + "\n";
        }
    });
    return message;
}
console.log(greetEveryone(welcomeText, participants));
//# sourceMappingURL=uebung2.js.map