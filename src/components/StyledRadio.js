import React from 'react';

function StyledRadio(props) {
  return (
    <div className="styled-radio">
      <input
        type="radio"
        name={props.name}
        id={props.id}
        checked={props.checked}
      />
      <label htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
}

export default StyledRadio;
