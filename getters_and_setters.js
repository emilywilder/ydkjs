console.log("Definining object with getter and setter sing object-literal syntax...")
myObject = {
    get a() {
        return this._a_;
    },
    set a(val) {
        this._a_ = val;
    }
};


console.log("Setting a to 2...")
myObject.a = 2;

console.log("Getting a...")
console.log(myObject.a);

console.log("Defining b attribute to object using explicit definition...")
Object.defineProperty(
    myObject,
    "b",
    {
        get: function () {
            return this.a * 2;
        },
        enumerable: true
    }
);

console.log("Getting b...")
console.log(myObject.b);

console.log("Setting a to 3...")
myObject.a = 3;
console.log("Getting b...")
console.log(myObject.b)
