function gereral (num1,num2,callback){


    console.log(callback(num1,num2))
}

const addition =(num1,num2)=>num1+num2
const multiplaying =(num1,num2)=>num1*num2
const substraction =(num1,num2)=>num1-num2
const division=(num1,num2)=>num1/num2


gereral(12,3,division)