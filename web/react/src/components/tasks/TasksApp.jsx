import TaskList from './TaskList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect} from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import './Task.css';
import Form from 'react-bootstrap/Form';

function TasksApp() {
    const [taskLists, setTaskLists] = useState([]);
    const [currentList, setCurrentList] = useState(null);
    const [show, setShow] = useState(false);
    const [newListVisible, setNewListVisible] = useState(false);
    const [newList, setNewList] = useState('');

  const toggleNewList = () => {
    setNewListVisible((prev) => !prev);
  };

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/tasks/gettasks');
                if (!res.ok) {
                    throw new Error();
                }
                const data = await res.json()  ; 
                setTaskLists(data);
                setCurrentList(data[0]);
            } catch (error) {
                console.log('Unable to fetch tasks: ', error)
                // For dev purpose only:
                const data = testData();
                setTaskLists(data);
                setCurrentList(data[0]);
            }
        }
        fetchTasks();
    }, [])

    function addNewList() {
        event.preventDefault();
        const newTaskList = { id: taskLists.length + 1, title: newList, tasks: [] };
        const updatedLists = [...taskLists, newTaskList];
        setTaskLists(updatedLists);
        setCurrentList(newTaskList);
        setNewList('');
        setNewListVisible(false);
    }

    function updateTaskList(taskList) {
        const updatedList = taskLists.map((list) =>
            list.id === taskList.id ? taskList : list
        );

        setTaskLists(updatedList);

        // Update `currentList` if it matches the updated taskList
        if (currentList?.id === taskList.id) {
            setCurrentList(taskList);
        }
    }

    function testData() {
        return [
            {
                id: "1",
                title: "List Nr. 1",
                tasks: [
                    {id: 1, title: "In list nr 1", desc: "Dette er den første testtasken. Vi får se hvordan dette går da!", date: "21.10.97", comp: 1},
                    {id: 2, title: "Test2", desc: "Andre test", date: "31.10.97", comp: 0}
                ]
            }, 
            {   id: "2",
                title: "List Nr. 2",
                tasks: [
                    {id: 1, title: "Hei på deg", desc: "Den andre tasklisten.", date: "21.10.97", comp: 1}
                ]
            }
        ]
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="mb-3" >
                Open Sidebar
            </Button>
            <Offcanvas show={show} onHide={handleClose} className="taskMenu">
                <Offcanvas.Header closeButton className="taskMenuTitle">
                    <Offcanvas.Title> <h1>Tasklists</h1></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        {taskLists.map((taskList) => (
                            <li key={taskList.id}
                                className="taskMenuItem"
                                onClick={() => {
                                    setCurrentList(taskList);
                                    handleClose();
                                }}
                            >{taskList.title}</li>
                        ))}
                    </ul>
                    {!newListVisible && (
                        <Button onClick={toggleNewList}>New tasklist</Button>
                    )}
                    {newListVisible && (
                        <Form onSubmit={addNewList}>
                            <Form.Control className = "TEInput" type="text" value={newList} onChange = {(event) => setNewList(event.target.value)}></Form.Control>
                            <Button variant="danger" onClick={() => {toggleNewList(); setNewList('');}}>Discard</Button>
                            <Button variant="success" type="submit">Add New List</Button>
                        </Form>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
            {currentList && <TaskList taskList={currentList} updateTaskList = {updateTaskList}/>}
        </>
    )
}

export default TasksApp;
