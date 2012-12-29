/*global $ */
/*jslint es5: true, indent: 4, nomen: true,  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * Plugin: helps add modules to jQuery
 * @class
 */
$.Plugin = function () {};

(function ($) {
    /* normalize indexed DB */
    window.indexedDB = (window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB);
    window.IDBTransaction = (window.IDBTransaction || window.webkitIDBTransaction);
    window.IDBKeyRange = (window.IDBKeyRange || window.webkitIDBKeyRange);
    /**
     * DB: hookup to 1 [@do: more?] database index
     * @class
     * @augments Plugin
     */
    var DB = {
        //    METHODS
        /**
         * log: simple handler
         * @return {void}
         */
        log: function () {
            if (window.debug) {
                console.log.apply(console, arguments);
            }
        },
        /**
         * err: all purpose error dump
         * @return {void}
         */
        err: function () {
            console.error(arguments);
        },
        /**
         * make (create)
         * @param key {string}
         * @return {void}
         */
        make: function (key) {
            var req = indexedDB.open((key + 's'), 5);
            DB.log(req);
            req.onsuccess = function (evt) {
                DB[key] = evt.target.result;
                DB.log('onsuccess', evt, 'result :: DB[key]', DB[key]);
                DB.refresh();
            };
            req.onupgradeneeded = DB.err;
            DB.key = key;
        },
        /**
         * add: create new entry for data storage
         * @param str {string}
         * @return {void}
         */
        add: function (str) {
            var store = DB.getStore()
            ,   req = DB.todo_add(str)
            ;
            req = store.put(req);
            req.onsuccess = function (e) {
                DB.refresh(); // re-render all
            };
            req.onerror = DB.err;
        },
        /**
         * refresh (read)
         * @return {void}
         */
        refresh: function () {
            var store = DB.getStore()
            ,   keyRange = IDBKeyRange.lowerBound(0)
            ,   rex = store.openCursor(keyRange)
            ,   cb = DB.todo_get()
            ;
            rex.onsuccess = function (e) {
                var result = e.target.result;
                if (result) {
                    cb(result);
                    result['continue']();
                }
            };
            rex.onerror = DB.err;
        },
        /**
         * remove: delete a record by id number
         * @param id {number}
         * @return {void}
         */
        remove: function (id) {
            var store = DB.getStore()
            ,   req = store.delete(id)
            ;
            req.onsuccess = function (e) {
                DB.refresh(); // refresh
            };
            req.onerror = DB.err;
        },
        /**
         * getStore: delete a record by id number
         * @return {void}
         */
        getStore: function () {
            return DB[DB.key] //
            .transaction([DB.key], 'readwrite') //
            .objectStore(DB.key);
        },
        /**
         * init: initialize
         * @private
         * @returns void
         */
        init: function () {
            DB.log('DB', DB);
            DB.todo_ini();
        },
        todo_add: Todo.add,
        todo_get: Todo.get,
        todo_ini: Todo.ini,
    };
    DB = $.DB = $.extend(new $.Plugin, DB);
})(jQuery);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
