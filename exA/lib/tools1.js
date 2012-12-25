// primary tools (not dependant on "tools")
/*jslint es5: true, indent: 4, nomen: true,  */
/*global $ */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * arr2obj: Turn array into object
 * @param arr {array}
 * @return {object}
 */

function arr2obj(arr) {
    var obj = {};
    arr.forEach(function (v, k) {
        obj[k] = v;
    });
    return obj;
}

/**
 * column: Extract all values in column @ key
 * @param t {array} of objects (table)
 * @param k {string} data key (column)
 * return c {array} of simple values
 */

function column(t, k) {
    var c = [];
    t.forEach(function (r) { //       for all rows
        c.push(r[k]); //              collect column data
    });
    return c;
}

function hasdef(v) { // falsey values are still values
    return typeof v !== 'undefined';
}

function intish(str) { // was this probably a number?
    return (str * 1 + Infinity) > 0;
}

/**
 * key2val: Swap all keys with their values
 * @param m {map}
 * return o {object} of vals [or keys]
 */

function key2val(m) { //        take object/array
    var o = {};
    $.each(m, function (k, v) {
        o[v] = k; //            swap vals and keys
    });
    return o;
}

/**
 * obj2arr: Extract all vals [or keys]
 * @param m {map}
 * @param korv {booly} vals [or keys]
 * return a {array} of vals [or keys]
 */

function obj2arr(m, vork) {
    var a = [];
    $.each(m, function (k, v) { //      for all rows
        a.push(vork ? k : v);
    });
    return a;
}

/**
 * sumarr: Add values in array
 * @param a {array} of numbers
 * return t {number} total of vals
 */

function sumarr(a) {
    var t = 0;
    a.forEach(function (v) {
        t += (parseFloat(v, 10) || 0); //   add up
    });
    return t;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
