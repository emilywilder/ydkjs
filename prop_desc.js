"use strict";

var myObject = {};

Object.defineProperty( myObject, "a", {
    value: 2,
    writable: false, // not writable!
    configurable: true,
    enumerable: true
} );

try {
    myObject.a = 3; // TypeError
} catch (err) {
    console.log("Error: " + err.message)
}

// Behaviour like a constant

var myCOnstObject = {};

Object.defineProperty( myConstObject, "FAVORITE_NUMBER", {
    value: 42,
    writable: false,
    configurable: false
} );

var myObject = {
    a: 2
};

Object.preventExtensions( myObject );

myObject.b = 3;
myObject.b; // undefined