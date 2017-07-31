import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Task extends Component {
  render() {
    return (
      <div>{this.props.task.name}
        <li>{this.props.task.name}</li>
        <li>{this.props.task.age}</li>
        <li>{this.props.task.gender}</li>
        <li>{this.props.task.height}</li>
        <li>{this.props.task.weight}</li>
      </div>

    );
  }
}

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};
