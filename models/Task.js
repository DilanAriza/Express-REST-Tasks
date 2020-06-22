const mongoose = require('mongoose');

let taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        default: 'Not have description'
    }
})

let Task = mongoose.model('Task', taskSchema);

module.exports = Task;