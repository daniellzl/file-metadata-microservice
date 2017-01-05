// include necessary variables
var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

// if user sends GET request to home page
app.get('/', function (request, response) {
  response.end('<p>Submit a file to view its filesize.</p><form action="/get-file-size" method="post" enctype="multipart/form-data"><input type="file" name="file"><input type="submit"></form>');
});

// if user sends POST request to home page
app.post('/get-file-size', upload.single('file'), function (request, response) {
  // create object containing size of file
  var fileSizeObject = {
    size: request.file.size
  };
  // respond to request with size of file
  response.end(JSON.stringify(fileSizeObject));
});

// wait for connections
app.listen(process.env.PORT || 8080, function (request, response) {
  console.log('Listening for connections...');
});
