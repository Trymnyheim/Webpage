const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

//Test data:
const testData = {title: 'testItem2', desc: 'Description', date: '31-10-1997', comp: '0'};

getTasks();


async function getTasks(){
    const tasksData = [];
    try {
        const dict = await getDictList();
        for(let i = 0; i < dict.length; i++){
            const taskList = dict[i].title;
            let taskListContent = await fsPromises.readFile(`./files/${taskList}.txt`, 'utf8');
            const taskListData = {
                'title': taskList,
                'content': JSON.parse(taskListContent)  // Parse the JSON content
            };
            tasksData.push(taskListData);
        }
        return tasksData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

//OK
//Adds new Task Lists
async function newList(taskList){
    const pathName = `./files/${taskList}.txt`;
    const taskData = '[]';
    if (!fs.existsSync(pathName)){
        try {
            await fsPromises.writeFile(pathName, taskData, 'utf8');
            await addDictList(taskList);
            const message = `Task list '${taskList}' created.`;
            return message;
        } catch (error) {
            console.error(error);
        }
    }
    else {
        const message = `Task item '${taskList}' already exists.`
        return message;
    }
}

//OK
//Add new task item to list + dictionary

async function newTaskItem(taskList, data) {
    const pathName = `./files/${taskList}.txt`;
    
    if (fs.existsSync(pathName)) {
        try {
            const fileData = await fsPromises.readFile(pathName, 'utf8');
            
            // Check if fileData is empty
            let taskData = fileData ? JSON.parse(fileData) : [];
            
            const newItem = {
                title: data.title,
                desc: data.desc,
                date: data.date,
                comp: data.comp
            };
            
            if (Array.isArray(taskData)) {
                taskData.push(newItem);  // Add the new item directly to the array
            } else {
                taskData = [newItem];  // Initialize taskData as an array with the new item
            }
            
            await fsPromises.writeFile(pathName, JSON.stringify(taskData, null, 2), 'utf8');
            await addDictItem(taskList, data.title);
            
            const message = `Task item '${data.title}' created.`;
            return message;
        } catch (error) {
            console.error(error);
        }
    } else {
        const message = `Task list '${taskList}' does not exist.`;
        return message;
    }
}



/*
async function getTaskItem(TaskList, taskItem){
    const pathName = `./files/${TaskList}/${taskItem}.txt`;
    try {
        const data = await fsPromises.readFile(pathName, 'utf8');
        const splitData = data.split(';');
        const taskData = {
            title: splitData[0],
            desc: splitData[1],
            date: splitData[2],
            comp: splitData[3]
        };
        return taskData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
*/


/*
async function updateTaskItem(TaskList, taskItem, data){
    const dir = `./files/${TaskList}/`;
    const oldPath = `${dir}${taskItem}.txt`;
    const pathName = `${dir}${data.title}.txt`;
    const taskData = `${data.title};${data.desc};${data.date};${data.comp}`;
    if(fs.existsSync(oldPath)){
        try {
            await fsPromises.writeFile(pathName, taskData, 'utf8');
            if (taskItem != data.title){
                await fsPromises.unlink(oldPath);
            }
            const message = `Task item '${data.title}' updated.`;
            return message;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
*/

/* Dictionary metoder */

//OK
//Adds new task list to dictionary file
async function addDictList(taskList){
    const pathName = `./files/dictionary.txt`;
    try {
        const newList = {
            title: taskList,
            content: []
        }
        const data = await getDictList();
        data.push(newList);
        const updatedData = JSON.stringify(data, null, 2);
        await fsPromises.writeFile(pathName, updatedData, 'utf8');
    } catch (error) {
        console.error(error);
    }
}

//OK
//Add a new item to task list
async function addDictItem(taskList, taskItem) {
    const pathName = `./files/dictionary.txt`;
    try {
        // Await the dataPromise from getDictList()
        const data = await getDictList();
        for (let i = 0; i < data.length; i++) {
            if (data[i].title === taskList) {
                data[i].content.push(taskItem);
            }
        }
        const updatedData = JSON.stringify(data, null, 2);
        await fsPromises.writeFile(pathName, updatedData, 'utf8');
    } catch (error) {
        console.error(error);
    }
}

//OK
//Gets content of dictionary files as a JSON
async function getDictList() {
    const pathName = `./files/dictionary.txt`;
    try {
        const dict = await fsPromises.readFile(pathName, 'utf8');
        
        // Check if the file is empty
        if (!dict.trim()) {
            return [];  // Return an empty array if the file is empty
        }
        
        // Parse the JSON data
        const data = JSON.parse(dict);
        
        // Ensure data is an array
        return Array.isArray(data) ? data : [];
    } catch (error) {
        if (error.code === 'ENOENT') {
            return [];  // Return an empty array if the file doesn't exist
        }
        console.error(error);
        throw error;
    }
}


module.exports = {
    getTasks,
    newList
}



//Siste prioritet: Slett metoder, trenger også sletting i dictionary

/*
async function deleteTaskItem(taskList, taskItem){
    const dir = `./files/${taskList}/`;
    const pathName = `${dir}${taskItem}.txt`;
    if(fs.existsSync(pathName)){
        try {
            await fsPromises.unlink(pathName);
            const message = `Task item '${taskItem}' deleted.`;
            return message;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
*/

/*
async function deleteTaskList(taskList){
    const dir = `./files/${taskList}`;
    if (fs.existsSync(dir)){
        try {
            await fsPromises.rm(dir, { recursive: true } );
            const message = `Tasklist'${taskList}' was deleted.`;
            return message;
        } catch (error){
            console.error(error);
        }
    }
    else {
        const message = `Tasklist '${taskList}' does not exist.`
        return message;
    }
}
*/