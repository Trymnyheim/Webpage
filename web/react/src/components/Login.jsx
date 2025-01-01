import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { validateEmail, validatePassword } from '../utils/Validation';
import '../app.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);

    const handleLogin = async (event) => {
        event.preventDefault();
        const emailVal = validateEmail(email);
        const passVal = validatePassword(password);
        setValidEmail(emailVal);
        setValidPassword(passVal);
        if (emailVal && passVal)
            // Server request
            console.log('Logged in');
    };

    return (
        <>
            <Form onSubmit={handleLogin}>
                <Form.Label>E-mail address:</Form.Label>
                <Form.Control value={email} onChange={(event) => setEmail(event.target.value)} ></Form.Control>
                {!validEmail && <p className="error">Please provide a valid email address.</p>}
                <Form.Label>Password:</Form.Label>
                <Form.Control value={password} onChange={(event) => setPassword(event.target.value)} ></Form.Control>
                {!validPassword && 
                <p className="error">Password does not meet requirements.</p>}
                <Button type='submit'>Login</Button>
            </Form>
        </>
    )
}

export default Login;