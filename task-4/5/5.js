class Current{
  constructor(){}
  getCurrent(){
    let d=new Date();
    let weekday = new Array(7);
    weekday[0]="sunday";
    weekday[1]="monday";
    weekday[2]="tuesday";
    weekday[3]="wednesday";
    weekday[4]="thursday";
    weekday[5]="friday";
    weekday[6]="saturday";

    document.write("Today is " + weekday[d.getDay()]+'</br>');
    document.write("Current time is: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()+"</br>");
    document.write(d.getMonth()+"-"+d.getDate()+"-"+d.getYear());

  }
}
function getData(){
  let obj=new Current();
  obj.getCurrent();
}
