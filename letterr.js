let a=['apple','orange','banana','apple','grapes','strawberry'];
for(let i=0;i<a.length;i++){
    let s=a[i];
    if(s[s.length-1]=='e'){
        console.log(a[i]);
    }
}