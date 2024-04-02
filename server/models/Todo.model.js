const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min:2
    },
    description:{
        type: String,
        required: true,
        min:2
    }
}, {
    timestamps: true
})

const Todo = mongoose.model('Todo',todoSchema)

module.exports = Todo