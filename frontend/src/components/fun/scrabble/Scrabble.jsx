import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button'
import ScrabblePiece from './ScrabblePiece';
import ScrabbleResults from './ScrabbleResults.jsx';
import pieces from './pieces.json';
import Card from 'react-bootstrap/Card';
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
        let letters = "";
        selected.forEach((piece) => {
            letters += piece.letter;
        });
        console.log(letters);

        try {
            const res = await fetch(`http://localhost:3001/scrabble/search?letters=${letters}`, {
                method: 'GET',
            });

            // Check HTTP status
            if (!res.ok) {
                console.log(res.status);
                throw new Error(t('scrabble.no-connection'));
            }

            const data = await res.json();

            // Assuming your API returns { success: boolean, ... }
            if (!data.success) {
                throw new Error(t('scrabble.error'));
            }

            console.log(data);

            setResults(data);
        } catch (error) {
            setResults({ error });
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

            <Card className="bg-green-light">
                <Card.Title className="padding-top-sm">{t('scrabble.your-pieces')}</Card.Title>
                <div className="pieces-container margin-vertical">
                    {selected.map((piece, index) => (
                        <ScrabblePiece 
                            key={index} letter={piece.letter} value={piece.value} 
                            handleClick={() => deselect(index)} selected
                        />
                    ))}
                </div>
            </Card>
            <Button onClick={searchWord} disabled={isDisabled} >
                {t('scrabble.find-best')}
            </Button>
            <ScrabbleResults results={results} t={t} />
        </div>
    )
}

export default Scrabble;