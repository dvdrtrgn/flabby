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

function emulateLegacy() { // emulate legacy getter/setter API using ES5
    try {
        if (!Object.prototype.__defineGetter__ && Object.defineProperty({}, "x", {
            get: function () {
                return true
            }
        }).x) {
            Object.defineProperty(Object.prototype, "__defineGetter__", {
                enumerable: false,
                configurable: true,
                value: function (name, func) {
                    Object.defineProperty(this, name, {
                        get: func,
                        enumerable: true,
                        configurable: true
                    });
                }
            });
            Object.defineProperty(Object.prototype, "__defineSetter__", {
                enumerable: false,
                configurable: true,
                value: function (name, func) {
                    Object.defineProperty(this, name, {
                        set: func,
                        enumerable: true,
                        configurable: true
                    });
                }
            });
        }
    } catch (defPropException) {
        /*Do nothing if an exception occurs*/
    };
}



function emulateES5() { // emulate ES5 getter/setter API using legacy
    if (Object.prototype.__defineGetter__ && !Object.defineProperty) {
        Object.defineProperty = function (obj, prop, desc) {
            if ("get" in desc) obj.__defineGetter__(prop, desc.get);
            if ("set" in desc) obj.__defineSetter__(prop, desc.set);
        }
    }
}
