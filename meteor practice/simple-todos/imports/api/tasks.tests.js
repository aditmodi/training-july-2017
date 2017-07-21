import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import { Tasks } from './tasks.js';

if(Meteor.isServer){
  describe('Tasks', () => {
    describe('methods', () => {
      const userId = Random.id();
      let taskId, text;

      beforeEach(() => {
        Tasks.remove({});
        taskId = Tasks.insert({
          text : 'test task',
          createdAt : new Date(),
          owner : userId,
          username : 'tmeasday',
        });
      });
      it('can delete task', () => {
        // Find the internal implementation of the task method so we can
        // test it in isolation
        const deleteTask = Meteor.server.method_handlers['tasks.remove'];

        // Set up a fake method invocation that looks like what the method expects
        const invocation1 = { userId };

        // Run the method with `this` set to the fake invocation
        deleteTask.apply(invocation1, [taskId]);

        // Verify that the method does what we expected
        assert.equal(Tasks.find().count(), 0);
      });

      beforeEach(() => {
        Tasks.remove({});
        console.log('called');
        text = "Yo wassup dog...";
      });
      it('can insert task', () => {
        const insertTask = Meteor.server.method_handlers['tasks.insert'];
        const invocation2 = { userId };
        insertTask.apply(invocation2, [text]);

        assert.equal(Tasks.find().count(),2);
      });

      beforeEach(() => {
        Tasks.remove({});
        taskId = Tasks.insert({
          text : 'test task',
          createdAt : new Date(),
          owner : userId,
          username : 'tmeasday',
          // checked : false
        });
      });
      it('can check the box', () => {
        const checkBox = Meteor.server.method_handlers['tasks.setChecked'];
        const invocation2 = { userId };
        checkBox.apply(invocation2,[taskId, !this.checked]);
        assert.equal(Tasks.find({checked : true}).count(), 1);
      });

      beforeEach(() => {
        Tasks.remove({});
        taskId = Tasks.insert({
          text : 'test task',
          createdAt : new Date(),
          owner : userId,
          username : 'tmeasday',
        });
      });

      it('can set to private', () => {
        const setPrivate = Meteor.server.method_handlers['tasks.setPrivate'];
        const invocation3 = { userId };
        setPrivate.apply(invocation3,[taskId, !this.private]);
        assert.equal(Tasks.find({private : true}).count(), 1);
      });
    });
  });
}
