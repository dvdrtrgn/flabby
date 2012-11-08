/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var tmp;

function fakeAccessor(_n) {
    return function (n) {
        if (n) {
            this.box.style[_n] = n + 'px';
        } else {
            return parseInt(this.box.style[_n]) || 0;
        }
    };
}

function Box(cf) {
    var x, y, w, h // primaries
    ,   box = $('<div class="box">').appendTo('body').get(0)
    ;
    this.box = box;
    cf && this.nport(cf);
}
$.extend(Box.prototype, {
    x: fakeAccessor('left'),
    y: fakeAccessor('top'),
    w: fakeAccessor('width'),
    h: fakeAccessor('height'),
    nport: function (o) {
        (o.left !== undefined) && this.x(o.left);
        (o.top !== undefined) && this.y(o.top);
        (o.width !== undefined) && this.w(o.width);
        (o.height !== undefined) && this.h(o.height);
    },
    xport: function () {
        return {
            left: this.x(),
            top: this.y(),
            width: this.w(),
            height: this.h(),
        };
    },
    centerAt: function (x0, y0) {
        this.x((x0 || 0) - this.w() / 2);
        this.y((y0 || 0) - this.h() / 2);
    }
});

function init() {
    tmp = new Box({
        left: 88,
        top: 33,
        width: 166,
        height: 99
    });
    $('html').bind('mouseup', function (e) {
        tmp.centerAt(e.pageX, e.pageY);
    });
    console.log(tmp);
}

$(init);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
