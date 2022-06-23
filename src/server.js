
'use script ';

const  express =require('express');
const  cors = require('cors');
const path = require('path');
const  router =require('../src/routes/routs');
const  app = express();
const events = require('./socket/event');

const http = require('http');
const server =http.createServer(app);
const socket =require('socket.io');
const io = socket(server,{
    cors:{
        origin:{origin:'*'},
        methods:['GET', 'POST'],
    }
})


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'../public')));


app.use('/api/v1',router);
app.use('/',(req, res, next)=>{
    res.send('the server is working') 
})

io.on('connection',(socket)=>{
    console.log(`User Connection :${socket.id} `)

    socket.on("send_message",(data)=>{

        console.log(data);
        
        socket.broadcast.emit("receive_message",data);
    })

});

// let messagesAdmin = io.of('/messagesAdmin');

// messagesAdmin.on('connection',()=>{
//     require('./socket/messagesAdmin')
// })

// events.on('messagesAdmin',(data)=>{
//     console.log('message admin added :::::;;');
//     messagesAdmin.emit('message',data)
// })

module.exports = {
    server:app,
    start:(port)=>{
        server.listen(port||3000,()=>{
            console.log(`server listening on port ${port}`)
        })
    },
   // messagesAdmin,

}
