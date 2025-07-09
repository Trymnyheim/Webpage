import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { validateEmail, validatePassword } from '../utils/Validation';
import '../app.css';
import Modal from 'react-bootstrap/Modal';


function Register({registerShow, handleRegisterClose, t}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [validConfirm, setValidConfirm] = useState(true);
    const [requirementsVisible, setRequirementsVisible] = useState(false);

    const toggleReqs = () => {
        setRequirementsVisible((prev) => !prev);
      };

    const handleRegistration = async (event) => {
        event.preventDefault();
        const emailVal = validateEmail(email);
        const passVal = validatePassword(password);
        const confVal = password === passwordConfirm;
        setValidEmail(emailVal);
        setValidPassword(passVal);
        setValidConfirm(confVal);
        if (emailVal && passVal && confVal) {
            try {
                // Send server request
                handleRegisterClose();
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <>
            <Modal centered show={registerShow} onHide={handleRegisterClose}>
                <Form onSubmit={handleRegistration}>
                    <Modal.Header closeButton>
                        <Modal.Title>{t("register")}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label>{t("email")}:</Form.Label>
                        <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} ></Form.Control>
                        {!validEmail && <p className="error">{t("emailError")}</p>}
                        <Form.Label>{t("password")}:</Form.Label>
                        <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} ></Form.Control>
                        {!validPassword && 
                        <p className="error">{t("passwordError")} <span onClick={toggleReqs} className="clickable">See requirements here {(requirementsVisible) ? '⯅' : '⯆'}</span></p>}
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
                        <Form.Label>{t("confirmPass")}:</Form.Label>
                        <Form.Control type="password" value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)}></Form.Control>
                        {!validConfirm && <p className="error">{t("passConfError")}</p>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleRegisterClose}>Close</Button>
                        <Button type='submit' onClick={handleRegistration}>{t("register")}</Button>
                    </Modal.Footer>
                </Form>
      		</Modal>
        </>
    )
}

export default Register;