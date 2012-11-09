/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// take div to quarters by adding add two divs inside with borders

function qDiv(div) {
    var q0 = $(div)
    ,   q1 = $('<div class="q1">') // top right
    ,   q3 = $('<div class="q3">') // bottom left
    ;
    q0.append(q1,q3);
}

$(function(){
    qDiv(tmp.box);
});
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
