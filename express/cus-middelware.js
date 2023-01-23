const express  = require("express");

const app = express();

//middelware
//best practice is to keep middelware in separate file
const logger = (req, res, next)=>{
   const method = req.method;
   const url = req.url;
   console.log(method, url);
   //next is used to pass control to next middel ware function/ function
   //if the current middel ware is not finishing the req res cycle
   next();
}
//middelware

app.get('/', logger, (req, res)=>{
   res.send("HOME");
})

app.listen(5500,()=>{
   console.log("server listening on port 5500");
})