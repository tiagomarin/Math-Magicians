import React from 'react';
import './OnOff.css';
import PropTypes from 'prop-types';

const OnOff = (props) => {
  const { toggleDisplay } = props;

  return (
    <div className="btn onOff">
      <button type="button" className="btn-front onOff" onClick={toggleDisplay}>On / Off</button>
    </div>
  );
};

OnOff.propTypes = {
  toggleDisplay: PropTypes.func.isRequired,
};
export default OnOff;
