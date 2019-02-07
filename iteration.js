function isOdd(x) {
    return x%2 !== 0;
}

console.log("Creating array...")
var myArray = [1,2,3];

console.log("Adding enumerable property to array...")
Object.defineProperty(
    myArray,
    "enum_prop",
    { enumerable: true, value: "oops" }

);

// indices
process.stdout.write("Using indices:");
for (var i = 0; i < myArray.length; i++) {
    process.stdout.write(` ${myArray[i]}`);
}
console.log();

// forEach
process.stdout.write("Using forEach:");
myArray.forEach(function(x) {
    process.stdout.write(` ${x}`);
    return isOdd(x);
});
console.log();

// every
process.stdout.write("Using every:");
myArray.every(function(x) {
    process.stdout.write(` ${x}`);
    return isOdd(x);
});
console.log();

// some
process.stdout.write("Using some:");
myArray.some(function(x) {
    process.stdout.write(` ${x}`);
    return isOdd(x);
});
console.log();

// for..in
process.stdout.write("Using for..in:");
for (var p in myArray) {
    process.stdout.write(` ${myArray[p]}`);
}
console.log();

// for..of
process.stdout.write("Using for..of:");
for (var x of myArray) {
    process.stdout.write(` ${x}`);
}
console.log();
