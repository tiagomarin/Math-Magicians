import React from 'react';
import PropTypes from 'prop-types';
import './CalculatorKey.css';

const CalculatorKey = (props) => {
  const { btnText, keyClickHandler } = props;
  return (
    <div className="btn"><button type="button" onClick={keyClickHandler} className="btn-front">{btnText}</button></div>
  );
};

CalculatorKey.propTypes = {
  btnText: PropTypes.string.isRequired,
  keyClickHandler: PropTypes.func.isRequired,
};
export default CalculatorKey;
