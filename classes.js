const my = require("./my.js");

function Foo(name) {
    this.name = name
}

let a = new Foo("a");

my.log("Is a's constructor Foo?: ", false);
console.log(a.constructor === Foo);

function Bar(name) {
    this.name = name
}

my.log("Creating custom prototype for Bar");
Bar.prototype = { };

let b = new Bar("b");

my.log("Is b's constructor Bar?: ", false);
console.log(b.constructor === Bar);

my.log(("defining Foo to be the constructor of b"));
Object.defineProperty(b, "constructor", {
    enumerable: false,
    writable: true,
    configurable: true,
    value: Foo
});

my.log("Is b's constructor Foo?: ", false);
console.log(b.constructor === Foo);
