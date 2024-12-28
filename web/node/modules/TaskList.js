const DbManager = require('./DbManager');
const Task = require('./Task');

class TaskList {
    constructor(name) {
        this.tasks = new Map();
        this.name = validatedName(name);
    }

    async initialize() {
        await this.getFromDB();
    }

    getTasks() {
        return Array.from(this.tasks.values());
    }

    getTask(id) {
        if (this.tasks.has(id)){
            return this.tasks.get(id);
        }
        else {
            throw new Error(`Task with ID ${id} not found.`);
        }
    }

    async addTask(id, title, desc, date, comp) {
        if (this.tasks.has(id)) {
            throw new Error(`Task with ID ${id} already exists.`);
        }
        const task = new Task(id, title, desc, date, comp)
        this.tasks.set(id, task);
        await DbManager.insertTask(this.name, task);
    }

    async updateTask(id, title, desc, date, comp) {
        const task = this.getTask(id);
        let isUpdated = false;
        if (task.getTitle() != title) {
            task.setTitle(title);
            isUpdated = true;
        }
        if (task.getDesc() != desc) {
            task.setDesc(desc);
            isUpdated = true;
        }
        if (task.getDate() != date) {
            task.setDate(date);
            isUpdated = true;
        }
        if (task.getComp() != comp) {
            task.setComp(comp);
            isUpdated = true;
        }
        if (isUpdated) {
            await DbManager.updateTask(this.name, task);
        }
    }

    async removeTask(id) {
        if (this.tasks.has(id)) {
            this.tasks.delete(id);
            await DbManager.deleteTask(this.name, id);
        } else {
            throw new Error(`Task with ID ${id} not found.`);
        }
    }

    getJson() {
        const tasks = this.getTasks().map(task => ({
            id: task.getId(),
            title: task.getTitle(),
            desc: task.getDesc(),
            date: task.getDate(),
            comp: task.getComp()
        }));
        return JSON.stringify(tasks);
    }

    async getFromDB() {
        try {
            const tasks = await DbManager.getAllTasks(this.name);

            tasks.forEach(task => {
                const taskObj = new Task(task.TaskId, task.Title, task.TaskDesc, task.TaskDate, task.Completion);
                this.tasks.set(task.TaskId, taskObj);
            });
        } catch (err) {
            console.error('Error fetching tasks: ', err);
        }
    }

    validatedName(name) {
        
        return name
    }
}

module.exports = TaskList;