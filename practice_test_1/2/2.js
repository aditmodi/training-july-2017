function createFields(value){
  for (var i = 0; i < value; i++) {
    $('#field').append("<input type='text' id='"+i+"_input' onkeypress = 'return upper(this.value)'></br>");
  }
  $('#field').append("<button type='button' onclick='checkConsec()'>Check</button>");
}
function isNum(value){
  let reg = /^[0-9]*$/;
  if (reg.test(value)) {
    return true;
  }
  else{
    alert('Entered value is not a number');
    return false;
  }
}

function upper(value){
  let reg = /^[A-Z]*$/;
  if (reg.test(value)) {
    return true;
  }
  else{
    alert('Only capital letters allowed');
    return false;
  }
}

function checkConsec(){
  value = document.getElementById('num').value;
  for (var i = 0; i < value; i++) {
    let str = document.getElementById(i+'_input').value;
    l = str.length;
    let del = 0;
    for (var j = 0; j < l; j++) {
      if (str[j] == str[j+1]){
        del++;
      }
    }
    $('#output').append('<div>Output - : '+del+'</div>');
  }
}
