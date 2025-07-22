
function Card({element, isEdge}) {

    return(
        <div className={`carousel-card${isEdge ? ' card-edge' : ''}${element.handleClick ? ' clickable' : ''}`}
            onClick={element?.handleClick}
        >
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