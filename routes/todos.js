const express = require("express"),
	  router  = express.Router(),
	  db      = require("../models"),
	  helper  = require("../helpers/todos.js");

router.route('/')
 .get(helper.getTodos)
 .post(helper.createTodo)

router.route('/:todoID')
 .get(helper.getTodo)
 .put(helper.editTodo)
 .delete(helper.deleteTodo)


module.exports = router;