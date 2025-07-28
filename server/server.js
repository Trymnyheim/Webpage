const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const host = 'localhost';

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const scrabbleRouter = require('./routes/scrabble/scrabbleRouter');
app.use('/scrabble', scrabbleRouter);

const emailRouter = require('./routes/emailRouter')
app.use('/email', emailRouter);

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
})


/*
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database.db');
*/