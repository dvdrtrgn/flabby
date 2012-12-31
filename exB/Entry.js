/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function Entry(fld, btn, cbf) {
    this.fld = $(fld).first();
    this.btn = $(btn).first();
    if (cbf) {
        this.bindAct(cbf);
    }
}
Entry.prototype.bindAct = function (cbf) {
    var self = this;
    self.btn.on('click', function (evt) {
        cbf(self.fld.val()); //     handle value
        self.fld.val(''); //        clear field
        return false;
    });
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
