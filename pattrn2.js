let rows=4;
let num=1;
let line="";
for(let i=1;i<=rows;i++){
for(let j=1;j<=i;j++){
   line+=num+"\t";
   num++;
}
line+="\n";
}
console.log(line);
