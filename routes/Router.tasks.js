var express = require('express');

var router = express.Router();

const controllerTasks = require('../controllers/Controller.Tasks');

router.route('/')
    //Get all tasks
    .get(controllerTasks.GetAllTasks)
    //Create a Task
    .post(controllerTasks.CreateTask)

router.route('/:id')
    //Get one Task
    .get(
        controllerTasks.FindTaskId,
        controllerTasks.GetOneTask
    )
    .delete(
        controllerTasks.FindTaskId,
        controllerTasks.DeleteTask
    )
    .put(
        controllerTasks.FindTaskId,
        controllerTasks.UpdateTask
    )




module.exports = router;