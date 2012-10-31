/*jslint es5: true, indent: 4, nomen: true,  */
/*global $, Vector, _accessors,  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function Block(v) {
    v = this._v = new Vector(v || this.v, this.k);
    this.w = this._a(v[0]);
    this.h = this._a(v[1]);
    this.d = this._a(v[2]);
    this.e = this._a(v[3]);
    console.log(this, v, this.e());
}

Block.prototype._ = 'block';

$.extend(Block.prototype, {
    v: [1, 1, 1, Infinity],
    k: ['width', 'height', 'depth', 'endure'],
}, _accessors);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
