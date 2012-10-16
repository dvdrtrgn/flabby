/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
$(function(){
    var faces = $('.face')
    ,   field = $('#field')
    ,   trans = -500
    ,   c0 = $('#c0')
    ;
    faces.click(function (){
        field.toggleClass('flip');
    });
    field.mousewheel(function (event, delta, deltaX, deltaY) {
        var o = '';

        if (deltaX > 0) {
            o += 'E∆ ' + deltaX;
        } else if (deltaX < 0) {
            o += 'W∆ ' + -deltaX;
        }
        if (deltaY > 0) {
            o += 'N∆ ' + deltaY;
        } else if (deltaY < 0){
            o += 'S∆ ' + -deltaY;
        }
        event.preventDefault();
        console.log(o, event, delta, deltaX, deltaY);
        transX(delta);
    });
    console.log('o, event, delta, deltaX, deltaY');
    function transX(diff){
        trans += parseFloat(diff || 0) * 10;
        c0.css('-webkit-transform','translateZ('+ trans +'px)');
    }
});
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
