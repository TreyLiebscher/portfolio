var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/styles", express.static(__dirname));
// app.use("/images", express.static(__dirname + '/images'));
app.use("/scripts", express.static(__dirname + '/scripts'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'views/index.html'));
});

app.get('/lightShow', function (req, res) {
  res.sendFile(path.join(__dirname + '/lightShow.html'));
});

app.get('/wordTool', function (req, res) {
  res.sendFile(path.join(__dirname + '/wordTool.html'));
});

app.listen(process.env.PORT || 8080);
