const taskModel = require('../models/tasksModel');



const getAll = async  (request,response) => { 
    const tasks = await  taskModel.getAll();
    return response.status(200).json(tasks);
};

const createTask = async (request, response) => {
    const createdTask = await taskModel.createTask(request.body);
    return response.status(201).json(createdTask);
};

const deleteTask = async (request, response) => {
    const { id } = request.params;
    const deletedTask = await taskModel.deleteTask(id);
    return response.status(200).json(deletedTask);
};

const updatedTask = async (request, response) => {
    const { id } = request.params;
    const updatedTask = await taskModel.updateTask(id, request.body);
    return response.status(200).json(updatedTask);
};


module.exports = {
    getAll,
    createTask,
    deleteTask,
    updatedTask
}

