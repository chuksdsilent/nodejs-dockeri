var express = require("express");
var app = express();
app.get("/", function (req, res) {
  res.send("This is a nodejs app!");
});
app.listen(7000, function () {
  console.log("App listening on port 7000!");
});
