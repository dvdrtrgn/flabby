/*jslint es5: true, indent: 4, nomen: true,  */
/*global $, Block, Origin,  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function Mass(block, origin) {
    var self = this;
    this.b = block || new Block();
    this.o = origin || new Origin();
    this.b._cb(function () {
        self.adjust();
    });
    this.o._cb(function () {
        self.adjust();
    });
    this.init();
}
$.extend(Mass.prototype, {
    b: null,
    o: null,
    init: function () {
        if (!this.b || !this.o) {
            throw new Error('missing block / origin');
        } else if (this.ele) return;
        this.make();
    },
    draw: function () {
        this.style();
        $('body').append(this.ele);
    },
    make: function () {
        this.ele = $('<div class="Mass"></div>');
        this.style();
        this.draw();
    },
    style: function () {
        this.ele.css({
            border: '1px solid red',
            position: 'absolute',
        });
        this.adjust();
    },
    adjust: function (o) {
        this.ele.css(o || {
            top: this.o.y,
            left: this.o.x,
            width: this.b.w,
            height: this.b.h,
        });
    },
});
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
