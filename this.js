function foo() {
    console.log( this.a );
}

function bar(x) {
    this.a = x;
    this.foo = foo;
}

a = 0;
var obj1 = { a: 1, foo: foo, bar: bar };
var obj2 = { a: 2 };
var obj3 = { a: 3 };

console.log("default binding...");
foo();

console.log("implicit binding...");
obj1.foo();

console.log("explicit binding...");
obj1.foo.call( obj2 );

console.log("hard binding...");
(obj1.foo.bind(obj3))();

console.log("new binding...");
obj1.bar(1);
var obj4 = new obj1.bar(4);
console.log( "obj1.a: " + obj1.a );
console.log( "obj4.a: " + obj4.a );





