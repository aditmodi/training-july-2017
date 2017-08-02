import React, {Component} from 'react';
import Input from './input.jsx';
import RadioBox from './radiobox.jsx';
import SelectBox from './select.jsx';
import { PlayerStats } from '../api/stats.js';
import { Link } from 'react-router-dom';

export const labels = ['Name', 'Age', 'Phone', 'Gender', 'Speciality', 'Height(in cm)', 'Weight(in kg)'];
export const getDetails = ['name', 'age', 'gender', 'phone', 'height', 'weight', 'speciality'];

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
        return (<SelectBox ref={el => this.speciality = el}/>)
      }
      else {
        if (item.item == 'Phone'){
          return (<Input type={"num"} onChange = {this.isNumber} ref={el => this.phone = el}/>);
        }
        else if (item.item == 'Name') {
          return (<Input type={"name"} onChange = {this.isAlpha} ref={el => this.name = el}/>)
        }
        else if (item.item == 'Age') {
          return (<Input type={"num"} onChange = {this.isNumber} ref={el => this.age = el}/>)
        }
        else if (item.item == 'Height(in cm)') {
          return (<Input type={"num"} onChange = {this.isNumber} ref={el => this.height = el}/>)
        }
        else{
            return (<Input type={"num"} onChange = {this.isNumber} ref={el => this.weight = el}/>)
        }
      }
  }
  mounted = () => {
    getDetails.map((item) => {
      this.item;
        console.log("map : ", this[item].state.value);
    })
    console.log("name : ", this.name.state.value);
    console.log("phone : ", this.phone.state.value);
    console.log("gender : ", this.gender.state.selectedOption);
    console.log("special : ", this.speciality.state.selectedOption);
    console.log("age : ", this.age.state.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let name = this.name.state;
    let phone = this.phone.state;
    let gender = this.gender.state.selectedOption;
    let speciality = this.speciality.state.selectedOption;
    let age = this.age.state;
    let height = this.height.state;
    let weight = this.weight.state;

    if (name.valid === true && age.valid === true && phone.valid === true && height.valid === true && weight.valid === true){
      alert('Form submitted');
      Meteor.call('list.insert', name.value, phone.value, gender, age.value, height.value, weight.value, speciality);
      // ReactDOM.findDOMNode(name).value = "";
    }
    else{
      getDetails.map((item) => {
        if(item != 'gender' && item !='speciality'){
          if(this[item].state.value.length == 0){
            this[item].onChange();
          }
        }
      });
    }

    getDetails.map((item) => {
      if(item != 'gender' && item != 'speciality'){
        this[item].resetValue();
      }
    })

  }


  render(){
    return(
      <div>
        <Link to="/" title="Go back">Go Home</Link><br/>
        <form onSubmit={this.handleSubmit}>
          {
            labels.map((item, index) => {
              return (
                <div className="form-group" key={index}>
                  <label>
                    {item} -:{
                      this.hello({item})
                    }
                  </label>
                </div>

              );
            })
          }
          <input className="btn btn-success" type="submit" value="Submit" onClick={this.mounted}/>
        </form>
      </div>

    )
  }
}
