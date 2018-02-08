import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import "./styles.css";

import ToDoItem from "../../components/ToDoItem";
import ToDoCount from "../../components/ToDoCount";
import ClearButton from "../../components/ClearButton";
import AccountsUIWrapper from "../../components/AccountsUIWrapper";

import { ToDos } from "../../../api/todos";

class App extends Component {
  constructor() {
    super();

    this.addToDo = this.addToDo.bind(this);
    this.removeCompleted = this.removeCompleted.bind(this);
  }

  // toggle the checkbox to denote completion status
  toggleComplete(item) {
    // ToDos.update(item._id, { $set: { complete: !item.complete } });
    Meteor.call("todos.toggleComplete", item);
  }

  // add a new to do to the list
  addToDo(event) {
    // event.preventDefault stays here, not in fixtures b/c has nothing to do w/ server
    event.preventDefault();
    if (this.toDoInput.value) {
      Meteor.call("todos.addToDo", this.toDoInput.value);
      this.toDoInput.value = "";
    }
  }

  // remove a to do from the list
  removeToDo(item) {
    Meteor.call("todos.removeToDo", item);
  }

  // remove all completed to dos from the list
  removeCompleted() {
    Meteor.call("todos.removeCompleted", this.props.currentUserId);
  }

  // check if any of the todos are completed
  hasCompleted() {
    let completed = this.props.todos.filter(todo => todo.complete);
    return completed.length > 0 ? true : false;
  }

  componentDidMount() {
    this.props.currentUser && this.toDoInput.focus();
  }

  render() {
    let number = this.props.todos.length;

    return (
      <div className="app-wrapper">
        <div className="login-wrapper">
          <AccountsUIWrapper />
        </div>
        <div className="todo-list">
          <h1>So Much To Do</h1>
          {this.props.currentUser ? (
            <div>
              <div className="add-todo">
                <form name="addTodo" onSubmit={this.addToDo}>
                  <input type="text" ref={ref => (this.toDoInput = ref)} />
                  <span>(press enter to add)</span>
                </form>
              </div>
              <ul>
                {this.props.todos.map((todo, index) => (
                  <ToDoItem
                    key={index}
                    item={todo}
                    toggleComplete={this.toggleComplete.bind(this, todo)}
                    removeToDo={this.removeToDo.bind(this, todo)}
                  />
                ))}
              </ul>
              <div className="todo-admin">
                <ToDoCount number={number} />
                {this.hasCompleted() && (
                  <ClearButton removeCompleted={this.removeCompleted} />
                )}
              </div>
            </div>
          ) : (
            <div className="logged-out-message">
              <p>Please sign in to see your todos</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  todos: []
};

App.propTypes = {
  todos: PropTypes.array.isRequired,
  // good idea to specify how the structure of the object
  currentUser: PropTypes.object,
  currentUserId: PropTypes.string
};

export default withTracker(() => {
  Meteor.subscribe("todos"); // NEW!
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    todos: ToDos.find({}).fetch()
  };
})(App);
