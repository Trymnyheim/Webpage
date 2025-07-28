const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const host = '0.0.0.0';

app.use(cors({ origin: 'https://trymhnyheim.no' }));
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