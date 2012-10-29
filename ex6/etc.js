/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var accessors = {
    a: function (x, y) {
        return function (n) {
            return x[y || 'valueOf'](n);
        };
    },
    A: function (nom, f1, f2) {
        try { // ES5
            if (Object.defineProperty){
                Object.defineProperty(this, nom, {
                    get: f1,
                    set: (f2 || f1),
                });
            } else { // ES4
                this.__defineGetter__(nom, f1);
                this.__defineSetter__(nom, f2 || f1);
            }
        } catch (err) { // IE < 9
            console.log(err);
        }
    }
};

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

function Vector(vArr, kArr) {
    vArr = vArr || [];
    kArr = kArr || [];
    this[0] = new Point((vArr[0] || 0), kArr[0]);
    this[1] = new Point((vArr[1] || 0), kArr[1]);
    this[2] = new Point((vArr[2] || 0), kArr[2]);
    this[3] = new Point((vArr[3] || 0), kArr[3]);
}
Vector.prototype._ = 'vector';

function Block(v) {
    v = this._v = new Vector(v || this.v, this.k);
    this.w = this._.a(v[0]);
    this.h = this._.a(v[1]);
    this.d = this._.a(v[2]);
    this.e = this._.a(v[3]);
    console.log(this, v, this.e());
}
Block.prototype._ = 'block';
$.extend(Block.prototype, {
    v: [1, 1, 1, Infinity],
    k: ['width', 'height', 'depth', 'endure'],
    _: accessors
});

function Origin(v) {
    v = this._v = new Vector(v || this.v, this.k);
    this.A('x', this.a(v[0]));
    this.A('y', this.a(v[1]));
    this.A('z', this.a(v[2]));
    this.A('t', this.a(v[3]));
    console.log(this, v, this.t);
}
Origin.prototype._ = 'origin';
$.extend(Origin.prototype, {
    v: [0, 0, 1, Infinity],
    k: ['left', 'top', 'zIndex', 'time'],
}, accessors);

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
var bb = new Block();
var oo = new Origin();
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
