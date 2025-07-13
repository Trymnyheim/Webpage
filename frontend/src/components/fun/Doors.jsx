
function Doors({gameState, selectDoor}) {

    return (
        <div className="doors"> 
            {gameState.montyHall.doors.map((door, i) => (
                <div onClick={() => !gameState.isFinished && selectDoor(i)} key={i} className="door">
                    <img style={{width: "50%"}} src={door ? "/imgs/fun/monty/car.png" : "/imgs/fun/monty/goat.png"}/>
                    <img src={gameState.goatDoor !== -1 && i === gameState.goatDoor || gameState.isFinished ? "/imgs/fun/monty/door_open.png" : "/imgs/fun/monty/door_closed.png"}/>
                </div>
            ))}
        </div>
    );
}

export default Doors;