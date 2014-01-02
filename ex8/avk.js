/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function literal() { // ie8?
    var foo = {
        get test() {
            return "foo";
        }
    };
    alert(foo.test);
}

function xsr() { // std + ie8?
    var foo = {};
    Object.defineProperty(foo, "test", {
        get: function () {
            return "foo";
        }
    });
    alert(foo.test);
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
