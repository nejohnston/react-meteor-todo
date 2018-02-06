import React, { Component } from "react";
import { render } from "react-dom";

const style = {
  fontFamily: "Helvetica",
  fontWeight: "bold"
};

export default ({ numsToDo, hasCompleted, clearAll }) => (
  //export default class FooterComponent extends Component {
  //render() {
  //    const { numTodos, hasCompleted } = this.props;

  //    return (
  <div>
    <p>
      {" "}
      {numsToDo} todo{numsToDo > 1 && "s"}
    </p>
    {hasCompleted && (
      <button
        onClick={() => {
          clearAll();
        }}
      >
        {" "}
        Clear ALL Checked
      </button>
    )}
  </div>
  //    );
  //}
);
