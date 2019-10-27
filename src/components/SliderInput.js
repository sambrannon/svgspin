import React from 'react';
import Slider from 'rc-slider';

function RangeInput(props) {
  const {
    min,
    max,
    step,
    value,
    onSliderChange,
    onInputChange,
  } = props;

  return (
    <div className="slider-input">
      <Slider
        min={parseInt(min)}
        max={parseInt(max)}
        step={parseInt(step)}
        value={parseInt(value)}
        onChange={onSliderChange}
        className="slider-input__bar"
      />
      <input
        className="slider-input__number"
        type="number"
        value={parseInt(value)}
        onChange={onInputChange}
      />
    </div>
  );
}

export default RangeInput;
