import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Doors from './Doors.jsx';
import MontyHall from './MontyHall.js';

function Monty() {
    const { t } = useTranslation("games");

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
        <>
            <h2>Monty Hall</h2>
            <p style={{textAlign: "center"}}>{t('monty.ingress')}</p>
            <h5 style={{textAlign: "center"}}>{t('monty.question')}</h5>
            <Doors gameState={gameState} selectDoor={selectDoor} />
            <h2>{gameState.goatDoor !== -1 ? t("monty.switch") : ""}</h2>
            {gameState.isFinished && <h2>{gameState.isWin ? t("monty.win") : t("monty.lose")}</h2>}
            <br/>
            <Button style={{marginLeft: "45vw"}} onClick={reset}>Reset</Button>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    );
}


export default Monty;