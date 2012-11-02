/*jslint es5: true, indent: 4, nomen: true,  */
/*global Block, Origin,  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// debugger;
var bb = new Block();
var oo = new Origin();
var mm = new Mass(bb,oo);
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
function collides(A, B) {
    return A.x < B.x + B.w && A.x + A.w > B.x && A.y < B.y + B.h && A.y + A.h > B.y;
}
