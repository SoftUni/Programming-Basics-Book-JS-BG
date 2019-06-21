function drawSquare(n) {
    // print the top row -> + - - +
    let topRow = "+";
    for (let top = 0; top < n - 2; top++) {
        topRow += " -";
    }
    topRow += " +";
    console.log(topRow);

    // print the middle row -> | - - |
    for (let mid = 0; mid < n - 2; mid++) {
        let middleRow = "|"
        for (let j = 0; j < n - 2; j++) {
            middleRow += " -"
        }
        middleRow += " |"
        console.log(middleRow);
    }

    // print the bottom row -> + - - +
    let bottomRow = "+";
    for (let bot = 0; bot < n - 2; bot++) {
        bottomRow += " -";
    }
    bottomRow += " +";
    console.log(bottomRow);
}

drawSquare(6);