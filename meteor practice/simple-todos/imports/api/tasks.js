import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'tasks.insert'(text) {
    // return text;
    check(text, String);
    // console.log('called', text);
    // Make sure the user is logged in before inserting a task
    // if (! Meteor.userId()) {
    //   throw new Meteor.Error('not-authorized');
    // }
    // console.log(Tasks.find().fetch());
    Tasks.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'tasks.remove'(taskId, iden) {
    check(taskId, String);
    // console.log('userId:', Meteor.userId());
    if(iden != Meteor.user().username){
      window.alert("not authorized");
    }
    else{
      Tasks.remove(taskId);
    }
  },
  'tasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);

    Tasks.update(taskId, { $set: { checked: setChecked } });
  },
  'tasks.setPrivate'(taskId, setToPrivate) {
   check(taskId, String);
   check(setToPrivate, Boolean);

   const task = Tasks.findOne(taskId);

   // Make sure only the task owner can make a task private
  //  if (task.owner !== Meteor.userId()) {
  //    throw new Meteor.Error('not-authorized');
  //  }

   Tasks.update(taskId, { $set: { private: setToPrivate } });
 },
});
