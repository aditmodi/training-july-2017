var flag ;
function checkPangram(){
  console.log('fucntion called');
  var text = document.getElementById('input').value;
  console.log(text);
  checkSpecial(text);
  if ( (text.length < 1000) && flag == 1){
    var pangram = /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i;
    var tolower = text.toLowerCase();
    console.log(tolower);
    if ( pangram.test(tolower) ){
      alert('It is a PANGRAM');
    }
    else{
      alert('NOT a PANGRAM');
    }
  }
}
function checkSpecial(text){
  console.log('child function called');
  var space = /[^a-zA-Z ]/;
  if (!space.test(text)){
    flag = 1;
  }
  else{
    alert('No special characters allowed');
    flag = 0;
  }
}
