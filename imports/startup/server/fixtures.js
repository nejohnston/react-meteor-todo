import { Meteor } from "meteor/meteor";
import { ToDos } from "../../api/todos";

Meteor.startup(() => {
  if (ToDos.find().count() === 0) {
    ToDos.insert({ title: "Learn Meteor Again", complete: false });
  }
});
