let orders = [
  {oid: 1, customer: "John", amount: 2500, status: "delivered"},
  {oid: 2, customer: "Alice", amount: 800, status: "pending"},
  {oid: 3, customer: "Bob", amount: 1200, status: "delivered"},
  {oid: 4, customer: "Charlie", amount: 5000, status: "cancelled"},
  {oid: 5, customer: "David", amount: 1500, status: "pending"}
];
// var k=orders.filter((item)=>{
//   return(item.status=="pending")
// })
// console.log(k);
//   var k=orders.filter(order=>order.amount>2000);
//   console.log(k);
//   let k=orders.reduce((sum,o)=>o.status=="delievered"?sum+o.amount:sum,0);
//   console.log(k);
// let Sort=[orders].sort((a,b)=>a.amount-b.amount);
// console.log(Sort);
// let Pending=orders.filter(o=>o.status=="pending").length;
// console.log(Pending);
// let Order=orders.some(o=>o.amount>10000);
// console.log(Order);
// let Customer=orders.map(o=>({customer:o.customer,amount:o.amount}));
// console.log(Customer);
// let Customer=orders.find(o=>o.status="cancelled");
// console.log(Customer);
let Avg=orders.reduce((sum,o)=>sum +o.amount, 0)/orders.length;
console.log(Avg);
    

  