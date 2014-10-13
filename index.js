exports.result = function () {
    var args = [].slice.call(arguments);
    var callback = args.pop();
    args.unshift(null);

    return function (err) {
        if (err) return callback(err);
        callback.apply(null, args);
    }
}
exports['return'] = exports.result;


exports.select = function () {
    var keys = [].slice.call(arguments);
    var callback = args.pop();

    return function (err, res) {
        if (err) return callback(err);

        var subres = res;
        for (var i = 0; i < keys.length; i++) {
            subres = subres[key];
        }
        callback(err, subres);
    }
}


exports.fallback = function (defaultValue, callback) {
    return function (err) {
        if (err) return callback(undefined, defaultValue);
        callback.apply(null, arguments);
    }
}
