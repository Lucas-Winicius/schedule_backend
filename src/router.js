const express = require("express");
const router = express();
const TaskModel = require('./models/task')

router.get("/", (req, res) => {
    const task = new TaskModel.TaskModel({
        name: 'Lucas',
        surname: 'Winicius',
        telephone: '+55(11)111111111',
        email: 'lucas@example.com',
        authorId: 'D08623263894',
    })
    
    task.save()
        .then(task => res.status(201).json(task))
        .catch(err => res.send(500).json(err))
});


module.exports = router;
