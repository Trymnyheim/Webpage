const DbManager = require('./DbManager');
const User = require('./User');
const bcrypt = require('bcrypt');

class UserManager {
    constructor() {
        this.users = new Map();
    }

    getUser(username) {
        if (this.users.has(username)){
            return this.users.get(username);
        }
    }

    updateUser(username) {
        // Update logic:
    }

    async userLogin(username, password) {
        try {
            const hashed = await bcrypt(password, 10);
            const isValid = await DbManager.checkLogin(username, password);
            if (isValid) {
                const userData = await DbManager.getUserData(username);
                const user = User();
                this.users.set(username, user);
                return user;
            }
            else {
                throw new Error('Invalid username or password.');
            }
        } catch (error) {
            console.error('Unable to log in', error);
        }
    }

    userLogout(username) {
        if (this.users.has(id)) {
            this.users.delete(username);
        }
    }

    async createUser(username, password) {
        try {
            hashed = await bcrypt.hash(password, 10);
            await DbManager.newUser(username, hashed);
        } catch (error) {
            console.error('Enable to create new user: ', error);
        }
    }

    async removeUser(username) {
        try {
            await DbManager.removeUser(username);
            this.userLogout(username);
        } catch (error) {
            console.error('Unable to remove user', error);
        }
    }
}

const userManager = new UserManager();
module.exports = userManager;

