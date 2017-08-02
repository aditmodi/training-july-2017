import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const PlayerStats = new Mongo.Collection('stat');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('list', listPublication = () => {
    return PlayerStats.find({});
  });
}

Meteor.methods({
  'list.insert'(name, phone, gender, age, height, weight, speciality){
    console.log("insert called");
    PlayerStats.insert({
      name : name,
      phone : phone,
      gender : gender,
      age : age,
      height : height,
      weight : weight,
      speciality : speciality
    });
  },
  'list.update'(name, phone, gender, age, height, weight, speciality){
    PlayerStats.update(
      { name : name},
      {
        name : name,
        phone : phone,
        gender : gender,
        age : age,
        height : height,
        weight : weight,
        speciality : speciality
      }
    )
  },
  'list.fetch'(id){
    return PlayerStats.findOne({_id : id});
  }
});
