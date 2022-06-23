

const {messagesAdmin}=  require('../server');

messagesAdmin.on('connection',(socket)=>{
   console.log('the admin is connected on messages admin server ',socket.id)

   messagesAdmin.on('send_message',(msg)=>{
      console.log("🚀 ~ file: messagesAdmin.js ~ line 8 ~ messagesAdmin.on ~ data", msg)
   
   }) ;
   messagesAdmin.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
    });
   // messagesAdmin.on('disconnected',()=>{
   //    console.log('admin disconnected')
   // })
});
