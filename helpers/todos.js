const db = require("../models"),
	  bodyParser = require("body-parser");



exports.getTodos = (req, res)=>{
	db.Todo.find()
	.then(todos =>{
		res.json(todos);
	})
	.catch(err =>{
		res.send(err);
	});
}

exports.createTodo = (req, res)=>{
	console.log(req.body);
	db.Todo.create(req.body)
	.then(newTodo =>{
		res.status(201).json(newTodo);
	})
	.catch(err =>{
		res.send(err);
	});
}

exports.getTodo = (req, res)=>{
	db.Todo.findById(req.params.todoID)
	.then(foundTodo =>{
		res.json(foundTodo);
	})
	.catch(err =>{
		res.send(err);
	});
}

exports.editTodo = (req, res)=>{
	db.Todo.findOneAndUpdate({_id: req.params.todoID}, req.body, {new: true})
	.then(foundTodo =>{
		res.json(foundTodo);
	})
	.catch(err =>{
		res.send(err);
	});
}

exports.deleteTodo = (req, res)=>{
	db.Todo.findOneAndDelete({_id: req.params.todoID})
	.then(()=>{
		res.json({message: 'deleted succeccfully'});
	})
	.catch(err =>{
		res.send(err);
	});
}

module.exports = exports;