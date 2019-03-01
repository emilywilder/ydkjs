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
