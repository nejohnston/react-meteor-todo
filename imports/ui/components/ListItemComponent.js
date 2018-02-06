import React, { Component } from "react";
import { render } from "react-dom";

export default class ListItemComponent extends Component {
  render() {
    // destructuring an object
    const { title, done } = this.props.item;

    return (
      <li className="todo-List">
        {title}
        <input
          type="checkbox"
          className="todo-List"
          onChange={() => {
            this.props.updateTodos(this.props.todoIndex, !done);
          }}
          checked={done}
        />

        <button
          className="todo-List"
          type=""
          onClick={() => {
            this.props.removeTodo(this.props.todoIndex);
          }}
        >
          Remove
        </button>
      </li>
    );
  }
}
