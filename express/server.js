const express = require('express');
const app = express()
const path = require('path');
const {products, people} = require('./data');

//all the static files stays in public folder
//setup static and middleware
app.use(express.static('./public'));

// app.get('/',(req, res)=>{
//    res.sendFile(path.resolve(__dirname,'./navbar/index.html'))
// });
app.get("/api/:id",(req, res)=>{
   const{id} = req.params;

   res.status(200).send("hello"+id);
})
//query search
app.get("/api/v1/search",(req, res)=>{
   const {search, limit} = req.query;
   let sortedProducts = [...products];
   if(search){
      sortedProducts = sortedProducts.filter((product)=>product.name.startsWith(search));
   }
   if(limit){
      sortedProducts = sortedProducts.slice(0,Number(limit));
   }
   res.status(200).json(sortedProducts);
})

app.all('*',(req, res)=>{res.status(404).send("page not found!!!")})

app.listen(5000,()=>{
   console.log("server is listening on port: 5000")
})