const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `you must provide a name`],
        trim: true,
        maxlength: [20, `length should be less than 20 chars`]
    },
    completed: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('Task', taskSchema);