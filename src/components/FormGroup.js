import React from 'react';

function FormGroup(props) {
  return (
    <div className="form-group">
      {props.label &&
        <label className="form-group__label">
          {props.label}
        </label>
      }
      {props.children}
    </div>
  );
}

export default FormGroup;
