/*jslint es5: true, indent: 4, nomen: true,  */
/*global $, Vector, _accessors,  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function Origin(v) {
    this._v = new Vector(v || this.v, this.k);
    this._A('x', 0);
    this._A('y', 1);
    this._A('z', 2);
    this._A('t', 3);
    console.log(this, this.v, this.t);
}

Origin.prototype._ = 'origin';

$.extend(Origin.prototype, {
    v: [10, 10, 10, Infinity],
    k: ['left', 'top', 'zIndex', 'time'],
}, _accessors);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
