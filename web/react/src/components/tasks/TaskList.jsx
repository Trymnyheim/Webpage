import Task from './Task'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import NewTask from './NewTask.jsx';


function TaskList({taskList, updateTaskList}) {  
    const [modalShow, setModalShow] = useState(false);

    function addTask(taskTitle, taskDesc, taskDate) {
        const newId = taskList.tasks.length + 1
        const newTask = { id: newId, title: taskTitle, desc: taskDesc, date: taskDate, comp: 0 };
        const updatedTaskList = { ...taskList, tasks: [...taskList.tasks, newTask] };
        updateTaskList(updatedTaskList);
        console.log(`Added task with ID ${newId}.`);
    }
    
    function updateTask(id, title, desc, date, comp) {
        try {
            // Update in client
            const updatedTasks = taskList.tasks.map((task) =>
                task.id === id ? { ...task, title, desc, date, comp } : task
            );
            const updatedTaskList = { ...taskList, tasks: updatedTasks };
            updateTaskList(updatedTaskList);
            console.log(`Updated task with ID ${id}.`);
        } catch (error) {
            // Show error message to user!
            console.error("Error updating task: ", error)
        }
    }

    function deleteTask(id) {
        try {
            // Send request to server

            // Client side:
            const updatedTasks = taskList.tasks.filter((task) => task.id !== id);
            const updatedTaskList = { ...taskList, tasks: updatedTasks };
            updateTaskList(updatedTaskList);
            console.log(`Deleted task with ID ${id}.`)
        } catch (error) {
            // Show error message to user!
            console.error("Error deleting task: ", error)
        }
    }

    return (
        <>
            <h2>{taskList.title}</h2>
            <div className="taskList">
                {taskList.tasks.map(task => 
                    <Task key = {task.id} id = {task.id} title = {task.title} desc = {task.desc} date = {task.date} comp = {task.comp} update = {updateTask} delete = {deleteTask} />
                )}
            </div>
            <Button className="button" variant="primary" onClick={() => setModalShow(true)}>Create new task</Button>
            <NewTask show={modalShow} onHide={() => setModalShow(false)} addTask={addTask} />
        </>
    );
}

export default TaskList