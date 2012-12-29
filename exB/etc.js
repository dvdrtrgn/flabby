/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
sessionStorage.setItem('keyA', 'Aval');
var a = sessionStorage.getItem('keyA');

localStorage.setItem('keyB', 'Bval');
var b = localStorage.getItem('keyB');

window.addEventListener('storage', function (event) {
    console.log('The value for ' + event.key //
    + ' was changed from ' + event.oldValue //
    + ' to ' + event.newValue);
}, false);

/* init / events */
$(function () {
    $.DB.init();
});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
