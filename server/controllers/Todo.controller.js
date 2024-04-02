const mongoose = require('mongoose');
const Todo = require('../models/Todo.model');

const addTodo = async (req, res) => {
    try {
        const {name,description} = req.body;
        const todo = new Todo({
            name,
            description
        })
        await todo.save()
        res.status(201).json({message:"Todo added successfully",todo})
    } catch (error) {
        console.log("Error adding todo")
        throw new Error(error)
    }
}

const updateTodo = async (req, res) => {
    try {
        
        const {name,description} = req.body;
        const todo = await Todo.findOneAndUpdate({_id:req.params.id},{name,description},{new:true})
        res.status(201).json({message:"Todo updated successfully",todo})
    } catch (error) {
        console.log("Error updating todo")
        throw new Error(error)
    }
}


module.exports = {addTodo,updateTodo}