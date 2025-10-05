let str="malayalam";
let start=0;
let end=str.length-1;
let ispal=true;
while(start<end){
    if(str[start]!==str[end]){
        ispal=false;
        break;
    }
   start++;
   end--;
}
if(ispal){
    console.log("prime");
    
}
else{
    console.log("not prime");
    
}