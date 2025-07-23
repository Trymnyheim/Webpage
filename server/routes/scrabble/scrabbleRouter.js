const express = require('express');
const scrabbleRouter = express.Router();
const { ScrabbleSolver } = require('./ScrabbleSolver');

const scrabbleSolverNO = new ScrabbleSolver('./routes/scrabble/files/nsf2023.txt');

// const scrabbleSolverEN = new

// USAGE: 'URL/search?letters=*abc*'
scrabbleRouter.get('/search', async (req, res) => {
    try {
        const letters = req.query.letters;
        if (!letters) {
            return res.status(400).send({ error: 'Missing letters parameter' });
        }
        if (letters.length > 10)
            return res.status(400).send({error: 'Amount of letters can not exceed 10'});
        const words = await scrabbleSolverNO.findWordsAsync(letters);
        res.send({success: true, words});
    } catch (err) {
        res.status(500).send({ error: err.message || err });
    }
});


module.exports = scrabbleRouter;