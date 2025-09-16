function LargerThan(arr,num)
{
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]> num){
            result.push(arr[i]);
        }
   }
   return result;
}
let numbers=[2,6,8,12,23,15];
console.log(LargerThan(numbers,2));
