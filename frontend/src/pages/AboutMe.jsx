import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import EducationContainer from '../components/education/EducationContainer';
import ReadMore from '../components/containers/ReadMore.jsx'

function AboutMe() {

    const {t} = useTranslation('aboutme');

    // const name = `${t('name.first')} ${t('name.middle')} ${t('name.last')}`;

    const container = { display: 'flex', flexWrap: 'wrap' };
    const item = { flex: '1 1 400px'};

    return (
        <Routes>
            <Route index element={
                <>
                    <div>
                        <h2>{t('personal')}</h2>
                        <p>{t('personal-text')}</p>
                        <h2>{t('professional.title')}</h2>
                        <p>{t('professional.IT.about')}</p>
                        <p>{t('professional.IT.experience')}</p>
                    </div>
                    <div style={container}>
                        <div style={item}>                    
                            <ReadMore content={
                                <>
                                    <h2>{t('professional.IT.title')}</h2>
                                    <p>{t('professional.IT.about')}</p>
                                    <p>{t('professional.IT.experience')}</p>
                                </>
                            }/>
                        </div>
                        <img
                            src="/imgs/me/us-sq.jpg"
                            style={item}
                        />
                    </div>
                    <div style={container}>
                        <div style={item}>                    
                            <ReadMore content={
                                <>
                                    <h2>{t('professional.music.title')}</h2>
                                    <p>{t('professional.music.about')}</p>
                                    <p>{t('professional.music.experience')}</p>
                                </>
                            }/>
                        </div>
                        <img
                            src="/imgs/me/us-sq.jpg"
                            style={item}
                        />
                    </div>
                </>
            } />
            <Route path="education" element={
                <EducationContainer />
            }/>
        </Routes>
    )
}

export default AboutMe;