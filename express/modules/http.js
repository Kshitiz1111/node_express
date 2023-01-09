const { readFileSync } = require("fs");
const http = require("http");
const port = 443;

//get all pages
const home_page = readFileSync('./navbar/index.html');
const home_style_css = readFileSync('./navbar/style.css');
const home_script_js = readFileSync('./navbar/script.js');
// const bg_image = readFileSync('https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80');
const about_page = readFileSync('./navbar/index.html');
const contact_page = readFileSync('./navbar/index.html');

const server = http.createServer();

server.on("request",(req,res,err)=>{
   const url = req.url;

   if(err){
      console.log("server failed to start")
      console.log("ERROR: " + err);
      return;
   }
   console.log("server running on port"+port);
   switch (url) {
      case '/':
         res.writeHead(200,{'contentType': 'text/html'});
         res.write(home_page);
         res.end();
         break;
      case '/style.css':
         res.writeHead(200,{'contentType': 'text/css'});
         res.write(home_style_css);
         res.end();
         break;
      // case '/https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80':
      //    res.writeHead(200,{'contentType': 'text/html'});
      //    res.write(bg_image);
      //    res.end();
      //    break;
      case '/script.js':
         res.writeHead(200,{'contentType': 'text/javascript'});
         res.write(home_script_js);
         res.end();
         break;
      case '/about':
         res.writeHead(200,{'contentType': 'text/html'});
         res.write(about_page);
         res.end();
         break;
      case '/contact':
         res.writeHead(200,{'contentType': 'text/html'});
         res.write(contact_page);
         res.end();
         break;
   
      default:
         res.writeHead(404,{'contentType': 'text/html'});
         res.write("<h1>Page not found</h1>");
         res.end();
         break;
   }

 

   
})

server.listen(port);