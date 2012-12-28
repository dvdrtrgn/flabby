/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

(function ($) {
    /* normalize indexed DB */
    window.indexedDB = (window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB);
    window.IDBTransaction = (window.IDBTransaction || window.webkitIDBTransaction);
    window.IDBKeyRange = (window.IDBKeyRange || window.webkitIDBKeyRange);

    $.Plugin = function () {}

    var DB = $.DB = $.extend(new $.Plugin, {
        //    METHODS
        err: function () {
            console.error(arguments);
        },
        /* make (create) */
        make: function (key) {
            DB.key = key;
            key += 's'; // make "plural"
            var req = indexedDB.open(key, 5);
            clog(req);
            req.onsuccess = function (evt) {
                DB[DB.key] = evt.target.result;
                clog('onsuccess', evt, 'result :: DB[key]', DB[DB.key]);
                DB.getAll();
            };
            req.onupgradeneeded = DB.err;
        },
        /* todo Add */
        todo_Add: function (str) {
            return {
                'text': str,
                'timeStamp': ($.now() - 1356672670000),
            };
        },
        /* todo GetAll */
        todo_GetAll: function () {
            $('#todos').empty();
            return function (x) {
                new Todo(x.value);
            }
        },
        /* add */
        add: function (str) {
            var store = DB.getStore(),
                req = DB.todo_Add(str);
            req = store.put(req)
            req.onsuccess = function (e) {
                DB.getAll(); // re-render all
            };
            req.onerror = DB.err;
        },
        /* getAll (read) */
        getAll: function () {
            var store = DB.getStore(),
                keyRange = IDBKeyRange.lowerBound(0),
                rex = store.openCursor(keyRange),
                cb = DB.todo_GetAll();
            rex.onsuccess = function (e) {
                var result = e.target.result;
                if (result) {
                    cb(result);
                    result['continue']();
                }
            };
            rex.onerror = DB.err;
        },
        /* remove */
        remove: function (id) {
            var store = DB.getStore(),
                req = store.delete(id);
            req.onsuccess = function (e) {
                DB.getAll(); //      Refresh the screen
            };
            req.onerror = DB.err;
        },
        getStore: function () {
            return DB[DB.key] //
            .transaction([DB.key], 'readwrite') //
            .objectStore(DB.key);
        },
        todo_Init: function () {
            var key = 'todo',
                txt = $('#' + key);
            div = $('#' + key + 's');
            $('[type=submit]').on('click', function (e) {
                DB.add(txt.val());
                txt.val('');
                return false;
            });
            div.on('click', '.remove', function (e) {
                DB.remove(parseInt($(this).parent().find('.id').text()));
                return false;
            });
            DB.make(key); // make displays the data previously saved
        },
        init: function () {
            clog('DB', DB);
            DB.todo_Init();
        },
    });
})(jQuery);

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
})

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/* init / events */
$(function () {
    $.DB.init();
});
