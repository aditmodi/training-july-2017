import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { PlayerStats } from '../api/stats.js';
import Task from './listitem.jsx';
import ReactDOM from 'react-dom';

class List extends Component {
    getTasks() {
      return this.props.tasks.map((task) => (
       <Task task={task} />
     ));
   }

   renderTasks() {
     return this.getTasks().map((task, i) => (
       <Task key={i} task={task} />
     ));
   }

   render() {
     return (
       <div className="container">
         <header>
           <h1>Players List</h1>
         </header>

         <ul>
           {this.renderTasks()}
         </ul>
       </div>
     );
   }
 }

 List.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('list');
  return {
    tasks: PlayerStats.find({}).fetch(),
  };
}, List);
