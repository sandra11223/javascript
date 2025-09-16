let arr=['apple','orange','grapes','banana','kiwi']
let mf=1;
let k=0;
let item;
for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
            k++;
    if(mf<k)
    mf=k;
    item=arr[i];
    }
}
k=0;
console.log(item);
