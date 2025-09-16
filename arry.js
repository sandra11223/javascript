let arr=[0, 1, 0, 3, 12];
let count=0
for(let i=0;  i<arr.length;i++){
if(arr[i]==0){
arr.splice(i,1);
count++;
}
}
for(let i=0;i<count;i++){
    arr.push(0);
}
console.log(arr);
