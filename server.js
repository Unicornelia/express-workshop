var express = require('express');
var app = express();
var formidable = require('express-formidable');
var fs = require('fs');

app.use(express.static('public'));
app.use(formidable());

app.post('/create-post', function(req, res) {

  fs.readFile(__dirname + '/data/posts.json', function(error, file) {
    console.log(file.toString());
    var parsedFile = JSON.parse(file);
    parsedFile.blogpost[Date.now()] = req.fields.blogpost
    fs.writeFile(__dirname + '/data/posts.json', JSON.stringify(parsedFile), function(error, file) {
      console.log(parsedFile);
    });
  });
  res.redirect('/');
});

app.get('/get-posts', function(req, res) {
  fs.readFile(__dirname + '/data/posts.json', function(error, result) {
    res.send(JSON.parse(result));
  });
});

app.get('/posts/:postId', function(req, res) {
  res.send('post id: ' + req.params.postId);
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});
