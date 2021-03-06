/*jslint es5: true, indent: 4, nomen: true,  */
/*global $ */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// tertiary tools (dependant on "tools" #2 +(#1))

function array2D(data, keys, heads) {
    var tab = [];
    keys = keys || keyArray(data);
    data.forEach(function (arr, r) { //         for each "row"
        var row = heads ? [r + 1] : []; //      preserve index
        keys.forEach(function (key, c) { //     for each key (column)
            if (c !== 0) { //                   skip first col
                row[c] = arr[key]; //           preserve value only
            }
        });
        tab.push(row);
    });
    return tab;
}

function keyArray(dat) {
    var obj = keyObject(dat);
    return obj2arr(obj, 'key');
}

function keyHash(dat) {
    var i, c = 1,
        kix = keyObject(dat),
        col = ['Ø']; //         object key + index by 0
    col.Ø = 0;
    for (i in kix) {
        col[c] = i; //          index:key (property)
        col[i] = c++; //        key:index (property)
    }
    return col;
}

function keySort(dat) { // @do: simplify?
    var tmp = obj2arrs(keyObject(dat));
    tmp = transpose(tmp);
    columnSort(tmp, 1);
    return column(tmp, 0);
}

function visualize(dat, msg) {
    var c, txt, //
    tr, div = $('<div>').addClass('data'),
        tab = $('<table>');
    msg && div.append('<h4>' + msg + '</h4>'); //   add heading
    $.each(dat, function (i, row) { //              for each row
        tr = $('<tr>').appendTo(tab);
        for (c in dat[0]) { //                      for each cell (per first row (nom'd or num'd))
            txt = row[c];
            if (hasdef(txt) && !intish(c)) { //     has (NaN) key + (def) val
                txt = c + ': ' + txt; //            make key:val pair
            }
            $('<td>').text(txt).appendTo(tr);
        }
    });
    div.append(tab);
    $('hr').before(div);
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
