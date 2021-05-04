$(document).ready(()=>{
	$.getJSON("/api/todos")
	.then(addTodos)
	.catch(err =>{
		alert(err);
	});
	
	$("#todoInput").keypress(event =>{
		if(event.which == 13){
			createTodo();
		}
	});
	
	$(".list").on("click", "span" ,(e)=>{
		e.stopPropagation();
		removeTodo($(e.target).parent());
	});
	
	$(".list").on("click", "li" ,(e)=>{
		// console.log(this);
		updateTodo($(e.target));
	});
	
});



// FUNCTIONS HERE

addTodos = (todos)=>{
	todos.forEach(todo =>{ addTodo(todo); });
}


addTodo = (todo)=>{
	let foundTodo = $("<li class='task'>"+ todo.name +"<span>X</span></li>");
	
	// console.log(todo._id);
	foundTodo.data('id', todo._id);
	foundTodo.data('completed', todo.completed);
	// console.log(foundTodo.data('id'));
	if(todo.completed){
		foundTodo.addClass("done");
	}
		
	$(".list").append(foundTodo);
	console.log(foundTodo);
}


createTodo = ()=>{
	let input = $("#todoInput").val();
	$.post("/api/todos", {name: input})
	.then(newTodo =>{ 
		$("#todoInput").val('');
		addTodo(newTodo); 
	})
	.catch(err =>{
		alert(err);
	});
}

removeTodo = (todo)=>{
	console.log(todo);
	let id  = todo.data('id');
	let delUrl = '/api/todos/'+id; 
	
	// console.log(id);
	
	$.ajax({
		method: 'DELETE',
		url: delUrl 
	})
	.then(data =>{
		todo.remove();	
	})
}

updateTodo = (todo) =>{
	let id         = todo.data('id');
	let updateUrl  = '/api/todos/'+id;
	let isDone     = !todo.data("completed");
	let updateData = {completed: isDone};
	
	 $.ajax({
		method: 'PUT',
		url: updateUrl,
		data: updateData
	})
	.then(data =>{
		todo.toggleClass("done");
		todo.data("completed", isDone); 
	})
}

