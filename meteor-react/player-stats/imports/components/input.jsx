import React, {Component} from 'react';


export default class Input extends Component{
  constructor(props){
    super(props);
    this.state = {
      value : props.value,
      valid: false,
      message:''
    };
  }

  // componentWillReceiveProps(nextProps){
  //   console.log("yoyooyyooy");
  //   this.setState({valid : true});
  // }

    handleChange = (event) => {
      // this.setState({ value : event.target.value, valid : true, message : '' });
      return true;
    }

    resetValue = () => {
      this.setState({
        value : '', valid: false, message:''
      })
    }

    isNumber = (event) => {
      var reg = /^[0-9]+$/;
      if (!reg.test(event)) {
        return false;
      } else {
        return true;
      }
    }
    isAlpha = (event) => {
      console.log("called");
      var reg = /^[A-z]+$/;
      if (!reg.test(event)) {
        return false;
      } else {
        return true;
      }
    }

    onChange = () => {
      let value = this.input.value;
      let valid;
      if (this.props.type == "name"){
        valid = this.isAlpha(value)
      }
      else if (this.props.type == "num"){
        valid = this.isNumber(value)
      }
      else{
        valid = this.handleChange(value)
      }
      let message = valid == true ? '' : value.length == 0 ? '*required' : 'invalid';
      console.log("from method : ", this.props.type);
      switch(this.props.type){
        case "name"  : this.setState({ value : value, valid : valid, message : message });
                      break;
        case "num"  : this.setState({ value : value, valid : valid, message : message });
                      break;
        default      : this.setState({ value : value, valid : valid, message :message });
                      break;

      }
    }
  render(){
    return (
      <div>
        <input className="form-control" ref = {input => this.input=input} type="text" value={this.state.value} onChange={this.onChange} onBlur = {this.onChange}/>
        <span className="errors" style={{color:'red'}}>{this.state.message}</span>
      </div>
    );
  }
}
