/* jshint esversion: 6 */

/*
 * Problem 1
 */
/*
tribonacciFirst = "1";
tribonacciSecond = "2";
tribonacciThird = "3";
spiralCurrent = "5";
spiralStep = "2";

tribonacciFirst = Number(tribonacciFirst);
tribonacciSecond = Number(tribonacciSecond);
tribonacciThird = Number(tribonacciThird);

spiralCurrent = Number(spiralCurrent);
spiralStep = Number(spiralStep);

// Trbonacci
let tribonacciNumbers = [tribonacciFirst,
                         tribonacciSecond,
                         tribonacciThird];

let tribonacciCurrent = tribonacciThird;

while (tribonacciCurrent < 1000000) {
    tribonacciCurrent = tribonacciFirst +
        tribonacciSecond + tribonacciThird;

    tribonacciNumbers.push(tribonacciCurrent);

    tribonacciFirst = tribonacciSecond;
    tribonacciSecond = tribonacciThird;
    tribonacciThird = tribonacciCurrent;
}

// Spiral
let spiralNumbers = [spiralCurrent];
let spiralCount = 0, spiralStepMul = 1;
while (spiralCurrent < 1000000) {
    spiralCurrent += spiralStep * spiralStepMul;
    spiralNumbers.push(spiralCurrent);
    spiralCount++;
    if (spiralCount % 2 == 0) {
        spiralStepMul++;
    }
}

// Find answer
let found = false;
for (let i = 0; i < tribonacciNumbers.length; i++) {
    for (let j = 0; j < spiralNumbers.length; j++) {
        if (tribonacciNumbers[i] == spiralNumbers[j] &&
            tribonacciNumbers[i] <= 1000000) {
            console.log(tribonacciNumbers[i]);
            found = true;
            break;
        }
    }

    if (found) {
        break;
    }
}

if (!found) {
    console.log("No");
}


while (tribonacciCurrent <= 1000000 && spiralCurrent <= 1000000) {
    if (tribonacciCurrent == spiralCurrent) {
        // TODO: Print and stop execution
    }
    else if (tribonacciCurrent < spiralCurrent) {
        // TODO: Generate next Tribonacci number
    }
    else {
        // TODO: Generate next Spiral number
    }
}
*/

/*
 * Problem 2
 */
/*
firstYear = "2012";
secondYear = "2014";
numberToSearchFor = "80";

firstYear = Number(firstYear);
secondYear = Number(secondYear);
numberToSearchFor = Number(numberToSearchFor);

let date = new Date(firstYear, 0, 1);
let found = false;

while (date.getFullYear() <= secondYear) {
    
    let d1 = Math.floor(date.getDate() / 10); // First day digit
    let d2 = date.getDate() % 10; // Second day digit

    let d3 = Math.floor((date.getMonth() + 1) / 10); // First month digit
    let d4 = (date.getMonth() + 1) % 10; // Second month digit

    let d5 = Math.floor(date.getFullYear() / 1000); // First year digit
    let d6 = Math.floor(date.getFullYear() / 100) % 10; // Second year digit
    let d7 = Math.floor(date.getFullYear() / 10) % 10; // Third year digit
    let d8 = date.getFullYear() % 10; // Fourth year digit

    let weight = d1 * (d2 + d3 + d4 + d5 + d6 + d7 + d8) +
                 d2 * (d3 + d4 + d5 + d6 + d7 + d8) +
                 d3 * (d4 + d5 + d6 + d7 + d8) +
                 d4 * (d5 + d6 + d7 + d8) +
                 d5 * (d6 + d7 + d8) +
                 d6 * (d7 + d8) +
                 d7 * d8;
                 
    if (weight == numberToSearchFor) {
        console.log("" + d1 + d2 + "-" + d3 + d4 + "-" + d5 + d6 + d7 + d8);
        found = true;
    }

    date.setDate(date.getDate() + 1);
}

if (!found) {
    console.log("No");
}
*/

/*
 * Problem 3
 */
firstNumber = "200";
secondNumber = "300";

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

let pattern = "abcde";
let result = "";

for (let i1 = 0; i1 < 5; i1++) {
    for (let i2 = 0; i2 < 5; i2++) {
        for (let i3 = 0; i3 < 5; i3++) {
            for (let i4 = 0; i4 < 5; i4++) {
                for (let i5 = 0; i5 < 5; i5++) {

                    let fullWord = pattern[i1] +
                                   pattern[i2] +
                                   pattern[i3] +
                                   pattern[i4] +
                                   pattern[i5];

                    let word = pattern[i1];
                    
                    if (word.indexOf(pattern[i2]) == -1) word += pattern[i2];
                    if (word.indexOf(pattern[i3]) == -1) word += pattern[i3];
                    if (word.indexOf(pattern[i4]) == -1) word += pattern[i4];
                    if (word.indexOf(pattern[i5]) == -1) word += pattern[i5];

                    let weight = 0;
                    for (let i = 0; i < word.length; i++) {
                        let multiplier = 0;
                        switch (word[i]) {
                            case 'a':
                                multiplier = 5;
                                break;
                            case 'b':
                                multiplier = -12;
                                break;
                            case 'c':
                                multiplier = 47;
                                break;
                            case 'd':
                                multiplier = 7;
                                break;
                            case 'e':
                                multiplier = -32;
                                break;
                            default:
                                break;
                        }

                        weight += multiplier * (i + 1);
                    }

                    if (weight >= firstNumber && weight <= secondNumber) {
                        result += fullWord + " ";
                    }
                }
            }
        }
    }
}

if (result == "") {
    console.log("No");
} else {
    console.log(result.trim());
}
