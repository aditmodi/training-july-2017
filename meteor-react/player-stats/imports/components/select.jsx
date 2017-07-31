import React, {Component} from 'react';

export default class SelectBox extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <select type="Speciality" required>
        <option value="batsman" ref = {this.props.inputRef}>Batsman</option>
        <option value="bowler" ref = {this.props.inputRef}>Bowler</option>
        <option value="fielder" ref = {this.props.inputRef}>Fielder</option>
        <option value="keeper" ref = {this.props.inputRef}> Wicket Keeper</option>
        <option value="rounder" ref = {this.props.inputRef}>All Rounder</option>
      </select>
    )
  }
}
