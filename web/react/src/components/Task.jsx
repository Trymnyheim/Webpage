import { useState } from 'react';
import TaskEditor from './TaskEditor.jsx';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Task(props) {
    const [isChecked, setIsChecked] = useState(() => props.comp === 1)
    const [modalShow, setModalShow] = useState(false);

    const toggleComp = () => {
        setIsChecked((prevState) => {
            props.update(props.id, props.title, props.desc, props.date, !prevState ? 1 : 0);
            return !prevState 
        })
    };

    return (
        <div className ="task" id = {props.id}>
            <div className ="taskHeader">
                <h5>{props.title}</h5>
                <Form.Check className="greenCheck" checked = {isChecked} onChange = {toggleComp}/>
            </div>
            <div className="taskBody">
                <p>{props.desc}</p>
            </div>
            <div className="taskFooter">
                <p>{props.date}</p>
                <div className = "taskButtons">
                    <Button className="button" variant="primary" onClick={() => setModalShow(true)}>Edit</Button>
                    <Button className="button" variant="danger" onClick={() => props.delete(props.id)}>Delete</Button>
                </div>
            </div>
            <TaskEditor show={modalShow} onHide={() => setModalShow(false)} id = {props.id} title = {props.title} desc = {props.desc} date = {props.date} comp = {props.comp} update = {props.update}/>
        </div>
    )
}

export default Task;