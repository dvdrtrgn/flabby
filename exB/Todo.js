/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function Todo(row) {
    this.div = $('#todos');
    this.row = row;
    this.renderTodo();
}

$.extend(Todo.prototype, {
    renderTodo: function () {
        var row = this.row,
            li = $('<li>') //
        .append('<a href="#" class="remove">remove</a>') //
        .append(row.text) //
        .append('<span class="id">' + row.timeStamp + '</span>') //
        .appendTo(this.div);
    },
});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
