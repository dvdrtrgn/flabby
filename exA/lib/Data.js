/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function Data(arr) {
    this.raw = arr;
    this._by = {};
    visualize(this.raw, 'raw');
    this.valueTable(1);
};
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
Data.prototype.columnHash = function (k) { //       gather hash of key/indexes
    if (!this.col || this.dirty()) {
        var col = keyHash(this.raw);
        window.debug && visualize(transpose([col]), 'columnHash');
        this.col = col;
    }
    return !hasdef(k) ? this.col : this.col[k]; //  allow for falsey
};
/**
 * @param cheads {bool} show column heads?
 */
Data.prototype.valueTable = function (heads) { //   turn objects into pure cells
    if (!this.val || this.dirty()) {
        var tab = [],
            dat = this.raw;
        all = this.columnHash().slice(0); //        all key names
        tab = array2D(dat, all, heads); //          make 2-d array //.unshift('Ø')
        (heads) && tab.unshift(all); //             include headers?
        this.dirty(false); //                       now we are "up to date"
        visualize(tab, 'valueTable');
        this.val = tab; //                          cache table
    }
    return this.val
};
Data.prototype.indexBy = function (k) {
    if (!hasdef(this.columnHash(k))) { //           test existance of key
        throw new Error('Data index:' + k);
    } else if (typeof k === 'number') {
        k = this.columnHash(k); //                  get name from number
    }
    var tab = this.raw.slice(0); //                 dupe raw, retain cell refs
    columnSort(tab, k);
    visualize(tab, 'indexBy: ' + k);
    return this._by[k] = tab; //                    store and return table
    // @do: return as object, keys of [k]
};
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
Data.prototype.swivel = function (x) { //           flip diagonally
    var tab = [],
        dat = x || this.valueTable();
    tab = transpose(dat); //                        farm out to tools
    visualize(tab, 'swivel');
    return this.rot = tab; //                       store and return table
};
Data.prototype.dirty = function (bool) { //         not up to date?
    if (!hasdef(bool)) {
        return !this._clean; //                     report
    } else {
        this._clean = !bool; //                     assign
    }
};
/*
normalize
1) keyIndex from keys of every record/row in source
2) create 2d array with keyIndex function
    a) column function get all cells by a key
2) populate 2d array to completion using source
*/
