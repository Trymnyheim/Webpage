
function Doors({gameState, selectDoor}) {

    const openDoor = (i) => gameState.goatDoor !== -1 && 
        i === gameState.goatDoor || gameState.isFinished;

    const path = '/imgs/fun/monty/';

    return (
        <div className="doors"> 
            {gameState.montyHall.doors.map((door, i) => (
                <div key={i} className="door" onClick={() => selectDoor(i)}>
                    <img style={{width: "50%"}} 
                        src={`${path}${door ? 'car.png' : 'goat.png'}`}
                    />
                    <img src={`${path}${openDoor(i) ? 'door_open.png' : 'door_closed.png'}`}/>
                </div>
            ))}
        </div>
    )
}

export default Doors;