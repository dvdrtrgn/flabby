/*jslint es5: true, indent: 4, nomen: true,  */
/*global $, Vector, _accessors,  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function Block(v) {
    this._v = new Vector(v || this.v, this.k);
    this._A('w', 0);
    this._A('h', 1);
    this._A('d', 2);
    this._A('e', 3);
    console.log(this, this.v, this.e);
}

Block.prototype._ = 'block';

$.extend(Block.prototype, {
    v: [100, 100, 100, Infinity],
    k: ['width', 'height', 'depth', 'endure'],
}, _accessors);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
