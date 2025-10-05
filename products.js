let products = [
  {pid: 100, pName: 'apple', band: '5g', price: 120000, display: 'led'},
  {pid: 101, pName: 'samsaung', band: '5g', price: 45000, display: 'led'},
  {pid: 102, pName: 'blackberry', band: '4g', price: 50000, display: 'led'},
  {pid: 103, pName: 'nokia', band: '3g', price: 1200, display: 'lcd'},
  {pid: 104, pName: 'motorola', band: '4g', price: 10000, display: 'lcd'}
];
// products.forEach((item)=>{
//     console.log(item.pName);
    
// })
// let lcdProducts=products.filter(item=>item.display=='lcd');
// console.log(lcdProducts);
// 
// let Price=products.filter(item=>item.price<50000);
// console.log(Price);
// let Products=products.reduce((max,item)=>item.price>max.price?item:max);
// console.log(Products);
let Products = products.reduce((low,item) => item.price<low.price?item:low);
console.log(Products);