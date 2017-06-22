class Arithmetic{
  constructor(num1,num2){
    this.num1=num1;
    this.num2=num2;
  }
  Sum(){
    let sum = this.num1 + this.num2;
    alert('Sum is '+ sum);
  }
  Diff(){
    let diff = this.num1 - this.num2;
    alert('Difference is '+ diff);
  }
  Prod(){
    let prod = this.num1 * this.num2;
    alert('Product is '+ prod);
  }
  Div(){
    let div = this.num1 / this.num2;
    alert('Division is '+ div);
  }
}

function calcSum(){
  let obj1 = new Arithmetic(Number(document.getElementById('fNum').value),Number(document.getElementById('sNum').value));
  obj1.Sum();
}
function calcDiff(){
  let obj2 = new Arithmetic(document.getElementById('fNum').value,document.getElementById('sNum').value);
  obj2.Diff();
}
function calcProd(){
  let obj3 = new Arithmetic(document.getElementById('fNum').value,document.getElementById('sNum').value);
  obj3.Prod();
}
function calcDiv(){
  let obj4 = new Arithmetic(document.getElementById('fNum').value,document.getElementById('sNum').value);
  obj4.Div();
}
