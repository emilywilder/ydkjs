function delay() {
    return new Promise(resolve => {
        return setTimeout(resolve, Math.random() * 1000);
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
        return new Promise(async resolve => {
            process.stdout.write("Using indices:");
            for (let i = 0; i < myArray.length; i++) {
                await delay();
                process.stdout.write(` ${myArray[i]}`);
            }
            resolve();
        });
    }

    await indices();
    console.log();

    // for..in
    async function forin() {
        return new Promise(async resolve => {
            process.stdout.write("Using for..in:");
            for (var p in myArray) {
                await delay();
                process.stdout.write(` ${myArray[p]}`);
            }
            resolve();
        });
    }

    await forin();
    console.log();

    // for..of
    async function forof() {
        return new Promise(async resolve => {
            process.stdout.write("Using for..of:");
            for (var x of myArray) {
                await delay();
                process.stdout.write(` ${x}`);
            }
            resolve();
        })
    }

    await forof();
    console.log();
}

async_iteration();