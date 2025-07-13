import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function FunMenu({funItems, isOverlay}) {
    
    const [show, setShow] = useState(false);

    const toogleShow = () => {
        if (isOverlay)
        setShow(!show);
    }

    const back = {
        title: 'Back to Fun',
        img: '/imgs/fun/back.svg',
        path: '/fun'
    }

    return (
        <div onClick={toogleShow} className={`fun-menu ${isOverlay ? "fun-overlay-active" : ""}`}>
            {isOverlay &&
            <Button variant="success">Fun Menu</Button>
            }
            <div className={`fun-card-container ${show ? "fun-overlay" : ""}`}>
                {isOverlay &&
                    <FunCard funItem={back} isBack/>
                }
                {funItems.map((funItem, index) => (
                    <FunCard key={index} funItem={funItem} />
                ))}
            </div>
        </div>
    )
}

function FunCard({funItem}) {
    return (
        <Link to={funItem.path}>
            <Card className="fun-card center bg-success" style={{ width: '16rem' }}>
                <div className="fun-card-title">
                    <Card.Title className="margin">{funItem.title}</Card.Title>
                </div>
                <Card.Img src={funItem.img}/>
            </Card>
        </Link>
    )
}

export default FunMenu;