function calculateCircleAreaAndPerimeter([arg1]) {
    let r = parseInt(arg1);
    console.log("Area = " + Math.PI * r * r); 
    // Math.PI - вградена в JavaScript константа за π
    console.log("Perimeter = " + 2 * Math.PI * r);
}

calculateCircleAreaAndPerimeter([10])