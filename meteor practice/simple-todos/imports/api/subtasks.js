import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
var Tid;

export const SubTasks = new Mongo.Collection('subtasks');
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('subtasks', function subtasksPublication() {
    console.log("from publish : ",Tid);
    return SubTasks.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'subtasks.insert'(text, iden){
    console.log('from subtasks.js', iden);
    check(text,String);
    var count = SubTasks.find({ TaskId : iden }).count();
    var limited = Meteor.settings.public.limit;
    // var limit = 5;
    console.log("Meteor.settings.public.limit : ", Meteor.settings.public.limit );
    console.log("limit : ", limited);
    console.log("count : ", count);
    // if(!Meteor.userId)
    //   throw new Meteor.error('Not authorized');
    Tid = iden;
    console.log("Tid :",Tid);
    if ( count < limited ){
      SubTasks.insert({
        text,
        createdAt : new Date(),
        owner : this.userId,
        TaskId : iden
      });
    }
    else{
      throw console.error("Limit exceeded");
    }


  },
  'subtasks.remove'(taskId) {
    check(taskId, String);
    SubTasks.remove(taskId);
  },
  'subtasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);

    SubTasks.update(taskId, { $set: { checked: setChecked } });
  },
  'subtasks.setPrivate'(taskId, setToPrivate) {
   check(taskId, String);
   check(setToPrivate, Boolean);

   const subtask = SubTasks.findOne(taskId);

   // Make sure only the task owner can make a task private
   if (subtask.owner !== Meteor.userId()) {
     throw new Meteor.Error('not-authorized');
   }

   SubTasks.update(taskId, { $set: { private: setToPrivate } });
 },
});
