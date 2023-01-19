const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks[0];
 };

 const createTask = async (task) => { 
    const { title} = task;
    const dateUTC = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const status = 'Pendente';

    const [newTask] = await connection.execute('INSERT INTO tasks (title, created_at, status) VALUES (?, ?, ?)', [title, dateUTC, status]);
    return {insertId: newTask.insertId};
 };



module.exports = {
    getAll,
    createTask,
};