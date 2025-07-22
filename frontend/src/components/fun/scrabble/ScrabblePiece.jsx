
function ScrabblePiece( { letter, value, handleClick, selected} ) {

    return (
        <div className={`piece ${selected ? 'selected' : 'normal'}`} onClick={handleClick}>
            <span className="letter">{letter}</span> 
            <span className="value">{value}</span>
        </div>
    )
}

export default ScrabblePiece;