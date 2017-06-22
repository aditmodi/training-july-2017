class Guess{
  constructor(num){
    this.num=num;
  }
  compare(){
    let n=Math.floor((Math.random()*10)+1);
    document.write("value entered by you : "+this.num+"</br>");
    document.write("random value chosen by computer is : "+n+"</br>");

    if(n==this.num){
      document.write("Value matched");
    }
    else {
      document.write("Value not matched");
    }
  }
}

function match(){
  let obj=new Guess(Number(document.getElementById('num').value));
  obj.compare();
}
