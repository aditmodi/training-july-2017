import React, {Component} from 'react';
import Input from './input.jsx';
import Checkbox from './checkbox.jsx';

var details = ['First Name', 'Last Name', 'Phone', 'Email', 'Gender'];

export default class Form extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hello = (item) => {
    console.log(item.item);
    if (item.item == 'Gender'){
        console.log("vbnvnnvnv");
        return (<label>
          Male -:
          <Checkbox/>
        {/* </label>
        <label> */}
          Female -:
          <Checkbox/>
        </label>)
      }
      else {
        return (<Input/>)
      }
  }

  handleSubmit(event){
    alert('Form submitted');
    event.preventDefault();
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
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}
