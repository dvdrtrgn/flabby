/*global $ */
/*jslint es5: true, indent: 4, nomen: true,  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var ent;

function Todo(row) {
    this.row = row;
    this.render();
}

$.extend(Todo.prototype, {
    render: function () {
        var row = this.row;
        $('<li>') //
        .append('<a href="#" class="remove">remove</a>') //
        .append(row.text) //
        .append('<span class="id">' + row.timeStamp + '</span>') //
        .appendTo(this.list);
    },
});

Todo.add = function (str) {
    return {
        'text': str || 'no text',
        'timeStamp': ($.now() - 1356672670000),
    };
};
Todo.get = function () {
    Todo.list.empty();
    return function (x) {
        return new Todo(x.value);
    };
};
Todo.ini = function () {
    var self = Todo;
    self.list = $('.Todo .List');
    self.entry = $('.Todo .Entry');
    self.button = $('.Todo .Button');
    self.handler = function (str) {
        $.DB.add(str);
    };
    ent = new Entry(self.entry, self.button, self.handler);

    self.list.on('click', '.remove', function (evt) {
        var me = $(this),
            id = parseInt(me.parent().find('.id').text(), 10);
        $.DB.remove(id);
        return false;
    });
    $.DB.make('todo'); // make displays the data previously saved
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
