var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();


var PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



require(path.join(__dirname, '../friend-finder2/app/routing/apiroutes.js'))(app);
require(path.join(__dirname, '../friend-finder2/app/routing/htmlRoutes.js'))(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});