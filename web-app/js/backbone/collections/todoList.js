// Todo Collection
// ---------------

// The collection of todos is backed by *localStorage* instead of a remote
// server.
window.TodoList = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: window.Todo,

    url: '/todos',

    // Filter down the list of all todo items that are finished.
    done: function() {
        return this.filter(function(todo){

            debugger;
            return todo.get('done');
        });
    },

    // Filter down the list to only todo items that are still not finished.
    remaining: function() {
        return this.without.apply(this, this.done());
    },

    // We keep the Todos in sequential order, despite being saved by unordered
    // GUID in the database. This generates the next order number for new items.
    nextOrderIndex: function() {
        if (!this.length) return 1;
        return this.last().get('orderIndex') + 1;
    },

    // Todos are sorted by their original insertion order.
    comparator: function(todo) {
        return todo.get('orderIndex');
    }

});
