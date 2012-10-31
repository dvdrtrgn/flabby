/*jslint es5: true, indent: 4, nomen: true,  */
/*global $,  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function Point(v, k) {
    if (k) {
        this.k = k;
    }
    this.v = v || 0;
}

$.extend(Point.prototype, {
    v: 0,
    k: 'point',
    valueOf: function (x) {
        if (x) {
            this.v = (typeof x === 'object') ? x.valueOf() : x;
        }
        return this.v;
    },
    toString: function () {
        return this.k + ':' + this.valueOf();
    },
    offset: function (x) {
        if (isNaN(x)) {
            x = 0;
        }
        return (this.v += x);
    },
    transform: function (x) {
        if (isNaN(x)) {
            x = 1;
        }
        return (this.v *= x);
    },
});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
