var express = require("express");

//Used to set up routes
var app = express();

//Set up ejs file extension
app.set("view engine", "ejs");

//EJS directory serving code
app.use(express.static("public"));

//Main Routes
app.get("/", function(req, res){
res.send("whats up man?")
});

//EJS pages 
app.get("/homepage", function(req, res){
	res.render("homepage");
});

// Connect to a server
app.set('port', process.env.PORT || 8000 );

var server = app.listen(app.get('port'), function() {
  console.log('You are listening on port ' + app.get('port'));
});