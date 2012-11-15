/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var tmp;

function accessor(chain, fix) {
    var relay, obj
    ,   links = chain.split('.')
    ,   alias = links.pop()
    ,   resolve = function (host) {
        obj = host;
        while (links.length) {
            obj = obj[links.shift()];
        }
        console.log('resolve', host, '@', chain, '=>', obj);
        return obj;
    };
    return function (val) {
        relay = relay || resolve(this);
        return fix.call(relay, alias, val);
    };
}

function fix(nom, val) {
    if (val) {
        this[nom] = val;
    }
    return this[nom];
}

function pxfix(nom, val) {
    if (val) {
        this[nom] = (val + 'px');
    }
    return parseInt(this[nom], 10) || 0;
}

function Box(cf) {
    this.div = $('<div class="box">').appendTo('body').get(0);
    $.noop( cf && this.nport(cf) );
}
$.extend(Box.prototype, {
    x: accessor('div.style.left', pxfix),
    y: accessor('div.style.top', pxfix),
    w: accessor('div.style.width', pxfix),
    h: accessor('div.style.height', pxfix),
    t: accessor('div.childNodes.0.textContent', fix),
    nport: function (o) {
        $.noop( (o.left !== undefined) && this.x(o.left) );
        $.noop( (o.top !== undefined) && this.y(o.top) );
        $.noop( (o.width !== undefined) && this.w(o.width) );
        $.noop( (o.height !== undefined) && this.h(o.height) );
    },
    xport: function () {
        return {
            left: this.x(),
            top: this.y(),
            width: this.w(),
            height: this.h(),
        };
    },
    // take div to quarters by adding add two divs inside with borders
    xhair: function () {
        var q0 = $(this.div).text(' ')
        ,   q1 = $('<div class="q1">') // top right
        ,   q3 = $('<div class="q3">') // bottom left
        ;
        q0.append(q1, q3);
        return this;
    },
    xhere: function (x0, y0) {
        this.x((x0 || 0) - this.w() / 2);
        this.y((y0 || 0) - this.h() / 2);
        this.t([x0, y0]);
        return this;
    },
    xsize: function (w, h) {
        this.w(w + 100);
        this.h(h + 100);
        return this;
    },
    xandy: function (o) {
        return [o.pageX, o.pageY];
    },
    xdify: function (a, b) {
        var me = this;
        return [Math.abs(a[0] - b[0]), Math.abs(a[1] - b[1])];
    },
    trace: function () {
        var a, b, self = this;

        $('html').bind('mousedown', function (e) {
            a = self.xandy(e);
            $(this).one('mousemove.trace', function (e) {
                $(this).one('mouseup', function () {
                    self.xsize.apply(self, self.xdify(a, b));
                    self.xhere.apply(self, b);
                });
            });
        }).bind('mouseup', function (e) {
            $(this).unbind('mousemove.trace');
            b = self.xandy(e);
            self.xhere.apply(self, b);
        });
        return this;
    },
});

function init () {
    tmp = new Box({
        left: 88,
        top: 44,
        width: 222,
        height: 122
    }).xhair().trace();
}

$(init);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
