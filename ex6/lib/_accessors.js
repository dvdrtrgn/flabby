/*jslint es5: true, indent: 4, nomen: true,  */
/*global  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

window._accessors = {
    _a: function (x, y) {
        return function (n) {
            return x[y || 'valueOf'](n);
        };
    },
    _A: function (nom, fn, f2) {
        var f1 = this._a(this._v[fn]);
        this.__defineGetter__(nom, f1);
        this.__defineSetter__(nom, f2 || f1);
    }
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
