/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function Data(arr) {
    this.raw = arr;
    this._by = {};
    if (window.debug) {
        console.log('raw', this.raw);
        console.log('coldex()', this.coldex());
        console.log('valtab()', this.valtab());
        console.log('rotate()', this.rotate());
        console.log('indexBy()', this.indexBy(1));
        console.log('indexBy()', this.indexBy(2));
        console.log('indexBy()', this.indexBy(3));
    }
};

function nodef(x) {
    return typeof x === 'undefined';
}
Data.prototype.clean = function (bool) {
    if (nodef(bool)) {
        return !this._dirty;
    } else {
        this._dirty = !bool;
    }
};
Data.prototype.coldex = function (k) { //                                       gather hash of key/indexes
    if (k && !this.col) {
        return this.coldex();
    } else if (!nodef(k)) { //                                                  allow for 0
        return this.col[k];
    }
    var k, i = 1,
        col = ['_IDX_']; //                                                     object key + index by 0
    for (k in this.raw[1]) { //                                                 assume "row2" is good sample
        col[i] = k; //                                                          index:key (property)
        col[k] = i++; //                                                        key:index (property)
    }
    return this.col = col;
};
Data.prototype.valtab = function () { //                                        turn objects into pure cells
    var tab = [],
        dat = this.raw;
    all = this.coldex(); //                                                     all key names
    tab.push(all);
    dat.forEach(function (e, i) { //                                            for each raw row
        var row = [i];
        all.forEach(function (f, j) { //                                        for each column key
            row[j] = e[f] || i + 1; //                                          put named value at index
        });
        tab.push(row); //                                                       append row
    });
    return this.val = tab; //                                                   store and return table
};
Data.prototype.rotate = function (x) { //                                       flip diagonally
    var tab = [],
        dat = x || this.valtab();
    dat[0].forEach(function (e, i) { //                                         for each column (in row 1)
        var col = [];
        dat.forEach(function (f, j) { //                                        for each row of pure table
            col[j] = dat[j][i]; //                                              put column val into col
        });
        tab.push(col); //                                                       append col
    });
    return this.rot = tab; //                                                   store and return table
};
Data.prototype.indexBy = function (k) {
    if (nodef(this.coldex(k))) { //                                             test existance of key
        throw new Error('Data has no index: ' + k);
    } else if (typeof k === 'number') {
        k = this.coldex(k); //                                                  get name from number
    }
    var tab = this.raw.slice(0); //                                             dupe raw, retain cell refs
    tab.sort(function (a, b) {
        return a[k] > b[k]; //                                                  compare cells in column
    });

    return this._by[k] = tab; //                                                store and return table
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
