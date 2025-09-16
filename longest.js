let str="helloooo world";
let w=str.split(" ");
let lw="";
for(let i=0;i<w.length;i++){
    if(w[i].length>lw.length){
        lw=w[i];
    }
}
console.log(lw);
