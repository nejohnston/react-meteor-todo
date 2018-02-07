import { Mongo } from "meteor/mongo";

// all methods specific to todos
// meteor asks that methods be defined as a string. 
// structure = <collection>.<whatever we want method to be named>
Meteor.methods({

    // Adding a todo

    // Toggling complete (update)
    'todos.toggleComplete'

    // Removing a todo

    // Removing all completed todos


})


export const ToDos = new Mongo.Collection("todos");
