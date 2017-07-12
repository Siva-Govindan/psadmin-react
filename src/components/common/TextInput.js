import React, { PropTypes } from 'react';

const TextInput = props => {
  let wrapperClass = 'form-group';
  if(props.error && props.error.length > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.ame}> {props.label} </label>
      <div className="field">
        <input
          name={props.name} 
          type="text"
          className="form-control"
          onChange={props.onChange}
          value={props.value}
          placeholder={props.placeholder}
          />
        {props.error && <div className="alert alert-danger"> {props.error} </div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default TextInput;
