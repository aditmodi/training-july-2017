import React, {Component} from 'react';

export default class RadioBox extends Component{
  constructor(props){
    super(props);
    this.state = {selectedOption : 'Male'};
  }

  handleChange = (event) => {
    this.setState({ selectedOption : event.target.value});
    console.log('state  : ', this.state);
  }

  render(){
    return(
      <div>
        <label>
          <input key='male' type="radio" name="gender" value='Male' checked={this.state.selectedOption === 'Male'} onChange={this.handleChange}/>Male<br/>
        </label>
        <label>
            <input key='female' type="radio" name="gender" value='Female' checked={this.state.selectedOption === 'Female'} onChange={this.handleChange}/>Female<br/>
        </label>
        <label>
          <input key='other' type="radio" name="gender" value='Other' checked={this.state.selectedOption === 'Other'} onChange={this.handleChange}/>Other<br/>
        </label>
      </div>

    )
  }
}
