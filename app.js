const express    = require("express"),
	  app        = express(),
	  bodyParser = require("body-parser"),
	  mongoose   = require("mongoose");

const todoRoutes = require("./routes/todos.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));


app.get('/', (req, res)=>{
	res.sendFile("index.html")
});

app.use('/api/todos', todoRoutes);




// -------------------------------
app.listen(3000, ()=>{
	console.log("Connected");
});