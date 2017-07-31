import React, {Component} from 'react';

export default class Input extends Component{
  constructor(props){
    super(props);
    this.state = {value : '', valid: false, message:''};
  }

    handleChange = (event) => {
      // this.setState({ value : event.target.value, valid : true, message : '' });
      return true;
    }

    isNumber = (event) => {
      var reg = /^[0-9]+$/;
      if (!reg.test(event.target.value)) {
        return false;
      } else {
        return true;
      }
    }
    isAlpha = (event) => {
      console.log("called");
      var reg = /^[A-z]+$/;
      if (!reg.test(event.target.value)) {
        return false;
      } else {
        return true;
      }
    }
    // isEmail = (event) => {
    //   console.log(event.target.value);
    //   var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   if (!reg.test(event.target.value)) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }

    onChange = (event) => {
      console.log("from method : ", this.props.type);
      switch(this.props.type){
        case "name"  : this.setState({ value : event.target.value, valid : this.isAlpha(event), message : this.state.valid==true?'':'Invalid' });
                      break;
        case "age"  : this.setState({ value : event.target.value, valid : this.isNumber(event), message : this.state.valid==true?'':'Invalid' });
                      break;
        case "phone" : this.setState({ value : event.target.value, valid : this.isNumber(event), message : this.state.valid==true?'':'Invalid' });
                      break;
        case "height" : this.setState({ value : event.target.value, valid : this.isNumber(event), message : this.state.valid==true?'':'Invalid' });
                      break;
        case "weight" : this.setState({ value : event.target.value, valid : this.isNumber(event), message : this.state.valid==true?'':'Invalid' });
                      break;
        default      : this.setState({ value : event.target.value, valid : this.handleChange(event), message : this.state.valid==true?'':'Invalid' });
                      break;

      }
    }
  render(){
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.onChange} required/>
        {this.state.message}
      </div>
    );
  }
}
