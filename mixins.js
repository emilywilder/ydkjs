// classes without classes

function mixin ( sourceObj, targetObj ) {
    for (var key in sourceObj) {
        if (!(key in targetObj)) {
            targetObj[key] = sourceObj[key]
        }
    }
    return targetObj;
}

var Vehicle = {
    engines: 1,

    ignition: function() { console.log("starting the engine...") },

    drive: function() {
        this.ignition();
        console.log("moving...")
    }
};

var Car = mixin( Vehicle, {
    wheels: 4,

    drive: function() {
        // Vehicle.drive.call( this );
        Vehicle.drive.call(this);
        console.log ( "rolling on all " + this.wheels + " wheels!");
    }
});

Vehicle.drive();
Car.drive();

