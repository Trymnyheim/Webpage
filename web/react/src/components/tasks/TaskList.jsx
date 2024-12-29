import Task from './Task'
import { useState, useEffect } from 'react';
import './Task.css';


function TaskList(props) {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/tasks/gettasks')
                if (!res.ok) {
                    throw new Error();
                }
                const data = await res.json()   
                setTasks(data)
            } catch (error) {
                console.log('Unable to fetch tasks: ', error)
                setTasks(testData())
            }
        }
        fetchTasks();
    }, [])

    function testData() {
        return [
            {id: 1, title: "Test Nr 1", desc: "Dette er den første testtasken. Vi får se hvordan dette går da!", date: "21.10.97", comp: 1},
            {id: 2, title: "Test2", desc: "Andre test", date: "31.10.97", comp: 0}
        ]
    }

    function updateTask(id, title, desc, date, comp) {
        try {
            // Send request to server
            
            // Update in client
            const index = tasks.findIndex((task) => task.id === id);
            if (index === -1)
                throw new Error("Task not found.");
            const updatedTasks = [...tasks];
            updatedTasks[index] = { ...updatedTasks[index], title, desc, date, comp };

            setTasks(updatedTasks);
            console.log(`Updated task with ID ${id}.`);
        } catch (error) {
            // Show error message to user!
            console.error("Error updating task: ", error)
        }
    }

    function deleteTask(id) {
        try {
            // Send request to server
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
            console.log(`Deleted task with ID ${id}.`)
        } catch (error) {
            // Show error message to user!
            console.error("Error deleting task: ", error)
        }
    }

    return (
        <>
            <h2>{props.id}</h2>
            <div className="taskList">
                {tasks.map(task => 
                    <Task key = {task.id} id = {task.id} title = {task.title} desc = {task.desc} date = {task.date} comp = {task.comp} update = {updateTask} delete = {deleteTask} />
                )}
            </div>
        </>
    );
}

export default TaskList