import './subtask.html';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { SubTasks } from '../api/subtasks.js';
import task_Id from './task.js';

Template.body.helpers({
  subtasks() {
        const instancesub = Template.instance();
        console.log("from 2nd : ", task_Id);
        if (instancesub.state.get('hideCompleted')) {
          // If hide completed is checked, filter tasks
          return SubTasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
        }
    		return SubTasks.find({});
      },
  incompleteCountSub() {
    return SubTasks.find({ checked: { $ne: true } }).count();
  },
});


  Template.registerHelper('subtask', function isOwner(){
      return this.owner == Meteor.userId;
  });

  Template.subtask.events({
    'click .toggle-checked'() {
      // Set the checked property to the opposite of its current value
      Meteor.call('subtasks.setChecked', this._id, !this.checked);
    },
    'click .deleteSub'() {
      console.log('delete called');
      Meteor.call('subtasks.remove', this._id);
    },
    'click .toggle-private'() {
      Meteor.call('subtasks.setPrivate', this._id, !this.private);
    },

  });
  Template.body.events({
    'click .goback'() {
      $('.subtaskShow').hide();
      $('.mainBody').show();
    }
  });
