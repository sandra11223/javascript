let arr=['a','b','c','b','a'];
let b=[...arr];
console.log(arr);
b.reverse();
console.log(b);
let flag;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]==b[i])
    {
        flag=1;
    }
    else
    {
        flag=0;
    }
}
if(flag==1)
{
    console.log("palindrome");
}
else
{
    console.log("not palindrome");
}