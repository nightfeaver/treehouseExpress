'use strict'
var express = require('express'),posts=require('./mock/posts.json');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');



app.get('/',function(req,res){
	res.render('index')
});

app.get('/blog/:title?',function(req, res) {
	var title=req.params.title;
	if(title===undefined) {
		res.send('Page is under construction');
		res.status(503);

	} else {
	var post=posts[title];
	res.send(post);
	}
})

app.listen(3000,console.log('The front end server is running on port 3000'));