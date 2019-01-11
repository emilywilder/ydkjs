"use strict";

var math = require('mathjs');
var sizeof = require('object-sizeof');

// var a = 10;
// var a = 20;

// console.log(a);

function scopeTest() {
    var a = 10;
    var a = 20;
    return a;
}

console.log("scopeTest: " + scopeTest())

function shadow() {
    var b = 10;
    console.log("shadow: " + b);
}

shadow();
try {
    console.log("outside shadow: " + b);
} catch(err) {
    console.log(err.toString())
}

function outer() {
    var i = 1;
    function inner() {
        i += 1;
    }
    console.log("outer, before inner: " + i);
    inner();
    console.log("outer, after inner:" + i);
}

outer();

for (var y=0; y<2; y++) {
    y++;
}

console.log("Global never defined y, but y=" + y);

// makes an array of 1000 elements of even numbers
// let someBigData = Array.from(Array(1000), (val, idx) => idx * 2);

function getSizeOf(thing) {
    return sizeof(thing)
}


var matrix_size_bytes;

{
// create a huge 3x3 matrix
    let someBigData = math.zeros(100,100,100)
    matrix_size_bytes = getSizeOf(someBigData)
}

console.log("someBigData is " + (matrix_size_bytes/1024)/1024 + " megabytes");
console.log("trying to print someBigData...");
try {
    console.log(someBigData)
} catch(err) {
    console.log(err.toString())
}

var foo = true, baz = 10;

if (foo) {
    var bar = 3;
}

// why does this work?
if (baz > bar) {
    console.log( baz );
}