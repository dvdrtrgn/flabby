/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
$(function(){
    var faces = $('.face')
    ,   field = $('#field')
    ,   trans = -500
    ,   c0 = $('#c0')
    ,   arrows = $('.arrow').css('z-index', 9999)
    ;
    faces.click(function (){
        field.toggleClass('flip');
    });
    field.mousewheel(function (event, delta, deltaX, deltaY) {
        var o = ''
        ,   p = ''
        ;

        if (deltaY > 0) {
            o += 'N';
            p += deltaY;
        } else if (deltaY < 0){
            o += 'S';
            p += -deltaY;
        }
        if (deltaX > 0) {
            o += 'E';
            p += deltaX;
        } else if (deltaX < 0) {
            o += 'W';
            p += -deltaX;
        }
        event.preventDefault();
        //console.log(o, p, event, delta, deltaX, deltaY);
        transX(delta);
        cursor(o, event);
    });
    console.log('o, event, delta, deltaX, deltaY');
    function transX(diff){
        trans += parseFloat(diff || 0) * 10;
        c0.css('-webkit-transform','translateZ('+ trans +'px)');
    }
    function cursor(str, evt){
        str = str.toLowerCase();
        field.css('cursor', str + '-resize');
        arrows.removeClass().addClass('_' + str);
        arrows.css({
            left: evt.clientX,
            top: evt.clientY
        });
    }
});
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
