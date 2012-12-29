/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function Todo(row) {
    this.div = $('#todos');
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
        .appendTo(this.div);
    },
});

Todo.add = function (str) {
    return {
        'text': str || 'no text',
        'timeStamp': ($.now() - 1356672670000),
    };
};
Todo.get = function () {
    $('#todos').empty();
    return function (x) {
        new Todo(x.value);
    };
};
Todo.ini = function () {
    var key = 'todo'
    ,   txt = $('#' + key)
    ;
    div = $('#' + key + 's');
    $('[type=submit]').on('click', function (e) {
        $.DB.add(txt.val());
        txt.val('');
        return false;
    });
    div.on('click', '.remove', function (e) {
        var me = $(this)
        ,   id = parseInt(me.parent().find('.id').text())
        ;
        $.DB.remove(id);
        return false;
    });
    $.DB.make(key); // make displays the data previously saved
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
