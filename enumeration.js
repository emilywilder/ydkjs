myObject = {};

console.log("Defining a to be enumerable...")
Object.defineProperty(
    myObject,
    "a",
    { enumerable: true, value: 2 }
);

console.log("Defining b to be not enumerable...")
Object.defineProperty(
    myObject,
    "b",
    { enumerable: false, value: 3 }
);

console.log(`b: ${myObject.b}`);
console.log(`Is b a property of the object? (using in): ${("b" in myObject)}`);

console.log("logging all properties and values of object (using in)...")
for (var k in myObject) {
    console.log( k, myObject[k] );
}

console.log("Listing all properties of myObject: " + Object.getOwnPropertyNames(myObject));
console.log("Listing all enumerable properties of myObject: " + Object.keys(myObject));
