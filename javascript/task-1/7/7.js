class Unique{
  constructor(value){
    this.value=value;
  }
  compare(){
    let l=this.value.length;
    let c,flag;
    for (let i = 0; i < l; i++) {
      for (let j = i+1; j < l; j++) {
        if(this.value[i] == this.value[j]){
          flag=0;
          break;
        }
        else{
          flag=1;
        }
      }
      if(flag==1){
        document.write("unique character in entered string : "+this.value[i]+"</br>");
      }
    }
  }
}

function check(){
  let obj=new Unique(document.getElementById('text').value);
  obj.compare();
}
