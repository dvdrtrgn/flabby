/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function Data(arr) {
    this.raw = arr;
    if (window.debug) {
        console.log('raw',    this.raw);
        console.log('coldex()', this.coldex());
        console.log('valtab()', this.valtab());
        console.log('rotate()', this.rotate());
    }
};

Data.prototype.clean = function (bool) {
    if (typeof bool === 'undefined') {
        return !this._dirty;
    } else {
        this._dirty = !bool;
    }
};
Data.prototype.coldex = function () {
    var n = 0, //                           index by 0
        k; //                               object key
    this.col = []; //                       array by default
    for (k in this.raw[1]) { //             assume "row2" is good sample
        this.col[n] = k; //                 index:key (property)
        this.col[k] = n++; //               key:index (property)
    }
    return this.col;
};
Data.prototype.valtab = function () {
    var tab = [],
        dat = this.raw;
    all = this.coldex();
    dat.forEach(function (raw) { //         for each raw row
        var row = []; //                    new row array
        all.forEach(function (e, i) { //    for each column
            row[i] = raw[e]; //             put named value at index
        });
        tab.push(row); //                   append row
    });
    return this.val = tab; //               return table
};
Data.prototype.rotate = function (dat) {
    var tab = [],
        dat = dat || this.valtab();
    dat[0].forEach(function (e, i) { //     for each column (in row 1)
        var col = []; //                    new col array
        dat.forEach(function (f, j) { //    for each row
            col[j] = dat[j][i]; //          put column val into col
        });
        tab.push(col); //                   append col
    });
    return this.rot = tab; //               return table
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
