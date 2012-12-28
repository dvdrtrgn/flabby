/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

(function ($) {
    /* normalize indexed DB */
    window.indexedDB = (window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB);
    window.IDBTransaction = (window.IDBTransaction || window.webkitIDBTransaction);
    window.IDBKeyRange = (window.IDBKeyRange || window.webkitIDBKeyRange);

    var DB = $.DB = { // namespace
        // db :: holds the real instance of the indexedDB
        db: null,
        //    METHODS
        /* open (create) */
        err: function () {
            console.error(arguments);
        },
        open: function () {
            var req = indexedDB.open('todos', 5);
            clog(req);
            req.onupgradeneeded = DB.err;
            req.onsuccess = function (e) {
                // clog('onsuccess', e);
                DB.db = e.target.result;
                var db = DB.db;
                // clog('db', db);
                DB.getAllTodoItems();
            };
        },
        /* addTodo */
        addTodo: function (str) {
            var db = DB.db,
                trans = db.transaction(['todo'], 'readwrite'),
                store = trans.objectStore('todo'),
                req;
            req = store.put({
                'text': str,
                'timeStamp': ($.now() - 1356672670000),
            })
            req.onsuccess = function (e) {
                DB.getAllTodoItems(); // Re-render all the todo's
            };
            req.onerror = DB.err;
        },
        /* getAllTodoItems (read) */
        getAllTodoItems: function () {
            $('#todos').empty();

            var db = DB.db,
                trans = db.transaction(['todo'], 'readwrite'),
                store = trans.objectStore('todo'),
                keyRange = IDBKeyRange.lowerBound(0),
                cursorRequest = store.openCursor(keyRange);
            //
            cursorRequest.onsuccess = function (e) {
                var result = e.target.result;
                if (result) {
                    new Todo(result.value);
                    result['continue']();
                }
            };
            cursorRequest.onerror = DB.err;
        },
        /* deleteTodo */
        deleteTodo: function (id) {
            var DB = this,
                db = DB.db,
                trans = db.transaction(['todo'], 'readwrite'),
                store = trans.objectStore('todo'),
                req = store.delete(id);
            //
            req.onsuccess = function (e) {
                DB.getAllTodoItems(); //      Refresh the screen
            };
            req.onerror = DB.err;
        },
        init: function () {
            clog('DB', DB);
            $('[type=submit]').on('click', function (e) {
                DB.addTodo($('#todo').val());
                $('#todo').val('');
                return false;
            });
            $('#todos').on('click', '.delete', function (e) {
                DB.deleteTodo(parseInt($(this).parent().find('.id').text()));
                return false;
            });
            DB.open(); // open displays the data previously saved
        },
    };
})(jQuery);

function Todo(row) {
    this.row = row;
    this.renderTodo();
}

$.extend(Todo.prototype, {
    renderTodo: function () {
        var row = this.row,
            li = $('<li>') //
        .append('<a href="#" class="delete">delete</a>') //
        .append(row.text) //
        .append('<span class="id">' + row.timeStamp + '</span>') //
        .appendTo(('#todos'));
    },
})

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/* init / events */
$(function () {
    $.DB.init();
});
