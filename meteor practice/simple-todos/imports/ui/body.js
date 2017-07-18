import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tasks } from '../api/tasks.js';
import { SubTasks } from '../api/subtasks.js';
import './task.js';
import './body.html';
import './demoLists.html';
import './subtask.js';
import task_Id from './task.js';

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('tasks');
  Meteor.subscribe('subtasks');
});

Template.body.helpers({
	tasks(){
    const instance = Template.instance();
    if (instance.state.get('hideCompleted')) {
      // If hide completed is checked, filter tasks
      return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    }
		return Tasks.find({});
	},
  incompleteCount() {
    return Tasks.find({ checked: { $ne: true } }).count();
  },
  demoTasks(){
    return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
  },
  subtasks() {
        const instance = Template.instance();
        if (instance.state.get('hideCompleted')) {
          // If hide completed is checked, filter tasks
          return SubTasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
        }
    		return SubTasks.find({});
      },
  incompleteCountSub() {
    return SubTasks.find({ checked: { $ne: true } }).count();
  },
});
Template.body.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    Meteor.call('tasks.insert', text);

    // Clear form
    target.text.value = '';
  },
  'submit .new-subtask'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    console.log('from body', task_Id.task_Id);
    Meteor.call('subtasks.insert', text, task_Id.task_Id);

    // Clear form
    target.text.value = '';
  },
  'change .hide-completed input'(event, instance) {
  instance.state.set('hideCompleted', event.target.checked);
  },
  'click .demo'(){
    $('.mainBody').hide();
    $('.subtaskShow').hide();
    $('.demotask').show();
  },
  'click .GoBack'(){
    $('.demotask').hide();
    $('.mainBody').show();
  }
});
$(document).ready(function(){
  $('.demotask').hide();
  $('.subtaskShow').hide();

});
