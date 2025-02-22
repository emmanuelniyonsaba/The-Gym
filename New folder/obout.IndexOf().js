let emmy =["emmanuel","niyonsaba","niyshimwe" ]
let index3 = emmy.indexOf("niyonsaba");
console.log(index3);
let numberarray = [3,5,7,9,7,3,45,36,7,5,77,75,85,97,90]
let newarray = numberarray.filter((hhh)=>{
    return hhh %2===0
})
console.log(newarray);

let listofelement =["noelaa","fabrice","gg","fhfjlah"];
let new1= listofelement.filter(eeee => eeee.length>5);
console.log(new1);
let uppercase =listofelement.map(names=>names.toUpperCase());
console.log(uppercase);