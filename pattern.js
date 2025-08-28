let rows=5;
let line=" ";
for( let i=0;i<=rows;i++){
    for( let j=0;j<=rows-i;j++){
        line+=" ";
    }
    for(let k=1;k<=i;k++){
     line+=" *";
    }
   line+=("\n");
}
    console.log(line);
