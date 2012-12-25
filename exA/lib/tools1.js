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
 * column: Extract all values in columnn@key
 * @param tab {array} of objects
 * @param key {string} column key
 * return {array}
 */

function column(tab, key) { //              take table and column key
    var col = [];
    tab.forEach(function (row) { //         for all rows
        col.push(row[key]); //              collect column data
    });
    return col;
}

function hasdef(v) {
    return typeof v !== 'undefined'; //     falsey values are still values
}

function intish(str) { //                   could this be a number string?
    return (str * 1 + Infinity) > 0;
}

function key2val(x) { //                    take object/array
    var obj = {};
    $.each(x, function (k, v) {
        obj[v] = k; //                      swap vals and keys
    });
    return obj;
}

function obj2arr(obj, key) { //             take poly and boolean
    var arr = [];
    $.each(obj, function (k, v) {
        arr.push(key ? k : v); //           collect vals [or keys]
    });
    return arr;
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
