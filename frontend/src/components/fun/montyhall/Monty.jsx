import { useTranslation } from 'react-i18next';
import MontyGame from './MontyGame.jsx';
import MontyStatistics from './MontyStatistics.jsx';
import CardContainer from '../../containers/CardContainer.jsx';
import './Monty.css';

function Monty() {
    const { t } = useTranslation("games");
    const tGame = (key) => t(`monty.game.${key}`)
    const tStats = (key) => t(`monty.statistics.${key}`)

    return (
        <>
            <div className="monty-container">
                <MontyGame t={tGame} />
                <div className="monty-item">
                    <CardContainer title={tGame('about.title')}>
                        <p>{tGame('about.text')}</p>
                    </CardContainer>
                </div>
                <MontyStatistics t={tStats} />
                <div className="monty-item">
                    <CardContainer title={tStats('about.title')}>
                        <p>{tStats('about.text')}</p>
                    </CardContainer>
                </div>
            </div>
        </>
    )
}


export default Monty;