import React, {Component} from 'react';
import Input from './input.jsx';
import RadioBox from './radiobox.jsx';
import SelectBox from './select.jsx';
import { PlayerStats } from '../api/stats.js';

var labels = ['Name', 'Age', 'Phone', 'Gender', 'Speciality', 'Height(in cm)', 'Weight(in kg)'];
var getDetails = ['name', 'age', 'gender', 'special', 'height', 'weight'];

export default class Form extends Component{
  constructor(props){
    super(props);
  }

  hello = (item) => {
    console.log(item.item);
    if (item.item == 'Gender'){
        return (<label>
          <RadioBox ref={el => this.gender = el}/>
        </label>)
      }
      else if (item.item == 'Speciality') {
        return (<SelectBox inputRef={el => this.special = el}/>)
      }
      else {
        if (item.item == 'Phone'){
          return (<Input type={"phone"} onChange = {this.isNumber} ref={el => this.phone = el}/>);
        }
        else if (item.item == 'Name') {
          return (<Input type={"name"} onChange = {this.isAlpha} ref={el => this.name = el}/>)
        }
        else if (item.item == 'Age') {
          return (<Input type={"age"} onChange = {this.isNumber} ref={el => this.age = el}/>)
        }
        else if (item.item == 'Height(in cm)') {
          return (<Input type={"height"} onChange = {this.isNumber} ref={el => this.height = el}/>)
        }
        else{
            return (<Input type={"weight"} onChange = {this.isNumber} ref={el => this.weight = el}/>)
        }
      }
  }
  mounted = () => {
    getDetails.map((item) => {
      this.item;
    })
    console.log("name : ", this.name.state.value);
    console.log("phone : ", this.phone.state);
    console.log("cars : ", this.special);
    console.log("gender : ", this.gender.state.selectedOption);
    console.log("age : ", this.age.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let name = this.name.state.value;
    let phone = this.phone.state.value;
    let gender = this.gender.state.selectedOption;
    let age = this.age.state.value;
    let height = this.height.state.value;
    let weight = this.weight.state.value;

    Meteor.call('list.insert', name, phone, gender, age, height, weight);

  }


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        {
          labels.map((item, index) => {
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
