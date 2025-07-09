class TaskList {

    constructor(jsonTasks) {
        tasks = new Map();
    }

    getTasks() {
        return tasks
    }

    addTask(task) {
        this.tasks[task.id] = task;
    }

    getTask(id) {
        return this.tasks[id];
    }

    removeTask(id) {
        delete map[id];
    }
}