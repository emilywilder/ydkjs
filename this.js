function foo() {
    console.log( this.a );
}

a = 0;
var obj1 = { a: 1, foo: foo };
var obj2 = { a: 2 };
var obj3 = { a: 3 };

console.log("default binding...");
foo();

console.log("implicit binding...");
obj1.foo();

console.log("explicit binding...");
obj1.foo.call( obj2 );

console.log("hard binding...");
var bar = obj1.foo.bind(obj3);
bar();

