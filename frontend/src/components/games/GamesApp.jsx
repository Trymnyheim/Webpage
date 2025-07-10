import { useTranslation } from 'react-i18next';
import './games.css';
import Monty from './Monty.jsx';
import CardGame from './CardGame.jsx';

function GamesApp() {
    const { t } = useTranslation("games");
    

    return (
        <>
            <Monty />
            <CardGame />
        </>
    )
}

export default GamesApp;