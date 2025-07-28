import ContactForm from '../components/ContactForm.jsx';
import CardContainer from '../components/containers/CardContainer.jsx';
import { useTranslation } from 'react-i18next';

function Contact() {

    const {t} = useTranslation('common');

    return (
        <div className="contact">
            <div className="contact-item" >
                <CardContainer title={t('contact-info')} imageUnder="/imgs/myrsletta.jpg" colored>
                    <p>{t('contact-info-text')}</p>
                    <a href="tel:+4791585262" className="link">
                        <div className="contact-info">
                            <i className="bi bi-telephone fs-3"/>
                            <p>+47 915 85 262</p>
                        </div>
                    </a>
                    <a href="mailto:trym.haakon.nyheim@gmail.com" className="link">
                        <div className="contact-info">
                            <i className="bi bi-envelope fs-3"/>
                            <p>trym.haakon.nyheim@gmail.com</p>
                        </div>
                    </a>
                    <div className="contact-info">
                        <a onClick={() => window.location.href = 'https://github.com/Trymnyheim/Webpage'}
                            className="link"
                        >
                            <i className="bi bi-linkedin fs-1"/>
                        </a>
                        <a onClick={() => window.location.href = 'https://github.com/Trymnyheim/Webpage'}
                            className="link"
                        >
                            <i className="bi bi-github fs-1"/>
                        </a>
                    </div>
                </CardContainer>
            </div>
            <div className="contact-item" >
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;