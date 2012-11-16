/*global Element */

(function() {
    if ((/Trident/.test(navigator.userAgent) && !console.log('textContent?'))
        && Object.defineProperty
        && Object.getOwnPropertyDescriptor
        && Object.getOwnPropertyDescriptor(Element.prototype, 'textContent')
        &&!Object.getOwnPropertyDescriptor(Element.prototype, 'textContent').get)
    {
        var innerText = Object.getOwnPropertyDescriptor(Element.prototype, 'innerText');
        // It won't work if you just drop in
        // innerText.get and innerText.set or the whole descriptor.
        Object.defineProperty(Element.prototype, 'textContent', {
            get : function() {
                return innerText.get.call(this);
            },
            set : function(x) {
                return innerText.set.call(this, x);
            }
        });
        console.log('patched textContent');
    }
}());

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
