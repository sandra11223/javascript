const person={fname:"john",lname:"doe",age:25};
let txt="";
for(let x in person){
    txt +=person[x]+ " ";
    console.log(txt);
    
}

