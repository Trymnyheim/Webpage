const TaskManager = require('./TaskManager.jsx');

class User {
    constructor(username) {
        this.username = username; // Check if unique
        this.taskManager = new TaskManager();
    }
}