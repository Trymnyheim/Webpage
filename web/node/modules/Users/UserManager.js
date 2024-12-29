const UserDb = require('./UserDb');
const User = require('./User');
const bcrypt = require('bcrypt');

class UserManager {
    constructor() {
        this.users = new Map();
    }

    getUser(userId) {
        if (this.users.has(userId)){
            return this.users.get(userId);
        }
    }

    updateUser(userId) {
        // Update logic:
    }

    async userLogin(username, password) {
        try {
            const hashed = await bcrypt(password, 10);
            const isValid = await UserDb.checkLogin(username, password);
            if (isValid) {
                const userData = await UserDb.getUserData(username);
                // Handle user data!
                const user = User();
                this.users.set(user.getId(), user);
                return user;
            }
            else {
                throw new Error('Invalid username or password.');
            }
        } catch (error) {
            console.error('Unable to log in', error);
        }
    }

    userLogout(userId) {
        if (this.users.has(userId)) {
            this.users.delete(userId);
        }
    }

    async createUser(username, email, password) {
        try {
            hashed = await bcrypt.hash(password, 10);
            await DbManager.insertUser(username, email, hashed);
        } catch (error) {
            console.error('Enable to create new user: ', error);
        }
    }

    async removeUser(username) {
        try {
            await UserDb.removeUser(username);
            this.userLogout(username);
        } catch (error) {
            console.error('Unable to remove user', error);
        }
    }
}

const userManager = new UserManager();
module.exports = userManager;

