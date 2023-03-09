"use strict";
//=========================================================================
//          Uebung 1
//=========================================================================
Object.defineProperty(exports, "__esModule", { value: true });
function concatenate(parameterOne, parameterTwo) {
    let result = parameterOne + parameterTwo;
    return result;
}
;
console.log(concatenate("ein ", "String"));
//=========================================================================
//             Uebung 2
//=========================================================================
function toNumber(parameterNumber) {
    let result = Number(parameterNumber);
    return result;
}
console.log(toNumber("5"));
//=========================================================================
//              Uebung 3
//=========================================================================
function chain(parameterOne, parameterTwo) {
    let result = "";
    for (let i = 0; i < parameterTwo; i++) {
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
function isVowel(x) {
    if (x.toLowerCase() === "a" || x.toLowerCase() === "e" || x.toLowerCase() === "i" || x.toLowerCase() === "o" || x.toLowerCase() === "u") {
        return true;
    }
    else {
        return false;
    }
}
console.log(isVowel("a"));
console.log(isVowel("K"));
console.log(isVowel("I"));
console.log(isVowel("p"));
//=========================================================================
//              Uebung 5
//=========================================================================
function vowels(x, y) {
    let array = [...x];
    let result = [];
    array.map((character) => {
        if (isVowel(character)) {
            for (let i = 0; i < y; i++) {
                result.push(character);
            }
            ;
        }
        else {
            result.push(character);
        }
        ;
    });
    return result.join("");
}
;
console.log(vowels("hallo", 3));
console.log(vowels("Ente", 5));
//=========================================================================
//              Uebung 6
//=========================================================================
function dice() {
    let result = Math.floor(Math.random() * 6) + 1;
    return result;
}
function diceGame(x, y) {
    let resultOne = dice();
    let resultTwo = dice();
    let resultTotal = resultOne + resultTwo;
    const diffOneCalc = () => {
        if (x < resultTotal) {
            let result = resultTotal - x;
            return result;
        }
        else if (x > resultTotal) {
            let result = x - resultTotal;
            return result;
        }
    };
    const diffTwoCalc = () => {
        if (y < resultTotal) {
            let result = resultTotal - y;
            return result;
        }
        else if (y > resultTotal) {
            let result = y - resultTotal;
            return result;
        }
    };
    const winnerCalc = () => {
        let result = 0;
        if (diffOne < diffTwo) {
            result = 1;
        }
        else if (diffTwo < diffOne) {
            result = 2;
        }
        ;
        return result;
    };
    let diffOne = diffOneCalc();
    let diffTwo = diffTwoCalc();
    let winner = winnerCalc();
    let finalResult = `Player1 hat die Abweichung ${diffOne} und Player2 hat die Abweichung ${diffTwo}. Das Würfelergebnis ist ${resultTotal}, Player${winner} gewinnt also!`;
    return finalResult;
}
console.log(diceGame(5, 10));
//# sourceMappingURL=uebung1.js.map