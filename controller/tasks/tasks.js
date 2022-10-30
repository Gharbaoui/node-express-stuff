const Task = require('../../models/task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch(err) {
        res.status(500).send(`we could not ge all tasks`);
    }
};

const getSingleTask = async (req, res) => {
    try {
        let task = await Task.findById(req.params.taskID);
        if (!task)
            task = {msg: `no task was found with the id: ${req.params.taskID}`};
        res.status(200).json(task);
    } catch (err) { 
        res.status(500).send(`we could not find the task by this id ${req.params.taskID}`);
    }
};

const storeOneTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task});
    } catch(err) {
        res.status(500).send(`failed to store`);
    }
};

const updateOneTask = async (req, res) => {``
    try {
        await Task.updateOne({_id: req.params.taskID}, {name : req.body.name});
        res.status(200).json(newTask);
    } catch (err) {
        res.status(500).send(`we could not update the task ${req.params.taskID}`);
    }
};

const deleteTask = async (req, res) => {
    try {
        await Task.deleteOne({_id: req.params.taskID});
        res.status(204).send(`resource by the id ${req.params.taskID} deleted successfuly`);
    } catch (err) {
        res.status(500).send(`we could not remove the task ${req.params.taskID}`);
    }
};


// this is just for testing so almost no checks are done
module.exports = {
    getAllTasks,
    getSingleTask,
    storeOneTask,
    updateOneTask,
    deleteTask,
};