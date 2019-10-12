import React from 'react';

function RangeInput(props) {
  const {
    min,
    max,
    unit,
    value,
    onChange,
  } = props;
  return (
    <div className="range-input">
      <input 
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      <div className="range-input__number">
        <input 
          type="number"
          className="range-input__number__input"
          value={value}
          onChange={onChange}
          min={min}
          max={max}
        />
        {
          props.unit &&
          <span className="range-input__unit">
            {props.unit}
          </span>
        }
      </div>
    </div>
  );
}

export default RangeInput;
