/*jslint es5:true, white:false */
/*globals Math */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// LEGACY API FOR GETTERS AND SETTERS
// OBJECT LITERAL SYNTAX extension defines accessor properties in new objects
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var objectLiteral = {
    // An ordinary data property
    data_prop: 'value',
    // An accessor property defined as a pair of functions
    get accessor_prop() {
        /* function body here */
    },
    set accessor_prop(value) {
        /* function body here */
    },
};
// Most had objectLiteral before ECMAs5 (not IE8 until RC2?)
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var Xsr = new(function Xsr() {
    this.set = function (O, nom, xsr) {
        if (!Object.defineProperty) {
            // LEGACY API FOR setting GETTERS AND SETTERS
            O.__defineGetter__(nom, xsr.get);
            O.__defineSetter__(nom, xsr.set);
        } else { // ECMAs5
            Object.defineProperty(O, nom, {
                get: xsr.get,
                set: xsr.set,
                enumerable: xsr.enumerable || false,
                configurable: xsr.configurable || true,
            });
        }
    };
    this.get = function (O, nom) {
        if (!Object.defineProperty) {
            // LEGACY API FOR getting GETTERS AND SETTERS
            return {
                get: O.__lookupGetter__(nom),
                set: O.__lookupSetter__(nom),
            };
        } else { // ECMAs5
            return Object.getOwnPropertyDescriptor(O, nom);
        }
    };
})();

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
