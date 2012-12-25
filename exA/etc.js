/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var data = new Data([
    {NAME:41, STATE:22, ZIP:63},
    {NAME:31, STATE:32, ZIP:53},
    {NAME:21, STATE:42, ZIP:43},
    {NAME:11, STATE:52, ZIP:33},]
);
data.test = {
    col : {1:'NAME',2:'STATE',3:'ZIP',NAME:1,STATE:2,ZIP:3},
    val : [[41,22,63],[31,32,53],[21,42,43],[11,52,33]],
    rot : [[41,31,21,11], [22,32,42,52], [63,53,43,33]],
};

   data.A = {   _: ['0','A','B','C'],   // A hash
               11: [4, 11, 52, 33],
               21: [3, 21, 42, 43],
               31: [2, 31, 32, 53],
               41: [1, 41, 22, 63],
}; data.B = {   _: [0,'A','B','C'],   // B hash
               22: [1, 41, 22, 63],
               32: [2, 31, 32, 53],
               42: [3, 21, 42, 43],
               52: [4, 11, 52, 33],
}; data.C = {   _: [0,'A','B'],       // C hash
               22: [4, 11, 52, 33],
               43: [3, 21, 42, 43],
               53: [2, 31, 32, 53],
               63: [1, 41, 22, 63],
};
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
console.dirxml(data);

$(function () {
    module('equality');

    test('raw', 1 /*expect*/, function () {
        var tmp = data.val.slice(0);
        tmp.shift();
        equal(data.test.val, tmp, 'str');
    });
});


