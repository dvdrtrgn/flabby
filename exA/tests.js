/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
$(function () {
    if (!window.debug) {
        return;
    }
    module('equality');
    test('raw', 1 /*expect*/, function () {
        var A, B;
        /////
        // equal('A', 'B', 'A > B');
        /////
        A = data.raw;
        B = data._by._IDX_;
        equal( A, B, 'str');
    });
});
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
