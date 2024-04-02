const express = require('express');
const router = express.Router();
const {addTodo,updateTodo} = require('../controllers/Todo.controller')

router.route('/add-todo').post(addTodo)
router.route('/update-todo/:id').put(updateTodo)
// router.route('/add-todo').post()
// router.route('/add-todo').post()
// router.route('/add-todo').post()


module.exports = router