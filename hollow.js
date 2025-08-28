let rows=7;
let line="";
for( let i=1;i<=rows;i++){
    for( let j=1;j<=rows-i;j++){
        line+=" ";
    }
    for(let k=1;k<=2*i-1;k++){
     
        if(i==1||i==rows||k==1||k==2*i-1){
            line+="*";
    }
       else{
        line+=" ";
       }
    }
   line+=("\n");
}
    console.log(line);