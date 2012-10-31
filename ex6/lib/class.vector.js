/*jslint es5: true, indent: 4, nomen: true,  */
/*global Point,  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function Vector(vArr, kArr) {
    vArr = vArr || [];
    kArr = kArr || [];
    this[0] = new Point((vArr[0] || 0), kArr[0]);
    this[1] = new Point((vArr[1] || 0), kArr[1]);
    this[2] = new Point((vArr[2] || 0), kArr[2]);
    this[3] = new Point((vArr[3] || 0), kArr[3]);
}

Vector.prototype._ = 'vector';

function vectest(v) {
    switch (typeof v) {
    case 'object':
        if (v._ === 'vector') {
            return v;
        } // could be an array
        break;
    case 'undefined':
        console.log('creating default vector');
        break;
    default:
        throw new Error('not a vector');
    }
    return new Vector(v);
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
