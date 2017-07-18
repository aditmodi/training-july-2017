function createFields(value){
  for (var i = 0; i < value; i++) {
    $('#field').append("<input type='text' id='"+i+"_input' onkeypress = 'return lower(this.value)'></br>");
  }
  $('#field').append("<button type='button' onclick='checkPalindrome()'>Check</button>");
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

function checkPalindrome(){
  let n = document.getElementById('num').value;
  let pos = -1;
  let flag=0;
  for (var i = 0; i < n; i++) {
    let str = document.getElementById(i + '_input').value;
    let str2 = str.split("").reverse().join("");
    console.log('str2 : ',str2);
    for (var j = 0; j < str.length; j++){
      if (str != str2){
        console.log('j :',j);
        console.log('str[j] :',str[j]);
        pos = str.search(str[j]);
        console.log('sudopos : ',pos);
      }
    }
    console.log('pos : ',pos);
    $('#output').append(pos + ", ");
    pos = -1;
    $('#output').append("</br>");
    console.log('-------');
  }
}
