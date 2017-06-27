class NthElement{
  constructor (n){
    this.n = n;
  }
  getNumber(){
    let arr = [3,2,4,6,7,8,3,1,9,5];
    document.getElementById('write').innerHTML="Element on the " + this.n + " position is " + arr[this.n-1];
  }
}

function nElement(){
  let obj = new NthElement(document.getElementById('demo').value);
  obj.getNumber();
}
