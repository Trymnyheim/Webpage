import TaskList from './TaskList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function TasksApp() {

    const taskLists = [{id: "list1"}, {id: "list2"}]

    return (
        <>
            {taskLists.map(taskList => 
                <TaskList id={taskList.id}/>
            )}
        </>
    )
}

export default TasksApp;
