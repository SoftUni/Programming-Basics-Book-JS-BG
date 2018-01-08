function drawSquare(n) {
    // print the top row -> + - - +
    var topRow = "+";
    for (var top = 0; top < n - 2; top++) {
        topRow += " -";
    }
    topRow += " +";
    console.log(topRow);

    // print the middle row -> | - - |
    for (var mid = 0; mid < n - 2; mid++) {
        var middleRow = "|"
        for (var j = 0; j < n - 2; j++) {
            middleRow += " -"
        }
        middleRow += " |"
        console.log(middleRow);
    }

    // print the bottom row -> + - - +
    var bottomRow = "+";
    for (var bot = 0; bot < n - 2; bot++) {
        bottomRow += " -";
    }
    bottomRow += " +";
    console.log(bottomRow);
}

drawSquare(6);