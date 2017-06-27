function number(){
  let n = document.getElementById('num').value;
  let p = document.getElementById('ip').value;
  document.getElementById('disNum').innerHTML = n.substr(0,3) + "-" + n.substr(3,3) + "-" + n.substr(6);
  document.getElementById('disIP').innerHTML = p.substr(0,3) + "." + p.substr(3,3) + "." + p.substr(6,3) + "." + p.substr(9);
}
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        alert('Entered value is not a number')
        return false;
    }
    return true;
}
