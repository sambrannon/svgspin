import React from 'react';

function RangeInput(props) {
  return (
    <div className="range-input">
      <div className="range-input__slider">
        <div className="range-input__knob" />
      </div>
      <div className="range-input__number">
        <input type="text" className="range-input__number__input" />
        {props.unit &&
          <span className="range-input__unit">
            {props.unit}
          </span>
        }
      </div>
    </div>
  );
}

export default RangeInput;
