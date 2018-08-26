const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log('New user connected'); 
    
    socket.emit('greetUser',generateMessage('Admin','Welcome to the chat'));
    
    socket.broadcast.emit('greetUser',generateMessage('Admin','New user connected'));

    socket.on('createMessage',(newMessage)=>{
        console.log('createMessage',newMessage);
        io.emit('newMessage',generateMessage(newMessage.from,newMessage.text));
    });


    socket.on('disconnect',(socket)=>{
        console.log('Disconnected from the server');    
    });
});



server.listen(port,()=>{
    console.log(`server is up on port ${port}`);
})