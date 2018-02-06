import React from 'react';
import PropTypes from 'prop-types';

const ClearButton = ({removeCompleted}) => (
  <button onClick={removeCompleted}>
    Clear completed
  </button>
);

ClearButton.propTypes = {
  removeCompleted: PropTypes.func.isRequired
};

export default ClearButton;