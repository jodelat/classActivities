var http = require("http");

var PORTONE = 7000;
var PORTTWO = 7500;
function handleRequest1(request, response){

  response.end("Your a javascript mastermind!");
}

function handleRequest2(request, response){

  response.end("Your a idiot");
}

var server = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server.listen(PORTONE, function(){

  console.log("listening on: http://localhost:%s", PORTONE);
});

server2.listen(PORTTWO, function(){

  console.log("listening on: http://localhost:%s", PORTTWO);
});
