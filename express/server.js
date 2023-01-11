const express = require('express');
const app = express()
const path = require('path');

//all the static files stays in public folder
//setup static and middleware
app.use(express.static('./public'));

// app.get('/',(req, res)=>{
//    res.sendFile(path.resolve(__dirname,'./navbar/index.html'))
// });

app.all('*',(req, res)=>{res.status(404).send("page not found!!!")})

app.listen(5000,()=>{
   console.log("server is listening on port: 5000")
})