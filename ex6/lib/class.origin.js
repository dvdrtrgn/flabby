/*jslint es5: true, indent: 4, nomen: true,  */
/*global $, Vector, _accessors,  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function Origin(v) {
    v = this._v = new Vector(v || this.v, this.k);
    this._A('x', this._a(v[0]));
    this._A('y', this._a(v[1]));
    this._A('z', this._a(v[2]));
    this._A('t', this._a(v[3]));
    console.log(this, v, this.t);
}

Origin.prototype._ = 'origin';

$.extend(Origin.prototype, {
    v: [0, 0, 1, Infinity],
    k: ['left', 'top', 'zIndex', 'time'],
}, _accessors);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
