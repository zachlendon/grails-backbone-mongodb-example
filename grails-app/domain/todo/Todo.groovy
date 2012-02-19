package todo

class Todo {

    boolean done
    int orderIndex
    String text

    static constraints = {
        text(nullable: false, empty: false)
    }
}
