
function Card({element, isEdge}) {

    return(
        <div className={`card-container ${isEdge ? 'card-edge' : ''}`}>
            <img className="" src={element.img} />
            {!isEdge && 
                <div className="card-text">
                    <p>{element.title}</p>
                </div>
            }
        </div>
    )
}

export default Card;