let welcomeText: string = "Willkommen im TypeScript-Kurs";

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



console.log(greetEveryone(welcomeText, participants));

export { };