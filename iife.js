function foo() {
    let a = 10;
    console.log(a);
}

foo();

(function foo() {
    let a = 20;
    console.log(a);
})();

function ifTrue (word, x) {
    if (word.includes(x)) {
        console.log("Yup!");
    } else {
        console.log("Nope!");
    }
}

ifTrue("Hello", "l")