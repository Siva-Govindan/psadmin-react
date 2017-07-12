import React, { PropTypes } from 'react';

const SelectInput = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}> {props.label} </label>
      <div className="field">
        <select
          name={props.name} 
          className="form-control"
          onChange={props.onChange}
          value={props.value} >
          <option value=""> {props.defaultOption} </option>
          {
            props.options.map( option =>
              <option key={option.value} value={option.value}> {option.text} </option>
            )
          }
        </select>
        {props.error && <div className="alert alert-danger"> {props.error} </div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.array.isRequired,
  defaultOption: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default SelectInput;