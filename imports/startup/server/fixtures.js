import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { ToDos } from "../../api/todos";

Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    let userId = Accounts.createUser({
      email: "nicholas@nicholas.com",
      password: "pass"
    });
    if (ToDos.find().count() === 0) {
      ToDos.insert({ title: "Learn Meteor Again", complete: false });
    }
  }
});
