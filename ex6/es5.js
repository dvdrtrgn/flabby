/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var imgFoo = new Object();

imgFoo = {
    get: function () {
        var cds = {};
        cds.x = parseInt(this.style.left);
        cds.y = parseInt(this.style.top);
        cds.w = parseInt(this.style.width);
        cds.h = parseInt(this.style.height);
        cds.s = this.src;
        return JSON.stringify(cds);
    },
    set: function (str) {
        var cds = (typeof str === 'object') ? str : JSON.parse(str);
        if (cds.x) this.style.left = cds.x + "px";
        if (cds.y) this.style.top = cds.y + "px";
        if (cds.w) this.style.width = cds.w + "px";
        if (cds.h) this.style.height = cds.h + "px";
        if (cds.s) this.src = cds.s;
        this.style.position = 'absolute';
    },
};
var img = Object.defineProperty(new Image(), "JSONposition", imgFoo);

$('body').append(img);

img.JSONposition = {
    s: "../images/pic.jpg",
    w: 400,
    h: 300,
    x: 200,
};

console.log(img.JSONposition);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
