import { Meteor } from 'meteor/meteor';
import {render} from 'react-dom';
import React from 'react';
import AppComponent from '../imports/ui/containers/App/App'

Meteor.startup(()=> {render(<AppComponent />, document.getElementById("app"));});

