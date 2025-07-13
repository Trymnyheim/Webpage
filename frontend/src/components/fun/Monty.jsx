import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Doors from './Doors.jsx';
import MontyHall from './MontyHall.js';
import MontyStatistics from './MontyStatistics.jsx';

function Monty() {
    const { t } = useTranslation("games");
    const tGame = (key) => t(`monty.game.${key}`)
    const tStats = (key) => t(`monty.statistics.${key}`)

    const initializeGame = () => ({
        montyHall: new MontyHall(),
        goatDoor: -1,
        isFinished: false,
        isWin: false
    });

    const [gameState, setGameState] = useState(initializeGame);


    const selectDoor = (i) => {
        if (gameState.goatDoor !== -1) {
            setGameState(prev => ({
                ...prev,
                isFinished: true,
                goatDoor: -1,
                isWin: prev.montyHall.doors[i]
            }));
        } else {
            setGameState(prev => ({
                ...prev,
                goatDoor: prev.montyHall.getGoat(i)
            }));
        }
        console.log(gameState);
    };

    const reset = () => {
        setGameState(initializeGame());
        console.log(gameState);
    };

    return (
        <div>
            <div className="center">
                <h2>Monty Hall</h2>
                <p style={{textAlign: "center"}}>{tGame('ingress')}</p>
                <h5 style={{textAlign: "center"}}>{tGame('question')}</h5>
                <Doors gameState={gameState} selectDoor={selectDoor} />
                <h2>{gameState.goatDoor !== -1 ? tGame('switch') : ""}</h2>
                {gameState.isFinished && <h2>{gameState.isWin ? tGame('win') : tGame('lose')}</h2>}
                <br/>
                <Button onClick={reset}>Reset</Button>
            </div>
            <MontyStatistics t={tStats} />
        </div>
    )
}


export default Monty;