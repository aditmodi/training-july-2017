import React, { Component } from 'react';
import Form from './form.jsx';
import { labels } from './form.jsx';
import Input from './input.jsx';
import RadioBox from './radiobox.jsx';
import SelectBox from './select.jsx';
import { Link } from 'react-router-dom';
import {PlayerStats} from '../api/stats.js';
import { createContainer } from 'meteor/react-meteor-data';
import { getDetails } from './form.jsx';

export default class Edit extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : '',
      phone : '',
      gender : '',
      age : '',
      height : '',
      weight : '',
      speciality : '',
      loading : true,
      valid : true,
      message : ''
    }

  }

  componentWillMount() {
    // this.findPlayerById(this.props.match.params.id);
    var identity = this.props.match.params.id;
    Meteor.call('list.fetch',identity,(err,data) => {
      console.log("data : ", data);
      if(err){
        console.error(err);
      }
      else{
        this.setState({
          name : data.name,
          phone : data.phone,
          gender : data.gender,
          age : data.age,
          height : data.height,
          weight : data.weight,
          speciality : data.speciality,
          loading : false,
          valid : true,
          message : ''
        });
        console.log("state : ", this.state);
      }
    });
  }

  componentDidMount(){
    console.log("DidMountCalled :");
    // console.log("DidMountCalled :", this.name.state.valid);
    // this.name.state.valid = Input.isAlpha(this.state.name);
    // this.phone.state.valid = Input.isNumber(this.state.phone);
    // this.age.state.valid = Input.isNumber(this.state.age);
    // this.height.state.valid = Input.isNumber(this.state.height);
    // this.weight.state.valid = Input.isNumber(this.state.weight);
    this.onChange;
  }


  hello = (item) => {
    console.log(item.item);
    if (item.item == 'Gender'){
        return (<label>
          <RadioBox value={this.state.gender} ref={el => this.gender = el}/>
        </label>)
      }
      else if (item.item == 'Speciality') {
        return (<SelectBox value={this.state.speciality} ref={el => this.speciality = el}/>)
      }
      else {
        if (item.item == 'Phone'){
          return (<Input type={"num"} value={this.state.phone} ref={el => this.phone = el}/>);
        }
        else if (item.item == 'Name') {
          return (<Input type={"name"} value={this.state.name}  ref={el => this.name = el}/>)
        }
        else if (item.item == 'Age') {
          return (<Input type={"num"} value={this.state.age} ref={el => this.age = el}/>)
        }
        else if (item.item == 'Height(in cm)') {
          return (<Input type={"num"} value={this.state.height} ref={el => this.height = el}/>)
        }
        else{
            return (<Input type={"num"} value={this.state.phone} ref={el => this.weight = el}/>)
        }
      }
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
    console.log('name : ', age);

    if (name.valid === true && age.valid === true && phone.valid === true && height.valid === true && weight.valid === true){
      alert('Form submitted');
      Meteor.call('list.update', name.value, phone.value, gender, age.value, height.value, weight.value, speciality);
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


  }

  render(){
    if(this.state.loading) {
      return <div>Loading</div>
    }
    return(
      <div>
        <Link to="/" title="Go Home">Go Home</Link><br/>
        <Link to="/listplayer" title="Go Home">Player List</Link><br/>
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
