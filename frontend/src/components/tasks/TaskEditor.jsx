import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function TaskEditor(props) {
    const [title, setTitle] = useState(props.title)
    const [desc, setDesc] = useState(props.desc)
    const [date, setDate] = useState(props.date)

    function update() {
        event.preventDefault();
        props.update(props.id, title, desc, date, props.comp)
        props.onHide()
    }

    function discard() {
        setTitle(props.title)
        setDesc(props.desc)
        setDate(props.date)
        props.onHide()
    }

    return (
        <Modal size="lg" centered show = {props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Editing Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={update}>
                    <Form.Group>
                        <Form.Control className = "TEInput" type="text" value={title} onChange = {(event) => setTitle(event.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control className = "TEInput" type="text" value={desc} onChange = {(event) => setDesc(event.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control className = "TEInput" type="text" value={date} onChange = {(event) => setDate(event.target.value)}/>
                    </Form.Group>
                    <button type="submit" style={{ display: 'none' }}></button>
                </Form>           
            </Modal.Body>
            <Modal.Footer>
                <Button variant = "danger" onClick={discard}>Discard</Button>
                <Button variant = "success" onClick={update}>Save Change</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default TaskEditor