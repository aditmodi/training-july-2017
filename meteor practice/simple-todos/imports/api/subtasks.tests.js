import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import { SubTasks } from './subtasks.js';
// import settings from '../../settings.json';

if(Meteor.isServer){
  describe('Subtasks', () => {
    describe('methods', () => {
      const userId = Random.id();
      let taskId, text;
      let stub;

      beforeEach(() => {
        SubTasks.remove({});
        text = "Yo wassup dog...";
        taskId = SubTasks.insert({
          text : 'test subtask',
          createdAt : new Date(),
          owner : userId,
          username : 'tmeasday',
        });
      });
      afterEach(() => {
        stub.restore();
      // console.log('stub.restore : ', stub.restore());
      });

      it('can insert task', () => {
        const insertTask = Meteor.server.method_handlers['subtasks.insert'];
        stub = sinon.stub(Meteor, "userId", () => {
          return this.userId;
        });
        // const stub2 = sinon.stub(Meteor, "user", () =>{
        //   return this.user.username;
        // });
        // const err = sinon.stub(Meteor, "Error");
        console.log('stub : ', stub);
        // console.log('stub2 : ', stub2);
        const invocation2 = stub;
        console.log('invocation2ofsubtask : ',invocation2.userId);
        insertTask.apply(invocation2.userId, [text]);

        assert.equal(SubTasks.find().count(),2);

      });

      it('cannot insert more than limit', () => {
        const invocation2 = stub;
        const insertTask = Meteor.server.method_handlers['subtasks.insert'];
        for (var i = 0; i <= Meteor.settings.public.limit; i++) {
          console.log("Meteor : ", Meteor.settings.public.limit);
          console.log('invocation2ofsubtask : ',invocation2.userId);
          insertTask.apply(invocation2.userId, [text]);
        }
        assert.equal(SubTasks.find().count(),1);
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
