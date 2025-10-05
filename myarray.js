function myFilter(myArray,callback){
    let sum=0;
    for(let i=0;i<myArray.length;i++){
        sum+=myArray[i];
    }
    let isEven=callback(sum);
    console.log("is sum even?"+isEven);
    return sum;
}
function checkEvenOdd(num){
    return num%2==0;
}
let myArray=[1,2,3,4,5];
let result=myFilter(myArray,checkEvenOdd);
console.log("sum of array=",result);
