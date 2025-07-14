import './containers.css';
import { useState } from 'react';

function ReadMore({content}) {
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
            <button className="read-more-toggle" onClick={() => setReadMore(!readMore)}>
                {readMore ? 'Read less' : 'Read more'}
            </button>
        </div>
    )
}

export default ReadMore;