var myObj1 = {},
    myObj2 = {};

/*  Using the non-standardized legacy getter/setter API supported by
 *  some browsers you normally define a getter/setter property in a
 *  manner such as this:
 */

function defineES4(obj, key) {
    obj.__defineGetter__(key, function () {
        return ('<' + key + '>' + (this.val || '') + '</' + key + '>');
    });
    obj.__defineSetter__(key, function (v) {
        this.val = v;
        console.debug(this);
    });
}
defineES4(myObj1, 'p');

/* Using the standard ES5 API, the equivalent definitions look like this: */

function defineES5(obj, key) {
    Object.defineProperty(obj, key, {
        get: function () {
            return ('<' + key + '>' + (this.val || '') + '</' + key + '>');
        },
        set: function (v) {
            this.val = v;
            console.debug(this);
        }
    });
}
defineES5(myObj2, 'p');

/*  As you can see, each __defineGetter__ or __defineSetter__ method
 *  call is mapped to an equivalent call to the ES5 Object.defineProperty
 *  function.  If you have existing code that contains many such calls
 *  that you need to work in IE9 or any other ES5 complaint browser,
 *  you can avoid a lot of editing and automate this mapping process.
 *  You can do this by creating definitions of __defineGetter__ and
 *  __defineSetter__ that use defineProperty to create the getter/setter
 *  properties and include these definitions in your code. Here is
 *  what you need:
 */

//emulate legacy getter/setter API using ES5 APIs

function simulacrum() {
    try {
        if (!Object.prototype.__defineGetter__ && Object.defineProperty({}, 'x', {
            get: function () {
                return true
            }
        }).x) {
            Object.defineProperty(Object.prototype, '__defineGetter__', {
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
            Object.defineProperty(Object.prototype, '__defineSetter__', {
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
console.debug('sample.js');
