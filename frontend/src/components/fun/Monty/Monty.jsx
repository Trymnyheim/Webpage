import { useTranslation } from 'react-i18next';
import MontyGame from './MontyGame.jsx';
import MontyStatistics from './MontyStatistics.jsx';
import './Monty.css';

/* TODO:
    - Make monty game responsive
    - Refine game's text of ingress
*/

function Monty() {
    const { t } = useTranslation("games");
    const tGame = (key) => t(`monty.game.${key}`)
    const tStats = (key) => t(`monty.statistics.${key}`)

    return (
        <>
            <MontyGame t={tGame} />
            <MontyStatistics t={tStats} />
        </>
    )
}


export default Monty;