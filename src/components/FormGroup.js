import React from 'react';

function FormGroup(props) {
  return (
    <div className="form-group">
      {props.label &&
        <label className="form-group__label">
          {props.label}
        </label>
      }
      <div className="form-group__content">
        {props.children}
      </div>
    </div>
  );
}

export default FormGroup;
