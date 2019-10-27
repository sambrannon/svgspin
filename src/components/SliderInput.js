import React from 'react';

function SliderInput(props) {
  const {
    min,
    max,
    value,
    onChange,
  } = props;
  return (
    <div className="slider-input">
      <input
        type="range"
        min={parseInt(min)}
        max={parseInt(max)}
        value={parseInt(value)}
        onChange={onChange}
        className="slider-input__input"
      />
      <input
        type="number"
        className="slider-input__number"
        value={parseInt(value)}
        onChange={onChange}
      />
    </div>
  );
}

export default SliderInput;
