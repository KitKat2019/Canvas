/*
let http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080, 'localhost', () => {
  console.log('Server running at on 8080');
});
*/
//let mysql = require('mysql');
const { color, log, yellow, red, green, cyan, cyanBright } = require('console-log-colors');
var app = require('http').createServer(handler);
var fs = require('fs');
const { Server } = require("socket.io");

const io = new Server(app);
app.listen(8080, 'localhost', () => {
  console.log(yellow.bold('******'),color('HTTP Server running on port:', 'white'),green.underline('8080'),yellow.bold('******'));;
});
function handler (req, res) {
var mylink='/index.html';
if(req.url.includes('.html')){
mylink=req.url;
}
if(req.url=="/admin.html"){
//mylink='/admin';
}
  fs.readFile(__dirname + mylink,
//fs.readFile(__dirname + req.url,
  function (err, data) {
    if (err) {
console.log('error Loading Page '+req.url);
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
if (data) {
//console.log('ok '+req.url);
}

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function(ws){
ws.on("hello", function(mousex,mousey,last_mousex,last_mousey,mousedown,usrcol){
//console.log('emit '+arg);
ws.broadcast.emit("drawing", mousex,mousey,last_mousex,last_mousey,mousedown,usrcol);
});
});
/*
// ansi colors
console.log(green('This is a green string!'));
console.log(color.green('This is a green string!'));
console.log(color('This is a green string!', 'green'));
*/
//ws.emit("drawing", tester);
//ws.broadcast.emit("userleave", ws.id);







