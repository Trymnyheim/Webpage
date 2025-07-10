import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function NewTask({onHide, show, addTask}) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [date, setDate] = useState('')

    function discardNew() {
        setTitle('');
        setDesc('');
        setDate('');
        onHide();
    }

    function saveNew() {
        event.preventDefault();
        addTask(title, desc, date);
        onHide();
        discardNew();
    }

    return (
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show = {show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create New Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={saveNew}>
                    <Form.Group>
                        <Form.Label>Title:</Form.Label>
                        <Form.Control className = "TEInput" type="text" value={title} onChange = {(event) => setTitle(event.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control className = "TEInput" type="text" value={desc} onChange = {(event) => setDesc(event.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date:</Form.Label>
                        <Form.Control className = "TEInput" type="text" value={date} onChange = {(event) => setDate(event.target.value)}/>
                    </Form.Group>
                    <button type="submit" style={{ display: 'none' }}></button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant = "danger" onClick={discardNew}>Discard</Button>
                <Button variant = "success" onClick={saveNew}>Save Change</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default NewTask
