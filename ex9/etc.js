/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var e, unit = function (fn) {
    var z = [typeof fn];
    try {
        switch (z[0]) {
        case 'string':
            z.push(eval(fn));
            break;
        case 'function':
            z.push(fn());
            break;
        default:
            fn();
        }
    } catch (e) {
        z.push(e);
    } finally {
        clog(z);
    }
};

unit(foo); // TypeError "foo is not a function"
unit(bar); // valid
unit(baz); // TypeError "baz is not a function"
try {
    unit(spam); // ReferenceError "spam is not defined"
} catch (e) {
    clog(e)
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

clog('/* - - - - */')
var foo = function () {
    return 'valid';
}; // anonymous function expression ('foo' gets hoisted)

function bar() {
    return 'valid';
}; // function declaration ('bar' and the function body get hoisted)
var baz = function spam() {
    return 'valid';
}; // named function expression (only 'baz' gets hoisted)
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

unit(foo); // valid
unit(bar); // valid
unit(baz); // valid
try {
    unit(spam); // ReferenceError "spam is not defined"
} catch (e) {
    clog(e)
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
