const mongoose     = require("mongoose"),
	  todoSchema = new mongoose.Schema({
		  name: {
			  type: String,
			  required: "name can't be blank!"
		  },
		  completed: {
			  type: Boolean,
			  default: false
		},
		  date: {
			  type: Date,
			  default: Date.now()
		  }
	  });


module.exports =mongoose.model("Todo", todoSchema);