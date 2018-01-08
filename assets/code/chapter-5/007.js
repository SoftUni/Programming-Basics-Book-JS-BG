function drawRhombus(n) {
    for (var row = 1; row <= n; row++) {
        var line = "";
        for (var col = 1; col <= n - row; col++) {
            line += " ";
        }

        line += "*";

        for (var col = 1; col < row; col++) {
            line += " *";
        }

        console.log(line);
    }
}

// Todo: print the bottom half of the rhombus

drawRhombus(4);