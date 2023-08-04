var http = require('http');

//create server object
http.createServer(function (req, res) {
  res.write("Hello World !"); //write a response to the client
  res.end();//end response
}).listen(8080);//the server listens on port 8080

//the function passed into the create server method will
// execute when anyone tries to access the computer on port 8080