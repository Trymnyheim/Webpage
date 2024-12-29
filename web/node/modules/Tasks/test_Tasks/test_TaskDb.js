const TaskDb = require("../TaskDb.js");
const Task = require("../Task.js");

async function test_createTable() {
    await TaskDb.dropTable('Tester')
    // Test 1: Creating a table::
    try {
        await TaskDb.createTable('Tester');
        console.log('createTable test #1: Success');
    } catch (err) {
        console.log('createTable test #1: Fail\n', err);
    }

    // Test 2: Trying to create table with non-unique name:
    try {
        await TaskDb.createTable('Tester');
        console.log('createTable test #2: Fail');
        console.error('Should not have been able to create non-unique table.');
    } catch (err) {
        console.log('createTable test #2: Success');
    }
}

async function test_insertTask() {
    // Test 1: Inserting a valid task in valid table
    try {
        await TaskDb.insertTask('Tester', new Task(1, 'Test task', "A description", "2024-10-31 10:30:00", 0));
        console.log('insertTask test #1: Success');
    } catch (err) {
        console.log('insertTask test #1: Fail\n', err);
    }

    // Test 2: Inserting a valid task in invalid table
    try {
        await TaskDb.insertTask('Jqosmeisl', new Task(1, 'Test task', "A description", "2024-10-31 10:30:00", 0));
        console.log('insertTask test #2: Fail');
        console.error('Was able to insert into non-existing table')
    } catch (err) {
        console.log('insertTask test #2: Success');
    }
}

async function test_updateTask() {
    // Test 1: Valid update of task:
    try {
        await TaskDb.updateTask('Tester', new Task(1, 'Updated task', "A description", "2024-10-31 10:30:00", 0));
        console.log('updateTask test #1: Success');
    } catch (err) {
        console.log('updateTask test #1: Fail\n', err);
    }
}

async function test_deleteTask() {
    // Test 1: Valid deletion of task:
    try {
        await TaskDb.deleteTask('Tester', 1);
        console.log('deleteTask test #1: Success');
    } catch (err) {
        console.log('deleteTask test #1: Fail\n', err);
    }
}

async function test_getAllTasks() {

    // Test 1: Checking if it returns the right amount of tasks.
    await TaskDb.insertTask('Tester', new Task(1, 'Test task 1', "A description", "2024-10-31 10:30:00", 0));
    await TaskDb.insertTask('Tester', new Task(2, 'Test task 2', "A description", "2024-10-31 10:30:00", 0));
    try {
        const tasks = await TaskDb.getAllTasks('Tester');
        if (tasks.length === 2) {
            console.log('getAllTasks test #1: Success');
        }
        else {
            throw Error('Failed to retrieve the right amount of tasks.');
        }
    } catch (err) {
        console.log('getAllTasks test #1: Fail\n', err);
    }

    // Test 2: Checking if it still returns the right amount after adding task.
    await TaskDb.insertTask('Tester', new Task(3, 'Test task 3', "A description", "2024-10-31 10:30:00", 0));
    try {
        const tasks = await TaskDb.getAllTasks('Tester');
        if (tasks.length === 3) {
            console.log('getAllTasks test #2: Success');
        }
        else {
            throw Error('Failed to retrieve the right amount of tasks.');
        }
    } catch (err) {
        console.log('getAllTasks test #2: Fail\n', err);
    }

    // Test 3: Trying to get tasks from non-existing table
    try {
        const tasks = await TaskDb.getAllTasks('ertjasokf');
        console.log('getAllTasks test #3: Fail');
        console.log('Did not throw error when trying to insert into non-existent table.');
    } catch (err) {
        console.log('getAllTasks test #3: Success');
    }
}

async function test_all() {
    await test_createTable();
    await test_insertTask();
    await test_updateTask();
    await test_deleteTask();
    await test_getAllTasks();
}

test_all()

