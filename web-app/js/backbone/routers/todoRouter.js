window.TodoRouter = Backbone.Router.extend({

    routes: {
    },

    initialize: function() {
        // Create our global collection of **Todos**.
        this.collection = new TodoList();
        // Finally, we kick things off by creating the **App**.
        this.AppView = new AppView({collection: this.collection});
        this.collection.fetch();
    }

});