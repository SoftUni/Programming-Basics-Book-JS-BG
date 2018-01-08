function drawTree(n) {
    for (var i = 0; i <= n; i++) {
        var stars = "*".repeat(i);
        var spaces = " ".repeat(n - i);
        var body = " | ";
        var row = spaces + stars + body + stars + spaces;
        console.log(row);
    }
}

drawTree(6)