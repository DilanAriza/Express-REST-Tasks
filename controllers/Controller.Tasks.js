const Task = require('./../models/Task');
const helpers = require('./Controller.helpers');
const { param } = require('../app');

const validParams = ['title', 'description'];

function FindTaskId(req, res, next) {
    Task.findOne({ '_id': req.params.id })
        .then(task => {
            req.task = task;
            req.mainObj = task;
            next();
        }).catch(err => {
            next(err);
        })
}

function GetOneTask(req, res) {
    res.json({
        error: false,
        content: {
            task: req.task
        }
    });
}

function GetAllTasks(req, res) {
    Task.find({}).then(tasks => {
        res.json({
            error: false,
            content: {
                tasks: tasks
            }
        });
    }).catch(err => {
        res.json({
            error: true,
            content: {
                errorContent: err
            }
        })
    });
}



function CreateTask(req, res) {
    const params = helpers.paramsBuilder(validParams, req.body);
    console.log(params);
    Task.create(params)
        .then(doc => {
            res.json({
                error: false,
                content: {
                    taksCreated: doc
                }
            })
        }).catch(err => {
            res.json({
                error: true,
                content: {
                    errorContent: err
                }
            })
        })
}


function UpdateTask(req, res) {
    const params = helpers.paramsBuilder(validParams, req.body);

    req.task = Object.assign(req.task, params);

    req.task.save()
        .then(doc => {
            res.json({
                error: false,
                content: {
                    taskUpdate: doc
                }
            })
        }).catch(err => {
            res.json({
                error: true,
                content: {
                    errorContent: err
                }
            })
        })

}

function DeleteTask(req, res) {
    req.task.remove()
        .then(doc => {
            res.json({
                error: false,
                content: {
                    taskDelete: doc
                }
            })
        }).catch(err => {
            res.json({
                error: true,
                content: {
                    errorContent: err
                }
            })
        })
}




module.exports = {
    GetAllTasks,
    CreateTask,
    GetOneTask,
    FindTaskId,
    DeleteTask,
    UpdateTask
}