import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { checkName, validateEmail, checkLength } from '../utils/Validation.js'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactForm() {
    const {t} = useTranslation('common');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [validName, setValidName] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [validSubject, setValidSubject] = useState(true);
    const [validMessage, setValidMessage] = useState(true);
    const [response, setResponse] = useState(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (!validName)
            setValidName(checkName(name));
        if (!validEmail)
            setValidEmail(validateEmail(email));
        if (!validSubject)
            setValidSubject(checkName(subject));
        if (!validMessage)
            setValidMessage(checkLength(message, 50, 5000));
        }, [name, email, subject, message]);

    const sendMessage = async (event) => {
        event.preventDefault();
        const isValidName = checkName(name);
        const isValidEmail = validateEmail(email);
        const isValidSubject = checkName(subject);
        const isValidMessage = checkLength(message, 50, 5000);
        setValidName(isValidName);
        setValidEmail(isValidEmail);
        setValidSubject(isValidSubject);
        setValidMessage(isValidMessage);

        if (!(isValidName && isValidEmail && isValidSubject && isValidMessage)) {
            setResponse(t('submit-error'));
            setIsError(true);
            return;
        }

        // TODO: Enter url for api:
        try {
            const res = await fetch('', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message }),
            });

            if (!res.ok) {
                throw new Error(`Server error: ${res.status}`);
            }

            const data = await res.json();
            if (!data.success) {
                throw new Error("Email sending failed");
            }

            setResponse(t('send-success'));
            setIsError(false);

            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch (error) {
            setResponse(t('send-error'));
            setIsError(true);
        }
    }

    return(
        <Form onSubmit={sendMessage} className="contact-form padding-sm margin-sm">
            <Form.Group className="mb-3">
                <Form.Label>{t('name')}</Form.Label>
                <Form.Control type="text" placeholder={t('name')} value={name}
                    onChange={(event) => setName(event.target.value)} isInvalid={!validName}
                />
                <Form.Control.Feedback type="invalid">
                    {t('name-error')}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>{t('email')}</Form.Label>
                <Form.Control type="email" placeholder={t('email')} value={email}
                    onChange={(event) => setEmail(event.target.value)} isInvalid={!validEmail}
                />
                <Form.Control.Feedback type="invalid">
                    {t('email-error')}
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                    {t('email-disclaimer')}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>{t('subject')}</Form.Label>
                <Form.Control type="text" placeholder={t('subject')} value={subject}
                    onChange={(event) => setSubject(event.target.value)} isInvalid={!validSubject}
                />
                <Form.Control.Feedback type="invalid">
                    {t('name-error')}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>{t('message')}</Form.Label>
                <Form.Control as="textarea" rows={6} placeholder={t('message')} value={message}
                    onChange={(event) => setMessage(event.target.value)} isInvalid={!validMessage}
                />
                <Form.Control.Feedback type="invalid">
                    {t('message-error')}
                </Form.Control.Feedback>
            </Form.Group>
            {isError && <p className="text-danger">{response}</p>}
            <Button variant="success" type="submit" >
                {`${t('send')} ${t('message').toLowerCase()}`}
            </Button>
        </Form>
    )
}

export default ContactForm;