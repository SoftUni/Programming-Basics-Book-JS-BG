function drawSquare(n) {
    for (var i = 1; i <= n; i++) {
        var stars = "*";

        for (var j = 1; j < n; j++) {
            stars += " *";
        }

        console.log(stars);
    }
}

drawSquare(4);