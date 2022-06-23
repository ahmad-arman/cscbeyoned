'use strict' ;
const socket = io();

const messagesAdmin = io('/messagesAdmin');

socket.on('connect',()=>{
    console.log('socket connected ' , socket.id)
})

messagesAdmin.on('connect',()=>{
    console.log('message connected ' , messagesAdmin.id)
    messagesAdmin.emit('chat message','POSTjjjjjjjjjjjjjjjj')
    
   
})