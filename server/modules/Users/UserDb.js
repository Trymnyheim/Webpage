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

class UserDb {

    static async insertUser(username, email, hashedPass) {
        const query = `
            INSERT INTO Users(Username, Email, PasswordHash)
            VALUES (?, ?, ?);`;
        const parameters = [username, email, hashedPass];
        try {
            const [result] = await pool.query(query, parameters);
        } catch (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                // console.error('Username unavailable.');
            }
            else {
                // console.error("Unable to perform authentication.");
                throw err;
            }
        }
    }
    
    static async removeUser(userId) {
        const query = `
            DELETE FROM Users
            WHERE UserId = ?;`;
        const parameters = [userId];
        try {
            const [result] = await pool.query(query, parameters);
        } catch (err) {
            // console.error("Unable to remove user.");
            throw err;
        }
    }

    static async checkAuth(username, hashedPass) {
        const query = `
            SELECT EXISTS (
                SELECT *
                FROM Users
                WHERE Username = ? AND PasswordHash = ?
            ) AS userExists;`;
        const parameters = [username, hashedPass];
        try {
            const [result] = await pool.query(query, parameters);
            return result[0]?.userExists === 1;
        } catch (err) {
            // console.error("Unable to perform authentication.");
            throw err;
        }
    }

    static async updateUser() {

    }

    static async getUserData(userId) {

    }
}

module.exports = UserDb;