import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = (props) => {
  const { total, next, operation } = props;

  const showUpdateDisplay = () => {
    if (!total && !next && operation) {
      return `${total} ${operation}`;
    }
    if (total && next && operation) {
      return `${total} ${operation} ${next}`;
    }
    if (total && operation) {
      return `${total} ${operation}`;
    }
    if (next) {
      return next;
    }
    if (total) {
      return total;
    }
    return 0;
  };

  return (
    <div name="display" className="display" id="display">{showUpdateDisplay()}</div>
  );
};

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  total: null,
  next: null,
  operation: null,
};
export default Display;
