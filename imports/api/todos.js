import { Mongo } from "meteor/mongo";

export const ToDos = new Mongo.Collection("todos");

// checks on server for who's logged. query for documents based on owner field
if (Meteor.isServer) {
  Meteor.publish("todos", function todosPublication() {
    return ToDos.find({ owner: this.userId });
  });
}

// all methods specific to todos
// meteor asks that methods be defined as a string.
// structure = <collection>.<whatever we want method to be named>
// when doing Meteor.methods, we have access to all values
// associated with todos
Meteor.methods({
  // Adding a todo
  "todos.addToDo"(inputValue) {
    // CODE HERE
    // Checking just if there is a user, todo doesn't have
    // an owner b/c it hasn't been created duh
    // meteor exposes userid from server side
    if (!this.userId) {
      throw new Meteor.Error(
        "todos.addToDo.not-authorized",
        "You must be logged in to create a todo"
      );
    }
    ToDos.insert({
      title: inputValue,
      complete: false,
      owner: this.userId
    });
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
  },

  // Removing a todo

  "todos.removeToDo"(item) {
    if (item.owner !== this.userId) {
      throw new Meteor.Error(
        "todos.removeToDo.not-authorized",
        "You are not allowed to update to-dos for other users"
      );
    }
    ToDos.remove(item._id);
  },

  // Removing all completed todos
  "todos.removeCompleted"(owner) {
    if (owner !== this.userId) {
      throw new Meteor.Error(
        "todos.removeToDo.not-authorized",
        "You are not allowed to update to-dos for other users"
      );
    }
    ToDos.remove({ owner: this.userId, complete: true });
  }
});
