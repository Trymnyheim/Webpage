import { useTranslation } from 'react-i18next';
import './games.css';
import Monty from './Monty.jsx';

function GamesApp() {
    const { t } = useTranslation("games");

    return (
        <>
            <Monty />
        </>
    )
}

export default GamesApp;