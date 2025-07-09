const express = require('express')
const app = express()
const cors = require('cors');


app.use(cors());

//Test av API, må fjernes
app.get('/api/taskTest', (req, res) => {
    res.json({title: 'TestItem', desc: 'Description', date: '1997-01-01', comp: '0'})
})

const tasksRouter = require('./routes/api/tasks');

app.use('/routes/api', tasksRouter);

app.listen(3000)