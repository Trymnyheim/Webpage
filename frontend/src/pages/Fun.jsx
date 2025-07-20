import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Monty from '../components/fun/Monty/Monty.jsx';
import FunMenu from '../components/fun/FunMenu.jsx';
import '../components/fun/fun.css';

function Fun() {

    const funItems = [
        {title: 'Monty Hall', img: '/imgs/fun/monty/monty-thumb.svg', path: '/fun/monty'}
    ]

    return (
        <div>
            <Routes>
                <Route index element={<FunMenu funItems={funItems}/>} />
                <Route path="monty" element={
                    <>
                        <FunMenu funItems={funItems} isOverlay />
                        <Monty />
                    </>}
                />
            </Routes>
        </div>
    )
}

export default Fun;