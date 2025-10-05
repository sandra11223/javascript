let int=setInterval(()=>{
    console.log("hello");
    
},1000)
setTimeout(()=>{
    clearInterval(int);
},5000)
console.log("one");
console.log("two");

