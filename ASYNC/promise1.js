const { rejects } = require("assert");
const { resolve } = require("path");

const promis1 = new Promise((resolve,rejects)=>{
setTimeout(()=>{

    let values=false
    if(values===true){

        resolve("sucess!");
    }else{
        rejects(new Error("failed"))
    }
    
},3000);

})
promis1.then(ful=>console.log(ful)).catch(err=>console.log(err))
