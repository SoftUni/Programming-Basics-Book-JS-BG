function calculateRectangleArea([arg1, arg2, arg3, arg4]) {
    var x1 = parseInt(arg1);
    var y1 = parseInt(arg2);
    var x2 = parseInt(arg3);
    var y2 = parseInt(arg4);
    
    // Изчисляване страните на правоъгълника:
    var width = Math.max(x1, x2) - Math.min(x1, x2);
    var height = Math.max(y1, y2) - Math.min(y1, y2);

    console.log("Area = " + width * height);
    console.log("Perimeter = " + 2 * (width + height));
}

