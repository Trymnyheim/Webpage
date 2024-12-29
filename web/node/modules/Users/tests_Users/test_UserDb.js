const UserDb = require("../UserDb.js");
const User = require("../User.js");

async function test_insertUser() {
    // Test 1: Inserting valid user:
    try {
        await UserDb.insertUser('TestUser', 'test@email.com', '$2y$10$TEkTsIS.jpeSJKKKvLfI0OHf2.ZJW3R/2gqP07QD1Wblc9gO7FqtG');
        console.log('insertUser test #1: Success');
    } catch (err) {
        console.log('insertUser test #1: Fail\n', err);
    }
}

async function test_removeUser() {
    try {
        await UserDb.removeUser(1);
        console.log('removeUser test #1: Success');
    } catch (err) {
        console.log('removeUser test #1: Fail\n', err);
    }
}

async function test_checkAuth() {
    // Test 1: Authenticate valid user:
    try {
        const res = await UserDb.checkAuth('TestUser', '$2y$10$TEkTsIS.jpeSJKKKvLfI0OHf2.ZJW3R/2gqP07QD1Wblc9gO7FqtG');
        if (res === true) {
            console.log('checkAuth test #1: Success');
        }
        else {
            throw new Error('User not found.');
        }
    } catch (err) {
        console.log('checkAuth test #1: Fail\n', err);
    }

    // Test 2: Authenticate invalid user:
    try {
        const res = await UserDb.checkAuth('følqpapuucsk', '$2y$10$TEkTsIS.jpeSJKKKvLfI0OHf2.ZJW3R/2gqP07QD1Wblc9gO7FqtG');
        if (res === false) {
            console.log('checkAuth test #2: Success');
        }
        else {
            throw new Error('Invalid authentication.');
        }
    } catch (err) {
        console.log('checkAuth test #2: Fail\n', err);
    }
}

async function test_updateUser() {

}

async function test_getUserData() {

}

async function test_all() {
    await test_insertUser();
    await test_checkAuth();
    await test_removeUser();
    await test_updateUser();
    await test_getUserData();
}

test_all()