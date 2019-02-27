function log(msg) {
    console.log("> " + msg)
}

log("creating anotherObj with property a");

function printProperties() {
    log("Properties of anotherObject");
    console.log(Object.getOwnPropertyNames(anotherObj));
    log("Properties of myObject");
    console.log(Object.getOwnPropertyNames(myObj));

    log("iterating over properties of myObj");
    for (k in myObj) {
        console.log("found: " + k)
    }
}

var anotherObj = {
    a: 1
};

log("creating myObj from anotherObj");
var myObj = Object.create( anotherObj );
log("setting property b to myObj");
myObj.b = 2;

printProperties();

log("using in to check properties of myObj");
console.log("a in myObj?: " + ("a" in myObj));
console.log("b in myObj?: " + ("b" in myObj));

log("Adding/shadowing a to myObj");
myObj.a = 3;
console.log("anotherObj.a = " + anotherObj.a);
console.log("myObj.a = " + myObj.a);

printProperties();

