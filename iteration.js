function isOdd(x) {
    return x%2 !== 0;
}

console.log("Creating array...")
let myArray = [1, 2, 3];

console.log("Adding enumerable property to array...")
Object.defineProperty(
    myArray,
    "enum_prop",
    {enumerable: true, value: "oops"}
);

// indices
function indices_promise(i) {
    return new Promise(resolve => {
        setTimeout((i) => {
            resolve(process.stdout.write(` ${myArray[i]}`));
        }, Math.random()*1000, i);
    });
}
async function indices() {
    process.stdout.write("Using indices:");
    for (let i = 0; i < myArray.length; i++) {
        await indices_promise(i);
    }
    console.log()
}

indices();

// forEach
function foreach_promise(x) {
    return new Promise(resolve => {
        setTimeout(async function () {
            process.stdout.write(` ${x}`);
            return isOdd(x);
        }, Math.random()*1000, x)
    })
}
async function foreach() {
    process.stdout.write("Using forEach:");
    myArray.forEach(async function (x) {
        await foreach_promise(x);
    });
    console.log();
}

foreach();

// // every
// process.stdout.write("Using every:");
// myArray.every(function(x) {
//     process.stdout.write(` ${x}`);
//     return isOdd(x);
// });
// console.log();
//
// // some
// process.stdout.write("Using some:");
// myArray.some(function(x) {
//     process.stdout.write(` ${x}`);
//     return isOdd(x);
// });
// console.log();
//
// // for..in
// process.stdout.write("Using for..in:");
// for (var p in myArray) {
//     process.stdout.write(` ${myArray[p]}`);
// }
// console.log();
//
// // for..of
// process.stdout.write("Using for..of:");
// for (var x of myArray) {
//     process.stdout.write(` ${x}`);
// }
// console.log();

