class SumPrime{
  constructor(){  }
  calcSum(){
    let sum=1, flag=1;
    for (let i = 2; i <= 999; i++) {
      for (let j = 2; j <= i/2; j++) {
        if(i%j == 0){
          flag=0;
          break;
        }
        else{
          flag=1;
        }
      }
      if(flag==1){
        sum+=i;
      }
    }
    document.write("Sum of prime numbers from 1 to 999 is "+sum);
  }
}

function sum(){
  let obj = new SumPrime();
  obj.calcSum();
}
