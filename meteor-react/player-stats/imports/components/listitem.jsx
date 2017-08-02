import React, { Component, PropTypes } from 'react';
import {getDetails} from './form.jsx';
import { Link } from 'react-router-dom';

// Task component - represents a single todo item
export default class Task extends Component {
  render() {
    return (
      <tr>

        {
          getDetails.map((item, key) => {
            return (<td key={key}>{this.props.task[item]}</td>)
          })
        }
        <Link to={`/edit/${this.props.task._id}`}>Edit</Link>
      </tr>

    );
  }
}

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};
