const express = require('express');
const { GetTasks, AddTask, DeleteTask } = require('../controllers/taskHandlers');
const TasksRouter = express.Router();

// Task Management API definitions
TasksRouter.get('/', GetTasks);
TasksRouter.post('/', AddTask);
TasksRouter.delete('/:id', DeleteTask);

module.exports = {
    TasksRouter
};