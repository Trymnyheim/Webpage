import { useTranslation } from "react-i18next";
import Carousel from '../components/carousel/Carousel.jsx';

function HomeApp() {

    const { t } = useTranslation('home');

    const elements = [
        {img: '/imgs/projects/webpage.png', title: 'GitHub for this webpage', handleClick: () => window.location.href = 'https://github.com/Trymnyheim/Webpage'},
        {img: '/imgs/projects/BF-webpage.png', title: 'Webpage for Banda Follo', handleClick: () => window.location.href = 'https://github.com/Trymnyheim/BandaFollo'},
        {img: '/imgs/projects/sudoku-crop.png', title: 'Sudoku Solver', handleClick: () => window.location.href = 'https://github.com/Trymnyheim/Sudoko_solver'}
    ]

    return (
        <>
            <div className="center" style={{marginTop: '24px'}}>
                <h1>{t('title')}</h1>
                <p>{t('text')}</p>

            </div>
            <div className="project-container center padding-vertical">
                <h2></h2>
                <Carousel elements={elements}/>
            </div>
        </>
    )
}

export default HomeApp;