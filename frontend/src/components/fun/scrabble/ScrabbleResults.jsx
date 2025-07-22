function ScrabbleResults({ results }) {
    if (!results) return null;

    if (results.error) {
        return <p style={{ color: "red" }}>{results.error.message || "An error occurred"}</p>;
    }

    return (
        <div>
            {results.words?.map((word, i) => (
                <p key={i}>{word}</p>
            )) || <p>No words found.</p>}
        </div>
    );
}


export default ScrabbleResults;