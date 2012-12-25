/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var data;

$(function () {
    data = new Data([
        {NAME:41, STATE:22, ZIP:63},
        {NAME:31, STATE:32, ZIP:53},
        {NAME:21, ZIP:43},
        {NAME:11, STATE:52, ZIP:33},]);
    data.test = {
        col : {1:'NAME',2:'STATE',3:'ZIP',NAME:1,STATE:2,ZIP:3},
        val : [[41,22,63],[31,32,53],[21,42,43],[11,52,33]],
        rot : [[41,31,21,11], [22,32,42,52], [63,53,43,33]],
    };
    if (window.debug) {
        console.dirxml(data);
        console.log('swivel()',  data.swivel());
        data.indexBy(0);
        data.indexBy(1);
        data.indexBy(2);
        data.indexBy(3);
    }
});
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
