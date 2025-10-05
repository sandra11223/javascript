let limit=parseInt(("enter a limit:"));
let sum=0;
for(let i=0;i<=limit;i++){
    if(i%2!=0){
        sum+=i;
    }
}
console.log("sum of odd numbers="+ sum);
