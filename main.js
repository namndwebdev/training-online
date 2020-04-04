var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000


app.get('/', function(req, res){
  res.sendFile(__dirname + '/chat.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    // khi client disconnect. , tat tab chorme di
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });



    socket.on('chat message', function(msg){
        console.log('message: ' + msg);

        socket.broadcast.emit('server_reply', msg)
    });


});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
