class Sunday{
  constructor(){}
  getData(){
    for(var i=2014;i<2050;i++){
      let d=new Date(i,0,1);
      if(d.getDay() == 0){
        document.write("1st jan is sunday in year "+ i +"</br>");
      }
    }
  }
}

function data(){
  let obj=new Sunday();
  obj.getData();
}
