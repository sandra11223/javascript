function Perfect(num){
    let sum=0;
    for(let i=0;i<=num;i++){
        if(num%i==0){
            sum+=i;
        }
    }
    return sum==num;
}
console.log(Perfect(6));
console.log(Perfect(12));
console.log(Perfect(24));


