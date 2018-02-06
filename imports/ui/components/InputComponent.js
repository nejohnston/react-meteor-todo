import React, { Component } from "react";
import { render } from "react-dom";

export default class InputComponent extends Component {
  constructor() {
    super();
    this.todoInput = undefined;
  }

  componentDidMount() {
    console.log("I'm alive");
    this.todoInput.focus();
  }

  render() {
    console.log(this.todoInput && this.todoInput.value);
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (this.todoInput && this.todoInput.value)
            // this prevents user from attempting to submit the empty string
            this.props.addTodo2(this.todoInput.value);
          this.todoInput.value = "";
        }}
      >
        <input
          className="add-todo"
          type="text"
          ref={input => (this.todoInput = input)}
        />
        <label>(press enter to add)</label>
      </form>
    );
  }
}
