// prints 6 five times!
function without_closure() {
    console.log("Without closure...")
    for (var i = 1; i <= 5; i++) {
        setTimeout(function timer() {
            console.log(i);
        }, i * 1000);
    }
}

// using a closure, it works!
function with_closure() {
    console.log("With closure...")
    for (var i = 1; i <= 5; i++) {
        (function () {
            var j = i;
            setTimeout(function timer() {
                console.log(j);
            }, j * 1000);
        })();
    }
}

// using let uses block scoping and closures
function with_let() {
    console.log("Using let...")
    for (let i = 1; i <= 5; i++) {
        setTimeout(function timer() {
            console.log(i);
        }, i * 1000);
    }
}

without_closure()
setTimeout(with_closure, 6000)
setTimeout(with_let, 12000)

