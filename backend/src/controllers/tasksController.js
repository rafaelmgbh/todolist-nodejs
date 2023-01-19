const taskModel = require('../models/tasksModel');



const getAll = async  (request,response) => { 
    const tasks = await  taskModel.getAll();
    return response.status(200).json(tasks);
};

const createTask = async (request, response) => {
    const createdTask = await taskModel.createTask(request.body);
    return response.status(201).json(createdTask);
};
module.exports = {
    getAll,
    createTask
}