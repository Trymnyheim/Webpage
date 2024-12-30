import Task from './Task'
import { useState, useEffect } from 'react';


function TaskList(props) {
    const [taskList, setTaskList] = useState(props.taskList);
    
    useEffect(() => {
        setTaskList(props.taskList);
    }, [props.taskList]);

    function updateTask(id, title, desc, date, comp) {
        try {
            // Send request to server
            
            // Update in client

            console.log(`Updated task with ID ${id}.`);
        } catch (error) {
            // Show error message to user!
            console.error("Error updating task: ", error)
        }
    }

    function deleteTask(id) {
        try {
            // Send request to server
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
        </>
    );
}

export default TaskList