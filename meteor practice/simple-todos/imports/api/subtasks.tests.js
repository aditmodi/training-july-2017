import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import { SubTasks } from './subtasks.js';

if(Meteor.isServer){
  describe('Subtasks', () => {
    describe('methods', () => {
      const userId = Random.id();
      let taskId, text;

      beforeEach(() => {
        SubTasks.remove({});
        taskId = SubTasks.insert({
          text : 'test subtask',
          createdAt : new Date(),
          owner : userId,
          username : 'tmeasday',
        });
      });
      it('can delete subtask', () => {

        const deleteTask = Meteor.server.method_handlers['subtasks.remove'];

        // Set up a fake method invocation that looks like what the method expects
        const invocation1 = { userId };

        // Run the method with `this` set to the fake invocation
        deleteTask.apply(invocation1, [taskId]);

        // Verify that the method does what we expected
        assert.equal(SubTasks.find().count(), 0);
      });
    });
  });
}
