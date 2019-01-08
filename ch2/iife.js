function foo() {
    a = 10;
    console.log(a)
};

foo();

(function foo() {
    a = 20;
    console.log(a)
})();