import './containers.css';
import { useState } from 'react';
import { useTranslation } from "react-i18next";

function ReadMore({content}) {
    const {t} = useTranslation('common');
    const [readMore, setReadMore] = useState(false);

    const toggleReadMore = () => {
        setReadMore(!readMore);
    }

    if (!content) {
        return (<></>)
    }

    return (
        <div className="read-more-wrapper">
            <div className={`read-more-container ${readMore ? 'readmore' : ''}`}>
                <div className="read-more-content">{content}</div>
            </div>
            <button className="read-more-toggle text-success" onClick={toggleReadMore}>
                {readMore ? t('read-less') : t('read-more')}
                <span style={{margin: '0 6px'}}></span>
                {!readMore && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0"/></svg>}
                {readMore && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16"><path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0"/></svg>}
            </button>
        </div>
    )
}

export default ReadMore;