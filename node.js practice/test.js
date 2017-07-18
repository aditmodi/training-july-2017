function placeOrder(orderNumber){
  console.log("Customer order : ", orderNumber);
  cookAndDelievered(orderNumber);
}
function cookAndDelievered(num){
  console.log("Delivered food order : ",num);
}

placeOrder(1);
placeOrder(2);
placeOrder(3);
