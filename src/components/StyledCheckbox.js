import React from 'react';

function StyledCheckbox(props) {
  return (
    <div className="styled-checkbox">
      <input
        type="checkbox"
        id={props.id}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
}

export default StyledCheckbox;
