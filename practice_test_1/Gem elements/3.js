function createFields(value){
  for (var i = 0; i < value; i++) {
    $('#field').append("<input type='text' id='"+i+"_input' onkeypress = 'return lower(this.value)'></br>");
  }
  $('#field').append("<button type='button' onclick='checkGems()'>Check</button>");
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

function lower(value){
  let reg = /^[a-z]*$/;
  if (reg.test(value)) {
    return true;
  }
  else{
    alert('Only capital letters allowed');
    return false;
  }
}

function checkGems(){
  let flag ;
  let count = 0;
  let l = document.getElementById('0_input').value.length;
  let str = document.getElementById('0_input').value;
  for (var i = 0; i < l; i++) {
    console.log('str[i] : ', str[i]);
    for (var j = 1; j < document.getElementById('num').value; j++){
      let str2 = document.getElementById(j + '_input').value;
      for (var k = 0; k < str2.length; k++){
        console.log('str2[k] :', str2[k]);
        if (str[i] == str2[k]) {
          flag = 1;
          break;
        }
        else{
          flag = 0;
        }
      }
      console.log('flag : ',flag);
      console.log('----------');
      if(flag == 0){
        break;
      }
    }
    if (flag == 1){
      count++;
    }
  }
  document.getElementById('output').innerHTML = count;
}
