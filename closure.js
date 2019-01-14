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

async function doInOrder() {
    await without_closure()
    with_closure()
}
without_closure()
setTimeout(with_closure, 6000)
