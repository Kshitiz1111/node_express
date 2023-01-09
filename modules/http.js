const http = require('http');

const server = http.createServer((req, res)=>{
   if(req.url === '/'){
      res.end("home page");
   }
   if(req.url === "/about"){
      res.end("about page");
   }
   res.end("page not found");
   
   
})

server.listen(5000);