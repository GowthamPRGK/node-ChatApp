const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log('New user connected'); 
    
    socket.emit('greetUser',{
        from:'Admin',
        text:'welcome to the chat app',
        createdAt: new Date().getTime()
    });
    
    socket.broadcast.emit('greetUser',{
        from:'Admin',
        text:'New User joined',
        createdAt: new Date().getTime()
    })

    socket.on('createMessage',(newMessage)=>{
        console.log('createMessage',newMessage);
        io.emit('newMessage',{
            from: newMessage.from,
            text: newMessage.text,
            createdAt: new Date().getTime()
        });
    });


    socket.on('disconnect',(socket)=>{
        console.log('Disconnected from the server');    
    });
});



server.listen(port,()=>{
    console.log(`server is up on port ${port}`);
})