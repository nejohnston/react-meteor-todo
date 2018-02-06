import React from "react";
import PropTypes from "prop-types";

const ToDoItem = ({ item, toggleComplete, removeToDo }) => (
  <li>
    {item.title}
    <input
      type="checkbox"
      id={item._id}
      checked={item.complete}
      onChange={toggleComplete}
    />
    <label htmlFor={item._id} />
    <button onClick={removeToDo}>
      <i className="fa fa-trash" />
    </button>
  </li>
);

ToDoItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired
  }),
  toggleComplete: PropTypes.func.isRequired,
  removeToDo: PropTypes.func.isRequired
};

export default ToDoItem;
