var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var tables = [
  {
  name: "tom",
  phone: "1234567890",
  email: "tom@tom.com",
  customerID: 1
  },
  {
  name: "matt",
  phone: "0987654321",
  email: "matty@mat.com",
  customerID: 2
  }];

  app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/all", function(req, res){
    console.log(res);
    res.json(tables);
  });

  app.post("/api/tables", function(req, res){
    var newcharacter= req.body;
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newcharacter);

    tables.push(newcharacter);

    res.json(newcharacter);

    console.log(tables);
  });

  app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
  });
