import { useTranslation } from 'react-i18next';
import './games.css';
import Doors from './Doors.jsx';

function GamesApp() {
    const { t } = useTranslation("games");
    return (
        <>
            <h2>Monty Hall</h2>
            <p>{t('monty.ingress')}</p>
            <h5>{t('monty.question')}</h5>
            <Doors />
        </>
    )
}

export default GamesApp;