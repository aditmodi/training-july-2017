import React, {Component} from 'react';

const options = ['Batsman', 'Bowler', 'Fielder', 'WK', 'All Rounder'];

export default class SelectBox extends Component{
  constructor(props){
    super(props);
    this.state = {selectedOption : 'Batsman'};
  }

  handleChange = (event) => {
    this.setState({ selectedOption : event.target.value });
  }

  render(){
    return(
      <select type="Speciality" value={this.state.selectedOption} onChange={this.handleChange}>
        {
          options.map((item, key) => {
            return (
              <option key={key} value={item} >{item}</option>
            )
          })
        }
      </select>
    )
  }
}
