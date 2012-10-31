/*jslint es5: true, indent: 4, nomen: true,  */
/*global Block, Origin,  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// debugger;
var bb = new Block();
var oo = new Origin();
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
function collides(t1, t2) {
    return t1.x < t2.x + t2.width && t1.x + t1.width > t2.x && t1.y < t2.y + t2.height && t1.y + t1.height > t2.y;
}
