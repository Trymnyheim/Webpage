import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FunMenu from '../components/fun/FunMenu.jsx';
import Monty from '../components/fun/monty/Monty.jsx';
import Scrabble from '../components/fun/scrabble/Scrabble.jsx';
import '../components/fun/fun.css';

function Fun() {

    //TODO: create scrabble thumbnail

    const funItems = [
        {
            title: 'Monty Hall', 
            img: '/imgs/fun/monty/monty-thumb.svg',
            path: '/fun/monty'
        },
        {
            title: 'Scrabble Solver', 
            img: '/imgs/fun/monty/monty-thumb.svg',
            path: '/fun/scrabble'
        }
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
                <Route path="scrabble" element={
                    <>
                        <FunMenu funItems={funItems} isOverlay />
                        <Scrabble />
                    </>}
                />
            </Routes>
        </div>
    )
}

export default Fun;