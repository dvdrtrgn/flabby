/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function accessorix(chain, fix) {
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

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
