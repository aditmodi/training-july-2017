import React, {Component} from 'react';
import Input from './input.jsx';
import RadioBox from './radiobox.jsx';
import SelectBox from './select.jsx';
import TextArea from './textarea.jsx';


var details = ['First Name', 'Last Name', 'Phone', 'Email', 'Gender', 'Cars', 'Essay'];
var getDetails = ['firstname', 'lastname', 'phone', 'gender', 'cars', 'email', 'essay']

export default class Form extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.mounted = this.mounted.bind(this);
  }

  buffalo = (v) => {
    console.log('V: ',v.checked);
      if (v.checked == true)
        return v;
  }

  hello = (item) => {
    console.log(item.item);
    if (item.item == 'Gender'){
        return (<label>
          <RadioBox ref={el => this.gender = el}/>
        </label>)
      }
      else if (item.item == 'Cars') {
        return (<SelectBox inputRef={el => this.cars = el}/>)
      }
      else {
        if (item.item == 'Phone'){
          return (<Input type={"phone"} onChange = {this.isNumber} ref={el => this.phone = el}/>);
        }
        else if (item.item == 'First Name') {
          return (<Input type={"firstname"} onChange = {this.isAlpha} ref={el => this.firstname = el}/>)
        }
        else if (item.item == 'Last Name') {
          return (<Input type={"lastname"} onChange = {this.isAlpha} ref={el => this.lastname = el}/>)
        }
        else if (item.item == 'Email') {
          return (<Input type={"email"} onChange = {this.isEmail} ref={el => this.email = el}/>)
        }
        else{
            return (<Input type={"essay"} onChange = {this.handleChange} ref={el => this.essay = el}/>)
        }
      }
  }


  mounted(){
    getDetails.map((item) => {
      this.item;
    })
    // this.phone;
    // this.firstname;
    // this.lastname;
    // this.email;
    // this.essay;
    // this.cars;
    // this.gender;

    console.log("fname : ", this.firstname.state);
    console.log("phone : ", this.phone.state);
    console.log("cars : ", this.cars.state);
    console.log("gender : ", this.gender.state);
  }

  handleSubmit(event){
    // console.log("sumit called");
    // var flag = 1;
    // event.preventDefault();
    // getDetails.map((item) => {
    //   if(this.item.valid == false){
    //     flag = 0;
    //     break;
    //   }
    // });
    //
    // if (flag == 1){
    //   alert('Form submitted');
    // }
    // else{
    //   alert('Remove the errors');
    // }
    // // alert('Form submitted');

  }


  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        {
          details.map((item, index) => {
            return (
              <label key={index}>
                {item} -:{
                  this.hello({item})
                }
                <br/>

              </label>
            );
          })
        }
        <input type="submit" value="Submit" onClick={this.mounted}/>
      </form>
    )
  }
}
