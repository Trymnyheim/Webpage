
function Card({card, action}) {
    let src = "/imgs/cards/";
    if (card.number == 1)
        src += "ace_of";
    else if (card.number == 11)
        src += "jack_of";
    else if (card.number == 12)
        src += "queen_of";
    else if (card.number == 13)
        src += "king_of";
    else
        src += card.number + "_of";
    src += "_" + card.type + ".png";

    const clickCard = () => {
        action(card);
    }

    return (
        <div>
            <img style={{height: 150, margin: 10}} src={src} onClick={clickCard} />
        </div>
    )
}

export default Card;