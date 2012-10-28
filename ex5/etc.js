/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function defineSizes() {
    $('body').css({
        width: window.innerWidth / 3 + 'px',
        height: window.innerHeight / 3 + 'px',
    });
}

function init() {
    $(window).bind('resize load', defineSizes);
}

//$(init);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
