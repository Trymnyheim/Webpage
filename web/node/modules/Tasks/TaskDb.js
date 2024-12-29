const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'AppDb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

class TaskDb {
    static async insertTask(TaskListId, task) {
        const query = `
            INSERT INTO Tasks (TaskListID, TaskTitle, TaskDesc, TaskDate, TaskComp)
            values (?, ?, ?, ?, ?);`
        const parameters = [TaskListId, task.getTitle(), task.getDesc(), task.getDate(), task.getComp()];
        try {
            const [results] = await pool.query(query, parameters);
            // console.log('Successfully inserted task ', results);
        } catch (err) {
            // console.error('Error inserting task into DB ', err);
            throw err;
        }
    }

    // Needs update:
    static async updateTask(table, task) {
        const query = `
            UPDATE ${table}
            SET Title = ?, TaskDesc = ?, TaskDate = ?, Completion = ?
            WHERE TaskId = ?;`
        const parameters = [task.getTitle(), task.getDesc(), task.getDate(), task.getComp(), task.getId()];
        try {
            const [results] = await pool.query(query, parameters);
            // console.log('Successfully updated task ', results);
        } catch (err) {
            // console.error('Error updating task in DB ', err);
            throw err;
        }
    }

    // Needs update:
    static async deleteTask(table, id) {
        const query = `
            DELETE FROM ${table}
            WHERE TaskId = ?;`
        const parameters = [id];
        try {
            const [results] = await pool.query(query, parameters);
            // console.log('Successfully deleted task ', results);
        } catch (err) {
            // console.error('Error deleting task from DB ', err);
            throw err;
        }
    }

    // Needs update:
    static async getAllTasks(table) {
        const query = `
            SELECT *
            FROM ${table};`
        try {
            const [results] = await pool.query(query);
            // console.log('Successfully retrieved tasks ', results);
            return results;
        } catch (err) {
            // console.error('Error retrieving tasks from DB ', err);
            throw err;
        }
    }
}

module.exports = TaskDb;