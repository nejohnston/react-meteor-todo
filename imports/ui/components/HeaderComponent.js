import React, { Component } from "react";
import { render } from "react-dom";

// Functional Stateless Components (ie. Dumb Componenets) are
// components that don't 'do' anything like titles
const HeaderComponent = props => <h1 className="todo-list">{props.title}</h1>;
export default HeaderComponent;
