import React, {Component} from 'react';

export default class SelectBox extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <select type="cars" ref = {this.props.inputRef} required>
        <option value="volvo">Volvo</option>
        <option value="bmw">BMW</option>
        <option value="honda">Honda</option>
        <option value="maruti">Maruti</option>
      </select>
    )
  }
}
