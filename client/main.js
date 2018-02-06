import { Meteor } from "meteor/meteor";
import ReactDOM, { render } from "react-dom";
import React from "react";
import App from "../imports/ui/containers/App";
import "./main.css";

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById("app"));
});
