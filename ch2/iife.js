function foo() {
    let a = 10;
    console.log(a);
}

foo();

(function foo() {
    let a = 20;
    console.log(a);
})();

