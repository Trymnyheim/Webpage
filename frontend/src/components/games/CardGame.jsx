import CardStack from "./CardStack.js";
import Card from "./Card.jsx";
import {useState} from 'react';

function CardGame() {
    const [stack, setStack] = useState(new CardStack())
    const [hand, setHand] = useState(() => {
        const newHand = [];
        for (let i = 0; i < 5; i++ )
            newHand.push(stack.pickCard());
        return newHand;
    });

    const action = (card) => {
        const newCard = stack.pickCard();  
        if (newCard !== null) {
            const newHand = hand.map((handCard) => 
                handCard === card ? newCard : handCard
            );
            setHand(newHand);
        } else {
            console.log("Stack is empty.");
            const newHand = hand.filter((handCard) => handCard != card);
            setHand(newHand);
        }
    };


    return (
        <>
            <h1>Card Game</h1>
            <div style={{display: "flex"}}>
                {hand.map((card, i) => (
                    <Card key={i} card={card} action={action} />
                ))}
            </div>
        </>
    )
}

export default CardGame;