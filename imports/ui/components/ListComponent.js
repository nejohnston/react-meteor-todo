import React, { Component } from "react";
import { render } from "react-dom";
import ListItemComponent from "./ListItemComponent.js";

export default class ListComponent extends Component {
  render() {
    return (
      <ul>
        {this.props.todoList.map((todoItem, i) => {
          return (
            <ListItemComponent
              key={i} // this is a value React needs (hash value)
              todoIndex={i}
              item={todoItem}
              removeTodo={this.props.removeTodo}
              updateTodos={this.props.updateTodos}
            />
          );
        })}
      </ul>
    );
  }
}
