const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Tasklists',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

class DbManager {
    static async createTable(table) {
        const query = 
            `CREATE TABLE ${table} (
            TaskId int AUTO_INCREMENT PRIMARY KEY,
            Title varchar(255),
            TaskDesc varchar(255),
            TaskDate datetime,
            Completion tinyint
            )`
        try {
            const [results] = await pool.query(query);
            // console.log(`Table "${table}" created exists `, results);
        } catch (err) {
            throw new Error(err);
            // console.error('Error creating table ', err);
        }
    }

    static async dropTable(table) {
        const query = `DROP TABLE IF EXISTS ${table}`;
        try {
            const [results] = await pool.query(query);
            // console.log(`Table "${table}" deleted `, results);
        } catch (err) {
            throw new Error(err);
            // console.error('Error deleting table ', err);
        }
    }

    static async insertTask(table, task) {
        const query = `
            INSERT INTO ${table} (Title, TaskDesc, TaskDate, Completion)
            VALUES (?, ?, ?, ?);`
        const parameters = [task.getTitle(), task.getDesc(), task.getDate(), task.getComp()];
        try {
            const [results] = await pool.query(query, parameters);
            // console.log('Successfully inserted task ', results);
        } catch (err) {
            // console.error('Error inserting task into DB ', err);
            throw err;
        }
    }

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

module.exports = DbManager;