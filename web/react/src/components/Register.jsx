import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { validateEmail, validatePassword } from '../utils/Validation';
import '../app.css';

function Regsiter() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [validConfirm, setValidConfirm] = useState(true);
    const [requirementsVisible, setRequirementsVisible] = useState(false);

    function validate() {
        setValidEmail(validateEmail(email));
        setValidPassword(validatePassword(password));
        setValidConfirm(password === passwordConfirm);
        return validEmail && validPassword && validConfirm;
    }

    const toggleReqs = () => {
        setRequirementsVisible((prev) => !prev);
      };

    const handleRegistration = (event) => {
        event.preventDefault()
        if (validate())
            console.log('Registered');
    };

    return (
        <>
            <Form onSubmit={handleRegistration}>
                <Form.Label>E-mail address:</Form.Label>
                <Form.Control value={email} onChange={(event) => setEmail(event.target.value)} ></Form.Control>
                {!validEmail && <p className="error">Must contain valid email address.</p>}
                <Form.Label>Password:</Form.Label>
                <Form.Control value={password} onChange={(event) => setPassword(event.target.value)} ></Form.Control>
                {!validPassword && 
                <p className="error">Invalid password. <span onClick={toggleReqs} className="clickable">See requirements here {(requirementsVisible) ? '⯅' : '⯆'}</span></p>}
                {requirementsVisible && 
                <div className="formInfo">
                    Password must contain:
                    <ul>
                        <li>a minimum of 1 lower case letter [a-z],</li>
                        <li>a minimum of 1 upper case letter [A-Z],</li>
                        <li>a minimum of 1 numeric character [0-9],</li>
                        <li>And be at least 10 characters in length.</li>
                    </ul>
                </div>}
                <Form.Label>Confirm password:</Form.Label>
                <Form.Control value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)}></Form.Control>
                {!validConfirm && <p className="error">Password confirmation does not match.</p>}
                <Button type='submit'>Register</Button>
            </Form>
        </>
    )
}

export default Login;