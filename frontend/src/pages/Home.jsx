import { useTranslation } from "react-i18next";
import Panorama from '../components/panorama/Panorama.jsx'

function HomeApp() {

    const { t } = useTranslation('home');

    return (
        <div className="center" style={{marginTop: '24px'}}>
            <h1>{t('title')}</h1>
            <p>{t('text')}</p>
            <Panorama />
        </div>
    )
}

export default HomeApp;