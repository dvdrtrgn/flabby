/*global $, console */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var tmp, x = function () {};

function arify(args) {
    return Array.prototype.slice.apply(args);
}

function elegant(fn, scope) {
    var scope = (scope || window),
        args = arify(arguments).slice(2);
    return function () {
        return fn.apply(scope, args.concat(arify(arguments)));
    };
}

function add(a, b, c, d, e) {
    var self = add,
        args = arify(arguments);

    if (args.length >= self.length) {
        args = args.slice(self.length);
        clog('running', [a, b, c, d, e], (a + b + c + d + e), args);
    }
    return elegant.apply(null, [self, this].concat(args));
}

function init() {
    clog('add(1) (2) (3) (4) (5,6,7,8,9) (10,11);');
    add(1) (2) (3) (4) (5,6,7,8,9) (10,11);
}

$(init);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
