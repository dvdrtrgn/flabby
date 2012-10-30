/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var img = new Image()
,   accessors = {
    a: function (x, y) {
        return function (n) {
            return x[y || 'valueOf'](n);
        };
    },
    A: function (nom, f1, f2) {
        try {
            if (Object.defineProperty){
                console.log('ES5');
                Object.defineProperty(this, nom, {
                    get: f1,
                    set: (f2 || f1),
                });
            } else {
                console.log('ES4');
                this.__defineGetter__(nom, f1);
                this.__defineSetter__(nom, f2 || f1);
            }
        } catch (err) { // IE < 9
            console.log(err);
        }
    }
};
function makeButton(str) {
    var meth = 'write';
    document[meth]('<button onclick="img.jpos={' + str + '}">' + str + '</button>');
}

function get() {
    var cds = {};
    cds.x = parseInt(this.style.left, 10);
    cds.y = parseInt(this.style.top, 10);
    cds.w = parseInt(this.style.width, 10);
    cds.h = parseInt(this.style.height, 10);
    cds.s = this.src;
    cds.p = this.style.position;
    return JSON.stringify(cds);
}
function set(str) {
    var cds = (typeof str === 'object') ? str : JSON.parse(str);
    (cds.x) && (this.style.left = cds.x + 'px');
    (cds.y) && (this.style.top = cds.y + 'px');
    (cds.w) && (this.style.width = cds.w + 'px');
    (cds.h) && (this.style.height = cds.h + 'px');
    (cds.s) && (this.src = cds.s);
    (cds.p) && (this.style.position = cds.p);
    console.log(this.jpos);
}
accessors.A.call(img, 'jpos', get, set );
img.jpos = {
    s: "../images/pic.jpg",
    w: 300,
    h: 200,
    x: 111,
    y: 111,
    p: 'absolute'
};
$(function(){
    $('body').append(img);
});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
