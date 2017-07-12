import React, { PropTypes } from 'react';

const Button = props => {
  return (
    <input
      type={props.type}
      disabled={props.disabled}
      value={props.value}
      className="btn btn-primary"
      onClick={props.onClick}
      />
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Button;
