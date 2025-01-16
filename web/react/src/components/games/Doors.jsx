function Doors({ monty }) {
    return (
        <div className="doors"> 
            {monty.doors.map((door, i) => (
                <div onClick={monty.select(i)} key={i} className="door">
                    <p>{door ? 'Car' : 'Goat'}</p>
                </div>
            ))}
        </div>
    );
}

export default Doors;