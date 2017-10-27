const express = require('express');
const app = express();
const path = require('path');
const http = require('http')
const server = http.createServer(app);

app.get('/', function(req,res) {
    res.sendfile('public/index.html');
});
app.use('/static-scripts', express.static(__dirname + '/node_modules'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/data', express.static(__dirname + '/public/data'));

server.listen(process.env.PORT || 3000, () => {
    console.log('server listens to port 3000');
});