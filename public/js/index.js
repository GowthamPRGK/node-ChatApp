var socket = io();

socket.on('connect',function (){    
    console.log('connected to server');   
    socket.emit('createMessage',{from:'hello@dfds.com',text: 'helloooo'});   
});

socket.on('newMessage',function(msg){
    console.log('newMessage',msg);    
});

socket.on('disconnect',function (){
    console.log('Disconnected from the server');    
});