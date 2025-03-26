function general(text,callback1,callback2){
    return callback1(callback2(text))
}
function forcall1(text){

    const z=text.toUpperCase();
    console.log(z);
}
function forcall2(text){
    const  reversedone =text.split(" ").map(a=>a.split("").reverse().join("")).join("")
    console.log(reversedone);
}
general("Hello word",forcall1,forcall2)
