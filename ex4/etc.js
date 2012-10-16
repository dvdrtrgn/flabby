/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
$(function(){
    var faces = $('.face')
    ,   field = $('#field')
    ;
    faces.click(function (){
        field.toggleClass('flip');
    });
});
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
