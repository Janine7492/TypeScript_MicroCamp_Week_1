//let welcomeText: string = "Willkommen im TypeScript-Kurs";

let participants: string[] = ["Lars", "Sophie", "Ahmed", "Marzio", "Brigitte"];

let blacklist: string[] = ["Lars"];

function greetEveryone(greeting: string, participants: string[]): string {
    let message: string = "";
    participants.forEach((participant) => {
        if (!blacklist.includes(participant)) {
            message += greeting + " " + participant + "\n";
        }

    });
    return message;
}


function addToParticipants(name: string, participants: string[]): string[] {
    participants.push(name);
    return participants;
}

function removeFromParticipants(name: string, participants: string[]): string[] {
    const index: number = participants.indexOf(name);
    if (index > -1) {
        participants.splice(index, 1);
    }
    return participants;
}

participants = addToParticipants("Chad", participants);

console.log(greetEveryone("Hi", participants));

participants = removeFromParticipants("Marzio", participants);

console.log(greetEveryone("Hi", participants));



export { };
