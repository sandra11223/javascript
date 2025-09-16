let ar=[65,78,54,67];
let t;
for(let i=0;i<ar.length-1;i++)
{
    for( let j=0;j<ar.length-i-1;j++)
    {
        if(ar[j]>ar[j+1])
    {
         t=ar[j];
         ar[j]=ar[j+1];
         ar[j+1]=t;
        }
    }
     console.log(ar);
}
console.log("second largest:",ar[ar.length-2]);

  

