import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { validateEmail, validatePassword } from '/src/utils/Validation';
import '/src/app.css';
import Modal from 'react-bootstrap/Modal';


function Login({loginShow, handleLoginClose, t}) {
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
                        <Modal.Title>{t("login")}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label>{t("email")}:</Form.Label>
                        <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} ></Form.Control>
                        {!validEmail && <p className="error">{t("emailError")}</p>}
                        <Form.Label>{t("password")}</Form.Label>
                        <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} ></Form.Control>
                        {!validPassword && 
                        <p className="error">{t("passwordError")}</p>}
                        {!validLogin &&
                        <p className="error">{t("loginError")}</p>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleLoginClose}>{t("close")}</Button>
                        <Button type='submit' onClick={handleLogin}>Login</Button>
                    </Modal.Footer>
                </Form>
      		</Modal>
        </>
    )
}

export default Login;