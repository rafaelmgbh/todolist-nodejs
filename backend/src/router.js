const express = require('express');
const tasksController = require('./controllers/tasksController');
const router = express.Router();
const tasksMiddleware = require('./middlewares/tasksMiddlewares');

router.get('/tasks', tasksController.getAll)

router.post('/tasks', tasksMiddleware.validateBody, tasksController.createTask)

router.delete('/tasks/:id', tasksController.deleteTask)

module.exports = router;