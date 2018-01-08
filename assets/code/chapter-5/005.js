function drawTriangle(n) {
    for (var i = 1; i <= n; i++) {
        var dolars = "$";

        for (var j = 1; j < i; j++) {
            dolars += " $";
        }

        console.log(dolars);
    }
}

drawTriangle(4);