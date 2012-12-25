// secondary tools (dependant only on "tools" #1)
/*jslint es5: true, indent: 4, nomen: true,  */
/*global $ */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function columnSort(tab, key, def) { //         def = default (for undefined)
    tab.sort(function (a, b) {
        return rundef(a[key], def) > b[key]; // compare cells in column
    });
}

function keyObject(dat) { //    keys of every record/row in source
    var k, obj = {};
    dat.forEach(function (row) {
        var num = 1; //                         begin property count
        $.each(row, function (k, v) {
            obj[k] = obj[k] || [];
            obj[k].push(num++); //              store order of k in property
        });
    });
    $.each(obj, function (i, e) {
        obj[i] = sumUp(e) / e.length; //        average prop index
    });
    return obj;
}

function rundef(v, alt) {
    return hasdef(v) ? v : alt; //              redefine undefined
}

function transpose(dat) { //                    take 2-D array to flip diagonally
    var tab = [];
    dat[0].forEach(function (z, col) { //       for each column (in first row)
        tab.push(column(dat, col)); //          append row of columns
    });
    return tab;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
