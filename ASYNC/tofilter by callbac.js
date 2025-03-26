function general1(array,callback){
    console.log(callback(array));
}

const froeven=(array)=>{
    let result= array.filter(num=>num% 2 ==0)
    console.log(result);
}
const numgrat5=(array)=>{
    let numbers=array.filter(a=>a>5)
    console.log(numbers);
}

general1([1,3,4,5,6,7,8,9],froeven)
general1([1,3,4,5,6,7,8,9],numgrat5)