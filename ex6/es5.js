/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var img = new Image();
Object.defineProperty(img, 'jpos', {
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
        if (cds.x) this.style.left = cds.x + 'px';
        if (cds.y) this.style.top = cds.y + 'px';
        if (cds.w) this.style.width = cds.w + 'px';
        if (cds.h) this.style.height = cds.h + 'px';
        if (cds.s) this.src = cds.s;
        this.style.position = 'absolute';
    },
});

$('body').append(img);

img.jpos = {
    s: "../images/pic.jpg",
    w: 300,
    h: 200,
    x: 100,
};

console.log(img.jpos);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
function collides(t1, t2) {
    return t1.x < t2.x + t2.width && t1.x + t1.width > t2.x && t1.y < t2.y + t2.height && t1.y + t1.height > t2.y;
}
