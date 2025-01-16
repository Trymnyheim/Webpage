import { useTranslation } from 'react-i18next';
import Doors from './Doors.jsx';
import MontyHall from './MontyHall.js';

function Monty() {
    const { t } = useTranslation("games");
    const monty = new MontyHall();
    return (
        <>
            <h2>Monty Hall</h2>
            <p>{t('monty.ingress')}</p>
            <h5>{t('monty.question')}</h5>
            <Doors monty={monty}/>
        </>
    )
}

export default Monty;