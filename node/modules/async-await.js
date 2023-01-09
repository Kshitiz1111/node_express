// const amount = 12;

// (amount<10)? console.log("small number"): console.log("large number...");

const {readFile, writeFile} = require('fs').promises;

// const util = require('util');
// const readFilePromish = util.promisify(readFile);
// const writeFilePromish = util.promisify(writeFile);

const start = async()=>{
   try {
      const first = await readFile('content/join-async.txt','utf-8');
      await writeFile('content/second.txt',"this is promisify",{flag: 'a'});
      console.log(first);
   } catch (error) {
      console.log(error);
   }
}

start();

// const getText = (path)=>{
//    return new Promise((resolve, reject)=>{
   //       readFile(path, "utf-8",(err, result)=>{
      //          if(err){
         //             reject(err);
         //          }else{
//             resolve(result);
//          }
//       })
//    })
   
   // getText('content/join-async.txt').then(res=>console.log(res))
   // .catch(err=>console.log(err));
// }