const tasksRouter = require('express').Router();
const {
    getAllTasks,
    getSingleTask,
    storeOneTask,
    updateOneTask,
    deleteTask,
} = require('../../controller/tasks/tasks');

tasksRouter.route('/').get(getAllTasks).post(storeOneTask);
tasksRouter.route('/:taskID').
get(getSingleTask).
patch(updateOneTask).
delete(deleteTask);

module.exports = {tasksRouter};