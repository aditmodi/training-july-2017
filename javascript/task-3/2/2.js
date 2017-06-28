class Validity{
  constructor(){  }
  lettersOnly(){
    var charCode = event.keyCode;

    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8){
      return true;
    }
    else{
      alert('Aplhabets only');
      return false;
    }
  }
  isNumber(evt){
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      alert('Entered value is not a number')
        return false;
    }
    return true;
  }
  validateKey(field,nextField){
    if(field.value.length >= 2){
      nextField.focus();
    }
  }
  minLen(v){
    if(v.value.length < 6){
      document.getElementById(v.id + "_error").innerHTML = "too short";
    }
    else{
      document.getElementById(v.id + "_error").innerHTML = "";
    }
  }

  calcAge(day, month, year){
    let currentDay = new Date();
    let birthday = new Date(year, month, day);
    let diff = currentDay.getFullYear() - birthday.getFullYear();
    document.getElementById('age').innerHTML = "Age - : " + diff;
  }

  checkPass(v){
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(!v.match(paswd)){
      document.getElementById('pass_error').innerHTML = "Password should include atleast one letter and one special character";
    }
    else{
      document.getElementById('pass_error').innerHTML = "";

    }
  }
}


Validity = new Validity();

function submitForm(){
  if ((document.getElementById('fname_error').value = "") && (document.getElementById('lname_error').value = "") && (document.getElementById('pass_error').value = "") ){
    return true;
  }
  else{
    alert('correct the errors');
    return false;
  }
}
