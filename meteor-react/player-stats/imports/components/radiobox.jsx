import React, {Component} from 'react';

const gender = ['Male','Female','Other'];

export default class RadioBox extends Component{
  constructor(props){
    super(props);
    this.state = {selectedOption : 'Male'};
  }

  handleChange = (event) => {
    this.setState({ selectedOption : event.target.value});
  }

  render(){
    return(
      <div>
        {
          gender.map((item, key) => {
            return (
              <label key={key}>
                <input type="radio" name="gender" value={item} checked={this.state.selectedOption === item} onChange={this.handleChange}/>{item}<br/>
              </label>
            )
          })
        }
      </div>

    )
  }
}
