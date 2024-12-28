const TaskList = require('./TaskList');

class TaskManager {
    constructor() {
        this.taskLists = new Map();
    }

    async getTaskLists(usersTaskLists) {
        const lists = await Promise.all(
            usersTaskLists.map(async (list) => {
                const taskList = new TaskList(list);
                await taskList.initialize();
                return taskList;
            })
        );

        lists.forEach((taskList) => {
            this.taskLists.set(taskList.name, taskList);
        });
    }
}

module.exports = TaskManager;