import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button'
import ScrabblePiece from './ScrabblePiece';
import ScrabbleResults from './ScrabbleResults.jsx';
import pieces from './pieces.json';
import CardContainer from '../../containers/CardContainer.jsx'
import './scrabble.css';


function Scrabble() {
    const { t, i18n } = useTranslation('games');
    const [piecesInUse, setPiecesInUse] = useState(i18n.language === 'en' ? pieces.general : [...pieces.general, ...pieces.norwegian]);
    const [selected, setSelected] = useState([]);
    const [language, setLanguage] = useState((i18n.language === 'en' ? 'en' : 'no'));
    const [isDisabled, setIsDisabled] = useState(false);
    const [results, setResults] = useState(null);

    const select = (key) => {
        setSelected([...selected, piecesInUse[key]]);
    }

    const deselect = (key) => {
        setSelected(selected.filter((_, i) => i !== key));
    }

    useEffect(() => {
        if (language === 'en') {
            setPiecesInUse(pieces.general);
        }
        else {
            setPiecesInUse([...pieces.general, ...pieces.norwegian]);
        }
    }, [language])

    useEffect(() => {
        setLanguage(i18n.language === 'en' ? 'en' : 'no');
    }, [i18n.language])

    useEffect(() => {
        setIsDisabled(selected.length === 0);
    }, [selected])

    const searchWord = async () => {
        try {
            const res = await fetch('', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({language, pieces: selected}),
            });

            if (!res.ok) {
                throw new Error(`Server error: ${res.status}`);
            }

            const data = await res.json();
            if (!data.success) {
                throw new Error("Failed when searching for solution");
            }
            setResults(data);
        } catch (error) {
            setResults({error})
        }
    }

    return (
        <div className="scrabble-container center">
            <h1>{t('scrabble.title')}</h1>
            <p>{t('scrabble.instructions')}</p>
            <div>
                <img src="/imgs/en_flag.png" onClick={() => setLanguage('en')} 
                    className={`flag${language === 'en' ? ' selected' : ''}`}
                />
                <img src="/imgs/no_flag.png" onClick={() => setLanguage('no')}
                    className={`flag${language === 'no' ? ' selected' : ''}`}
                />
            </div>
            <div className="pieces-container margin-vertical">
                {piecesInUse.map((piece, index) => (
                    <ScrabblePiece 
                        key={index} letter={piece.letter} value={piece.value} 
                        handleClick={() => select(index)} 
                    />
                ))}
            </div>

            <CardContainer title={t('scrabble.your-pieces')} colored>
                <div className="pieces-container margin-vertical">
                    {selected.map((piece, index) => (
                        <ScrabblePiece 
                            key={index} letter={piece.letter} value={piece.value} 
                            handleClick={() => deselect(index)} selected
                        />
                    ))}
                </div>
            </CardContainer>
            <Button onClick={searchWord} disabled={isDisabled} >
                {t('scrabble.find-best')}
            </Button>
            <ScrabbleResults results={results} />
        </div>
    )
}

export default Scrabble;