'use strict'
var express = require('express'),posts=require('./mock/posts.json');
var app = express();

debugger;

app.get('/',function(req,res){
	res.send('<h1>Hi Jonny H Bomb Man</h1>');
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