function Primenos(num,i=2){
    if(num%i==0)return false;
    if(i*i>num)return true;
    return Primenos(i,i+1);
 }
console.log(Primenos(9));
console.log(Primenos(10));

   