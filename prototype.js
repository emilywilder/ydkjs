const my = require("./my.js");

my.log("creating anotherObj with property a");

function printProperties(iter=false) {
    my.log("Properties of anotherObject");
    console.log(Object.getOwnPropertyNames(anotherObj));
    my.log("Properties of myObject");
    console.log(Object.getOwnPropertyNames(myObj));

    if (iter) {
        my.log("iterating over properties of myObj");
        for (k in myObj) {
            console.log("found: " + k)
        }
    }
}

var anotherObj = {
    a: 1
};

my.log("creating myObj from anotherObj");
var myObj = Object.create( anotherObj );
my.log("setting property b to myObj");
myObj.b = 2;

printProperties(iter=true);

my.log("using in to check properties of myObj");
console.log("a in myObj?: " + ("a" in myObj));
console.log("b in myObj?: " + ("b" in myObj));

my.log("Adding/shadowing a to myObj");
myObj.a = 3;
console.log("anotherObj.a = " + anotherObj.a);
console.log("myObj.a = " + myObj.a);

printProperties();

my.log("Adding properties c to anotherObject as read-only");
Object.defineProperty(anotherObj, "c", {
    value: 4,
    enumerable: true,
    writable: false
});
my.log("Shadowing c to myObj");
myObj.c = 5;

printProperties();

my.log("Adding property d to anotherObj");
anotherObj.d = 5;

printProperties();

my.log("Implicit shadowing of d onto myObj through incrementing");
myObj.d++;

printProperties();
