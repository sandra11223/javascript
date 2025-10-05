const numbers=[12,7,8,30,20,32,44];
let evenCount=0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        evenCount++;
    }
}
console.log(`Number of even numbers: ${evenCount}`);

