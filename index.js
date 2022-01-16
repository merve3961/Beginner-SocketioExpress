const express=require('express')
const app=express()
const server=require('http').createServer(app)
const io=require('socket.io')(server)


 app.set('view engine','ejs')

app.get('/home',(req,res)=> {
    res.render('home')
})

server.listen(3010,() =>{
    console.log('Server running...');
}
)

 io.on('connection',(socket)=> {
     console.log("User connected:" + socket.id);

socket.on('message',(data)=> {
  socket.broadcast.emit('message',data)
//    // console.log(data);n
 });

})
