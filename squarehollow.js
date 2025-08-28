let rows = 5;
let line = "";

for (let i=1; i<=rows; i++) {
    for (let j=1; j<=rows;j++) {
        if(i==1||j==rows||j==1||j==rows){
           line += "*"; 
        }
            else{
              line+=" ";
            }
            }
            line+="\n";
        }
  console.log(line);