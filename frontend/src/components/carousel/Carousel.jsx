import './Carousel.css';
import Card from './Card.jsx';
import { useState, useRef } from 'react';

function Carousel({elements}) {

    const startX = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevIndex = (currentIndex - 1 + elements.length) % elements.length;
    const nextIndex = (currentIndex + 1) % elements.length;

    const goNext = (next) => {
        setCurrentIndex((prev) => (prev + next + elements.length) % elements.length);
    }

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (!startX.current) return;
        const endX = e.changedTouches[0].clientX;
        const deltaX = endX - startX.current;

        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                goNext(-1); // swipe right
            } else {
                goNext(1); // swipe left
            }
        }

        startX.current = null;
    };

    return (
        <div className="carousel-wrapper">
        <button className="nav-button left" onClick={() => goNext(-1)}>〈</button>
        <div className="carousel-container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <Card element={elements[prevIndex]} isEdge />
            <Card element={elements[currentIndex]} />
            <Card element={elements[nextIndex]} isEdge />
        </div>
        <button className="nav-button right" onClick={() => goNext(1)}>〉</button>
        </div>  
    )
}

export default Carousel;