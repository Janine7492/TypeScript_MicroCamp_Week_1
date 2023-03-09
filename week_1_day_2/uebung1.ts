//=========================================================================
//          Uebung 1
//=========================================================================

function concatenate(parameterOne: string, parameterTwo: string): string {
    let result: string = parameterOne + parameterTwo;

    return result;
};

console.log(concatenate("ein ", "String"));

//=========================================================================
//             Uebung 2
//=========================================================================

function toNumber(parameterNumber: string): number {
    let result: number = Number(parameterNumber);

    return result;
}

console.log(toNumber("5"));

//=========================================================================
//              Uebung 3
//=========================================================================

function chain(parameterOne: string, parameterTwo: number): string {
    let result: string = "";

    for (let i: number = 0; i < parameterTwo; i++) {
        result += parameterOne;
    }

    return result;
}

console.log(chain("test", 3));
console.log(chain("test", 1));
console.log(chain("test", 0));

//=========================================================================
//              Uebung 4
//=========================================================================

function isVowel(x: string): boolean {
    if (x.toLowerCase() === "a" || x.toLowerCase() === "e" || x.toLowerCase() === "i" || x.toLowerCase() === "o" || x.toLowerCase() === "u") {
        return true
    } else {
        return false
    }
}

console.log(isVowel("a"));
console.log(isVowel("K"));
console.log(isVowel("I"));
console.log(isVowel("p"));

//=========================================================================
//              Uebung 5
//=========================================================================

function vowels(x: string, y: number): string {
    let array: string[] = [...x];
    let result: string[] = [];

    array.map((character) => {
        if (isVowel(character)) {
            for (let i: number = 0; i < y; i++) {
                result.push(character);
            };
        } else {
            result.push(character)
        };
    });

    return result.join("");
};


console.log(vowels("hallo", 3));
console.log(vowels("Ente", 5));

//=========================================================================
//              Uebung 6
//=========================================================================

function dice(): number {
    let result: number = Math.floor(Math.random() * 6) + 1;
    return result;
}

function diceGame(x: number, y: number): string {
    let resultOne: number = dice();
    let resultTwo: number = dice();
    let resultTotal: number = resultOne + resultTwo;



    const diffOneCalc = (): number => {
        if (x < resultTotal) {
            let result = resultTotal - x;
            return result
        } else if (x > resultTotal) {
            let result = x - resultTotal;
            return result
        }
    }

    const diffTwoCalc = (): number => {
        if (y < resultTotal) {
            let result = resultTotal - y;
            return result
        } else if (y > resultTotal) {
            let result = y - resultTotal;
            return result
        }
    }

    const winnerCalc = (): number => {
        let result: number = 0;
        if (diffOne < diffTwo) {
            result = 1
        } else if (diffTwo < diffOne) {
            result = 2
        };

        return result;
    };

    let diffOne: number = diffOneCalc();
    let diffTwo: number = diffTwoCalc();
    let winner: number = winnerCalc();

    let finalResult = `Player1 hat die Abweichung ${diffOne} und Player2 hat die Abweichung ${diffTwo}. Das Würfelergebnis ist ${resultTotal}, Player${winner} gewinnt also!`

    return finalResult;
}


console.log(diceGame(5, 10));

//=========================================================================

export { };