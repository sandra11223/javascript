let rows=7;
let line=" ";
for( let i=rows;i>=1;i--){
    for( let j=0;j<=rows-i;j++){
        line+=" ";
    }
    for(let k=1;k<=2*i-1;k++){
     
        if(i==rows||i==1||k==1||k==2*i-1){
            line+="*";
    }
       else{
        line+=" ";
       }
    }
   line+=("\n");
}

    console.log(line);
