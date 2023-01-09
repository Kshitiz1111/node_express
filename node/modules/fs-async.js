//Asynchronously reading file
const {readFile, writeFile} = require('fs');

readFile('../content/first.txt','utf-8',(err, result)=>{
   if(err){
      console.log(err)
      return;
   }
   const first = result;
   readFile('../content/second.txt','utf-8',(err, result)=>{
      if(err){
         console.log(err)
         return;
      }
      const second = result;
      writeFile("../content/join-async.txt"," there",{flag: "a"},(err)=>{
         if(err){
            console.log(err);
            return;
         }
         const join_async = readFile("../content/join-async.txt","utf-8",(err, result)=>{
            (err)? console.log(err): console.log(result);
         })
      })
   })
})
// const second = readFile('../content/second.txt','utf-8')


// writeFile("../content/join.txt", `hey there`,{flag: 'a'})
// const join = readFile("../content/join.txt","utf-8")
// console.log(join);