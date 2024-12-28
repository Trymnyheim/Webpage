import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const taskLists = [{id: "list1"}, {id: "list2"}]

    return (
        <>
            {taskLists.map(taskList => 
                <TaskList id={taskList.id}/>
            )}
        </>
    )
}

export default App
