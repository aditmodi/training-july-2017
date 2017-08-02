import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { PlayerStats } from '../api/stats.js';
import Task from './listitem.jsx';
import ReactDOM from 'react-dom';
import { getDetails } from './form.jsx';
import { Link } from 'react-router-dom';

class List extends Component {

   renderTasks = () => {
     console.log('details : ',getDetails);
     return this.props.tasks.map((task, i) => (
       <Task key={i} task={task} />
     ));
   }

   render() {
     return (
       <div className="container">
         <Link to="/" title="Go back">Go Home</Link><br/>
         <header>
           <h1>Players List</h1>
         </header>

        <table className="table table-bordered">
          <tbody>
            <tr className="success">

              {
                getDetails.map((item, key) => {
                  return (<th key={key}>{item.charAt(0).toUpperCase() + item.slice(1)}</th>)
                })
              }
              <th key='edit'>Edit</th>
            </tr>
            {this.renderTasks()}
          </tbody>
        </table>
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
