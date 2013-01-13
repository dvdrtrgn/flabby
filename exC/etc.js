/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
(function () {
    window.drt = {};
    window.clog = function () {
        console.log.apply(console, arguments);
    }
    function Loc(a, b, c) {
        // if no protocol, determine one
        this.a = a = (a || location.protocol);
        if (a === 'file:') b = '';
        this.b = b = (b || location.hostname || c || '');
        this.c = c = (c || location.pathname || '/Users/drt/Desktop/all.json');
        this._href = function () {
            return a + '//' + b + c;
        };
        this._origin = function () {
            return a + '//' + b;
        };
        this.href = this._href();
        this.origin = this._origin();
        this.toString = this.href;
    }
    drt.Loc = function (a, b, c) {
        return new Loc(a, b, c);
    }
    drt.inscript = function (loc) {
        var s = document.createElement('script');
        s.setAttribute('src', loc);
        document.head.appendChild(s);
    };
    drt.inblob = function (loc, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', loc);
        xhr.responseType = 'blob';
        xhr.onload = function () {
            clog(cb, xhr, this, arguments);
            // cb(xhr.response);
        };
        xhr.send(null);
    };
    console.dir(location);
    console.dir(drt.Loc());
}());
