import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect, useRef } from 'react';

function FunMenu({ funItems, isOverlay }) {
    const [show, setShow] = useState(false);
    const menuRef = useRef(null);

    const toggleShow = () => {
        if (isOverlay) setShow(!show);
    };

    // Close overlay if click outside fun-menu
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                show
            ) {
                setShow(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [show]);

    const back = {
        title: 'Back to Fun',
        img: '/imgs/fun/back.svg',
        path: '/fun',
    };

    return (
        <div
            ref={menuRef}
            onClick={toggleShow}
            className={`fun-menu ${isOverlay ? 'fun-overlay-active' : ''}`}
        >
            {isOverlay && <Button variant="success">Fun Menu</Button>}
            <div className={`fun-card-container ${show ? 'fun-overlay' : ''}`}>
                {isOverlay && <FunCard funItem={back} isBack />}
                {funItems.map((funItem, index) => (
                    <FunCard key={index} funItem={funItem} />
                ))}
            </div>
        </div>
    );
}

function FunCard({ funItem, isBack }) {
    return (
        <Link to={funItem.path}>
            <Card className="fun-card center bg-success" style={{ width: '16rem' }}>
                <div className="fun-card-title">
                    <Card.Title className="margin">{funItem.title}</Card.Title>
                </div>
                <Card.Img src={funItem.img} className={isBack ? 'back-img' : ''} />
            </Card>
        </Link>
    );
}

export default FunMenu;
