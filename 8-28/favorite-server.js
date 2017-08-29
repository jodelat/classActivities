var url = require("url");

var http = require("http");

var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function(){

console.log("listening on: http://localhost:%s", PORT);


});

function handleRequest(req, res){
  var urlParts = url.parse(req.url);

  switch (urlParts.pathname) {
  case "/":
    displayHome(urlParts.pathname, req, res);
    break;
  case "/food":
    displayFood(urlParts.pathname, req, res);
    break;
  case "/movie":
    displayMovie(urlParts.pathname, req, res);
    break;
  case "/framework":
    displayFramework(urlParts.pathname, req, res);
    break;
  default:
    console.log("error");
}
}

function displayHome(url, req, res){

  fs.readFile(__dirname + "/index.html", function(err, data){

    res.end(data);
  });
}

function displayFood(url, req, res){
  fs.readFile(__dirname + "/food.html", function(err, data){

    res.end(data);
  });
}

function displayMovie(url, req, res){
  fs.readFile(__dirname + "/movie.html", function(err, data){

    res.end(data);
  });
}

function displayFramework(url, req, res){
  fs.readFile(__dirname + "/framework.html", function(err, data){

    res.end(data);
  });
}
