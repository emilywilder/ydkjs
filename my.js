exports.log = function log(msg, newline=true) {
    let _msg = "> " + msg;
    if (newline) {
        console.log(_msg);
    } else {
        process.stdout.write(_msg);

    }
};
