let str="madam";
let reversed=str.split("").reverse().join("");
console.log(str);
console.log(reversed);
let flag;
for(let i=0;i<str.length;i++)
{
    if(str[i]==reversed[i])
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