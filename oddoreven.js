let arr=[2,3,6,7,9,12,14]
let even=0;
let odd=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        even++;
    }
        else{
            odd++;
        }
    }
console.log("even numbers:",even);
console.log("odd numbers:",odd);


