// events
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',(a,b)=>{
   console.log('data received!'+a+b)
});

customEmitter.emit('response',"sucess","full");
