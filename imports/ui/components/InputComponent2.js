import React, { Component } from 'react';
import { render } from 'react-dom';

export default class InputComponent extends Component{
  render(){
    return <form>
              <label>ToDo: </label>
              <input type="text" ref="todo" value={this.props.currentInput} onChange={() => {
                  this.props.newTodo(this);
              }}></input>
            </form>
  }

}
