function delayedWrite(message) {
    // need to wrap in a promise, since setTimeout isn't async capable
    return new Promise(resolve => {
        return setTimeout(function() {
            process.stdout.write(message);
            resolve();
        }, Math.random() * 1000);
    });
}

async function async_iteration() {
    console.log("Creating array...")
    let myArray = [1, 2, 3];

    console.log("Adding enumerable property to array...")
    Object.defineProperty(
        myArray,
        "enum_prop",
        {enumerable: true, value: "oops"}
    );

    // indices
    async function indices() {
        process.stdout.write("Using indices:");
        for (let i = 0; i < myArray.length; i++) {
            await delayedWrite(` ${myArray[i]}`);
        }
    }

    await indices();
    console.log();

    // for..in
    async function forin() {
        process.stdout.write("Using for..in:");
        for (const p in myArray) {
            await delayedWrite(` ${myArray[p]}`);
        }
    }

    await forin();
    console.log();

    // for..of
    async function forof() {
        process.stdout.write("Using for..of:");
        for (const x of myArray) {
            await delayedWrite(` ${x}`);
        }
    }

    await forof();
    console.log();
}

async_iteration();