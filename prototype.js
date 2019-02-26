function log(msg) {
    console.log("> " + msg)
}

log("creating anotherObj with property a");

var anotherObj = {
    a: 1
};

log("creating myObj from anotherObj");
var myObj = Object.create( anotherObj );
log("setting property b to myObj");
myObj.b = 2;

log("iterating over properties of myObj");
for (k in myObj) {
    console.log("found: " + k)
}

log("using in to check properties of myObj");
console.log("a in myObj?: " + ("a" in myObj));
console.log("b in myObj?: " + ("b" in myObj));
