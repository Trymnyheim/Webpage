import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState, useEffect, useMemo } from 'react';

function ScrabbleResults({ results, t }) {
    // ✅ Early exits for errors or no data
    if (!results) return null;
    if (results.error) {
        return (
            <p style={{ color: "red" }}>
                {results.error.message || "An error occurred"}
            </p>
        );
    }

    const words = results.words || [];
    const totalPages = Math.ceil(words.length / 50);

    const [page, setPage] = useState(1);

    // ✅ Only depend on page + words.length (not the entire results object)
    const { first, last } = useMemo(() => {
        const first = (page - 1) * 50;
        const last = Math.min(first + 49, words.length - 1);
        return { first, last };
    }, [page, words.length]);

    // ✅ Slice once per page change
    const table = useMemo(() => words.slice(first, last + 1), [words, first, last]);

    // ✅ If the data changes and current page is out of range, reset page
    useEffect(() => {
        if (page > totalPages) {
            setPage(1);
        }
    }, [page, totalPages]);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>{t('scrabble.rank')}</th>
                        <th>{t('scrabble.words')}</th>
                        <th>{t('scrabble.points')}</th>
                    </tr>
                </thead>
                <tbody>
                    {words.length > 0 ? (
                        table.map((word, i) => (
                            <tr key={first + i}>
                                <td>{first + i + 1}</td>
                                <td>{word.word}</td>
                                <td>{word.points}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3}>{t('no-words')}</td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {words.length > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                    <Button
                        disabled={page === 1}
                        onClick={() => setPage((p) => p - 1)}
                    >
                        {t('previous')}
                    </Button>
                    <span>
                        {t('page')} {page} / {totalPages}
                    </span>
                    <Button
                        disabled={page === totalPages}
                        onClick={() => setPage((p) => p + 1)}
                    >
                        {t('next')}
                    </Button>
                </div>
            )}
        </div>
    );
}

export default ScrabbleResults;
