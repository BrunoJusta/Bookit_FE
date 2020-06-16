var express = require('express');
var app = express();
// var path = require('path');

app.use(express.static(__dirname + "/dist/"));
app.use("/assets", express.static(__dirname + '/assets'));

// viewed at based directory http://localhost:8080/
app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 8080);