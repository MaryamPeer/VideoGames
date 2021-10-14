const express = require('express');
const app = express();
const port = process.env.port || 3000;

let options = {};

app.use(express.static(__dirname));

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port);