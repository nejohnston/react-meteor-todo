import { Mongo } from "meteor/mongo";

// all methods specific to todos
// meteor asks that methods be defined as a string.
// structure = <collection>.<whatever we want method to be named>
// when doing Meteor.methods, we have access to all values associated with todos
Meteor.methods({
  // Adding a todo
  "todos.addToDo"(inputValue) {
    // CODE HERE
  },

  // Toggling complete (update)
  "todos.toggleComplete"(item) {
    if (item.owner !== this.userId) {
      throw new Meteor.Error(
        "todos.toggleComplete.not-authorized",
        "You are not allowed to update to-dos for other users"
      );
    }
    ToDos.update(item._id, {
      $set: { complete: !item.complete }
    });
  }

  // Removing a todo

  // Removing all completed todos
});

export const ToDos = new Mongo.Collection("todos");
