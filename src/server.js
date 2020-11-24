const express = require('express');
const app = express();
const http = require('http');
const path = require('path');

const server = http.createServer(app);
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  console.log("wwwwwwwwwwwwww")
 res.status(200).send(path.join(__dirname + '/src/index.html'));
});

server.listen(port, () => {
 console.log(`Server running at port ${port}`);
});