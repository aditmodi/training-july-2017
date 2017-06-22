class Numb{
  constructor(num){
    console.log(typeof num);
    this.num=num;
  }
  getCheck(){
    if(Number.isInteger(this.num) == true){
      if((this.num) % 2 == 1){
        alert("Number is odd");

      }
      else {
        alert("Number is even");
      }
    }
    else{
      alert("Number entered is not an integer");
    }
  }
}
function oddEven(){
  let obj=new Numb(Number(document.getElementById('number').value));
  obj.getCheck();
}
