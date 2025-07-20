import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Doors from './Doors.jsx';
import MontyHall from './MontyHall.js';

const initializeGame = () => ({
        montyHall: new MontyHall(),
        goatDoor: -1,
        isFinished: false,
        isWin: false
    });

function MontyGame({ t }) {
    const [gameState, setGameState] = useState(initializeGame);

    const selectDoor = (i) => {
        if (gameState.isFinished)
            reset();
        else if (gameState.goatDoor !== -1)
            setGameState(prev => ({
                ...prev,
                isFinished: true,
                goatDoor: -1,
                isWin: prev.montyHall.doors[i]
            }))
        else
            setGameState(prev => ({
                ...prev,
                goatDoor: prev.montyHall.getGoat(i)
            }))
    }

    const reset = () => {
        setGameState(initializeGame());
    }

    return (
        <div className="center">
            <h4>
                {gameState.goatDoor !== -1 ? t('switch') : 
                    !gameState.isFinished ? t('start') : 
                    gameState.isWin ? t('win') : t('lose')
                }
            </h4>
            <Doors gameState={gameState} selectDoor={selectDoor} />
            <Button onClick={reset}>Reset</Button>
        </div>
    )
}


export default MontyGame;