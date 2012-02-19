modules = {
    todo {
        dependsOn 'jquery, backbone'

        resource url: '/css/todos.css'
        resource url: '/js/backbone/models/todo.js'
        resource url: '/js/backbone/collections/todoList.js'
        resource url: '/js/backbone/routers/todoRouter.js'
        resource url: '/js/backbone/views/appView.js'
        resource url: '/js/backbone/views/todoView.js'
	    resource url: '/js/todos.js'
    }
    backbone {
        resource url: '/js/vendor/backbone/underscore-1.3.1.js'
        resource url: '/js/vendor/backbone/backbone-0.9.1.js'
    }
}
