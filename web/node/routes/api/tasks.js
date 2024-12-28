const express = require('express');
const router = express.Router();

const { getTasks, newList} = require('./skriveTilFil')

router.get('/dict', (req, res) => {
    getTasks()
    .then(tasksData => {
        res.json(tasksData);
    })
    .catch(error => {
        res.send(error);
    });
})

router.use(express.json());

router.post('/newlist', (req, res) => {
    const taskName = req.body.taskName;
    console.log('Received task list name:', taskName);
    newList(taskName)
    .then(taskName => {
        res.json({ message: `${taskName} has been added` });

    })
    .catch(error => {
        res.send(error);
    });
});

module.exports = router;