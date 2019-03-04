const my = require("./my.js");

function Foo(name) {
    this.name = name;
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


my.log("Demonstrating a linked 'inheritance' between functions");
my.log("Crating Name class with name attr");
function Name(name) {
    this.name = name
}

Name.prototype.getName = function() {
    return this.name;
};

my.log("Crating NameAndAge class that calls Name and has age attr");
function NameAndAge(name, age) {
    Name.call( this, name );
    this.age = age
}

my.log("Setting NameAndAge prototype to be a copy of Name's");
Object.setPrototypeOf( NameAndAge.prototype, Name.prototype );
// Another way to do this without ES6 function:
// NameAndAge.prototype = Object.create( Name.prototype );

NameAndAge.prototype.getAge = function() {
    return this.age;
};

my.log("Creating NameAndAge as c");
let c = new NameAndAge("Emily", 29);

my.log("c's name: ", false);
console.log(c.getName());
my.log("c's age: ", false);
console.log(c.getAge());
