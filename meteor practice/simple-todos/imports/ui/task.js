import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './task.html';
// import tid from './body.js'
// export var task_Id ;
export var tid = new ReactiveVar();

Template.task.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  }
});

Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    Meteor.call('tasks.remove', this._id);
  },
  'click .toggle-private'() {
    Meteor.call('tasks.setPrivate', this._id, !this.private);
  },
  'click .subB'() {

    tid.set(this._id);
    console.log('from task.js',tid.curValue);
    $('.mainBody').hide();
    $('.subtaskShow').show();
  }
});
