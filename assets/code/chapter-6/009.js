function sunGlasses(n) {
    // Print the top part
    let topLine = "*".repeat(2 * n);
    topLine += " ".repeat(n);
    topLine += "*".repeat(2 * n);
    console.log(topLine);

    // Print the middle part
    for (let i = 0; i < n - 2; i++) {
        let middleLine = "*";
        middleLine += "/".repeat(2 * n - 2);
        middleLine += "*";

        if (i === Math.floor((n - 1) / 2 - 1)) {
            middleLine += "|".repeat(n);
        } else {
            middleLine += " ".repeat(n);
        }

        middleLine += "*";
        middleLine += "/".repeat(2 * n - 2);
        middleLine += "*";
        console.log(middleLine);
    }

    // Print the bottom part
    let bottomLine = "*".repeat(2 * n);
    bottomLine += " ".repeat(n);
    bottomLine += "*".repeat(2 * n);
    console.log(bottomLine);

}

sunGlasses(6);