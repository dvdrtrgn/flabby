/*jslint es5: true, indent: 4, nomen: true,  */
/*global $ */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// quaternary tools (new or dependant on "tools" #3)

function Map(o, proto) {
    var me = proto ? Map.prototype : this;
    if (o) for (var i in o) {
        me[i] = o[i];
    }
    Map.prototype = {};
}

/*
Map has array-like goodies
pop, push, etc (grafts or prune/returns 1 prop objects)
this requires an index for the purpose of non-numberical order
length should be possible
sort, too

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
