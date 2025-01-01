import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { validateEmail, validatePassword } from '../utils/Validation';
import '../app.css';
import Modal from 'react-bootstrap/Modal';


function Login({loginShow, handleLoginClose}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [validLogin, setValidLogin] = useState(true);

    const handleLogin = async (event) => {
        event.preventDefault();
        const emailVal = validateEmail(email);
        const passVal = validatePassword(password);
        setValidEmail(emailVal);
        setValidPassword(passVal);
        if (emailVal && passVal)
            try {
                // Server request
                console.log('Logged in');
                if (password !== "TrymErKul1")
                    throw new Error();
                setValidLogin(true);
                handleLoginClose();
            } catch (err) {
                console.error(err);
                setValidLogin(false);
            }
    };

    return (
        <>
            <Modal centered show={loginShow} onHide={handleLoginClose}>
                <Form onSubmit={handleLogin}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label>E-mail address:</Form.Label>
                        <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} ></Form.Control>
                        {!validEmail && <p className="error">Please provide a valid email address.</p>}
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} ></Form.Control>
                        {!validPassword && 
                        <p className="error">Password does not meet requirements.</p>}
                        {!validLogin &&
                        <p className="error">Ugyldig passord. Du skrev ikke "TrymErKul1"</p>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleLoginClose}>Close</Button>
                        <Button type='submit' onClick={handleLogin}>Login</Button>
                    </Modal.Footer>
                </Form>
      		</Modal>
        </>
    )
}

export default Login;