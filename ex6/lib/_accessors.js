/*jslint es5: true, indent: 4, nomen: true,  */
/*global  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

window._accessors = {
    _a: function (x, y) {
        return function (n) {
            var v = x[y || 'valueOf'](n);
            if (this.cb) this.cb();
            return v;
        };
    },
    _A: function (nom, fn, f2) {
        var f1 = typeof fn === 'number' ? this._a(this._v[fn]) : fn;
        this.__defineGetter__(nom, f1);
        this.__defineSetter__(nom, f2 || f1);
    },
    _cb: function (fn) {
        if (!fn) return this.cb;
        this.cb = fn;
    },
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
