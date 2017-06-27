class Calculate{
  constructor(day,month,year){
    this.day = day;
    this.month = month;
    this.year = year;
  }
  getDifference(){
    let d = new Date();
    let d1 = new Date(this.year, this.month-1, this.day);
    let d2 = (d - d1)/(1000 * 60 * 60 *24);
    document.write("Its been " + d2 + " days");
  }
}

function difference(){
  let obj = new Calculate(document.getElementById('day').value, document.getElementById('month').value, document.getElementById('year').value);
  obj.getDifference();
}
