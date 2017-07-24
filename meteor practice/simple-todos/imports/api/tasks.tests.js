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
      // afterEach(() => {
      //   stub1.restore();
      // });
      it('can delete task', () => {
        // Find the internal implementation of the task method so we can
        // test it in isolation
        const deleteTask = Meteor.server.method_handlers['tasks.remove'];
        let stub1 = sinon.stub(Meteor, "user", function() {
          return "shakaal";
        });
        console.log('stub1 : ', stub1);
        // Set up a fake method invocation that looks like what the method expects
        const invocation1 = { userId };

        // Run the method with `this` set to the fake invocation
        deleteTask.apply(invocation1.userId, [taskId]);

        // Verify that the method does what we expected
        assert.equal(Tasks.find().count(), 0);
        stub1.restore();

      });

      beforeEach(() => {
        Tasks.remove({});
      });
      it('can insert task', () => {
        text = "Yo wassup dog...";
        const insertTask = Meteor.server.method_handlers['tasks.insert'];
        let stub3 = sinon.stub(Meteor, "userId", function() {
          return "xasbkjbuWDSN12nxnjl";
        });
        let stub2 = sinon.stub(Meteor, "user", () =>{
          return "shakaal";
        });
        // const err = sinon.stub(Meteor, "Error");
        console.log('stub3 : ', stub3);
        console.log('stub2 : ', stub2);
        const invocation2 = { userId };
        console.log('invocation2 : ',invocation2.userId);
        insertTask.apply(invocation2.userId, [text]);

        assert.equal(Tasks.find().count(),2);
        stub2.restore();
        stub3.restore();
      });
      // afterEach(() => {
      //   stub3.restore();
      //   stub2.restore();
      // });
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
