var formData = [
  {type:"text",name:"fName",label:"First Name",validate:{minLength:6,maxLength:15,allow:"alphabet"}},
  {type:"text",name:"lName",label:"Last Name",validate:{minLength:6,maxLength:15,allow:"alphabet"}},
  {type:"text",name:"phone",label:"Phone Number",validate:{maxLength:10,allow:"number"}},
  {type:"textarea",name:"about",label:"About",validate:{minLength:6,maxLength:150,allow:"any"}},
  {type:"text",name:"email",label:"Email",validate:{allow:"email"}},
  {type:"password",name:"password",label:"Password",validate:{minLength:6,maxLength:10,allow:"any"}}
];

class FormByJavascript {
  constructor() {

  }
  elements(){
    formData.forEach(function (formData) {
      let div = document.createElement('div');
      let textLabel = document.createTextNode(formData.label);
      div.appendChild(textLabel);

      let input = document.createElement('input');
      input.setAttribute('id',formData.name);
      input.setAttribute('type',formData.type);
      if(formData.validate.allow == "alphabet"){
        input.setAttribute('onkeypress','return FormByJavascript.isAlpha()');
      }
      if(formData.validate.allow == "number"){
        input.setAttribute('onkeypress','FormByJavascript.isNum(this.value)');
      }
      if(formData.validate.allow == "email"){
        input.setAttribute('onchange','FormByJavascript.isEmail(this)');
      }
      if(formData.validate.maxLength == 15){
        input.setAttribute('maxLength','15');
      }
      if(formData.validate.maxLength == 10){
        input.setAttribute('maxLength','10');
      }
      if(formData.validate.maxLength == 150){
        input.setAttribute('maxLength','150');
      }
      if(formData.validate.minLength == 6){
        input.setAttribute('onchange','FormByJavascript.minLen(this)');
      }
      div.appendChild(input);

      document.getElementById('myForm').appendChild(div);

    });
    let submit = document.createElement('input');
    submit.setAttribute('type','submit');
    submit.setAttribute('value','submit');
    submit.setAttribute('onclick','submitForm()');

    document.getElementById('myForm').appendChild(submit);
  }
  minLen(v){
    if(v.value.length < 6){
      alert("Length too short");
    }
  }
  isAlpha(){
    var charCode = event.keyCode;

    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8){
      return true;
    }
    else{
      alert('Alphabets only');
      return false;
    }
  }
  isNum(evt){
    let num = /^\d+$/;
    if(!num.test(evt)){
      alert('Only numbers');
    }
  }
  isEmail(v){
    var x = v.value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
      }
    }
}

FormByJavascript = new FormByJavascript();

function submitForm(){

}
