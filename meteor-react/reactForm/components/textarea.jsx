import React, {Component} from 'react';

export default class TextArea extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <textarea placeholder = "Write something" required></textarea>
    )
  }
}
