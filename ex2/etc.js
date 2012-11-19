/*global $, console, accessorix */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function init() {
    var jq1 = measure($('#max')),
        jq2 = measure($('#min'));

    function measure(jq) {
        var me = {
            jq: jq
        };
        me.w = jq.width() / 100;
        me.h = jq.height() / 100;
        return me;
    }
    $('div').bind('mousemove', coords);

    function calcside(obj, cs) {
        return [(cs[1] - cs[0]), (cs[1] + cs[0] - 100)];
    }
    function nameside(obj, cs) {
        return [(cs[0] > 0) ? 'sw' : 'ne', (cs[1] > 0) ? 'se' : 'nw'];
    }
    function direct(cs) {
        var dir;
        /n/.test(cs[0]) && /n/.test(cs[1]) && (dir = 'North');
        /e/.test(cs[0]) && /e/.test(cs[1]) && (dir = 'East');
        /w/.test(cs[0]) && /w/.test(cs[1]) && (dir = 'West');
        /s/.test(cs[0]) && /s/.test(cs[1]) && (dir = 'South');
        return dir;
    }
    function coords(o) {
        var cs = xandy(o),
            id = o.target.id,
            ps = getposper(jq1, cs),
            cs = calcside(jq1, ps),
            ns = nameside(jq1, cs),
            di = direct(ns);
        if (o.target.id === 'min') {
            //o.stopPropagation();
        }
        //colors(o.target,x)
        clog(id, cs, ns, ps, di);
    }
    function colors(ele, mag) {
        $(ele).opacity(mag / 100);
    }
    function regen(l) {
        return new RegExp(l);
    }
    function getposper(obj, cs) {
        var xp = cs[0] / obj.w,
            yp = cs[1] / obj.h;
        return [xp | 0, yp | 0];
    }
    function xandy(o) {
        return [o.offsetX, o.offsetY];
    }
}

$(init);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
