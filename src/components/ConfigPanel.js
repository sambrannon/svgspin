import React from 'react';
import Slider from 'rc-slider';
import FormGroup from './FormGroup';
import StyledRadio from './StyledRadio';

function ConfigPanel(props) {
  return (
    <form>
      <FormGroup>
        {/* TODO replace with CondeInput component */}
        <div className="code-input">
          <textarea
            className="code-input__text"
            placeholder="Paste SVG markup here…"
            onChange={props.onSVGMarkupChange}
            value={props.svgMarkup}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
        </div>
      </FormGroup>

      <FormGroup label="SVG Width">
        <div className="slider-input">
          <Slider
            min={0}
            max={2000}
            step={10}
            value={props.svgWidthPx}
            onChange={props.onSvgWidthSliderChange}
            className="slider-input__bar"
          />
          <input
            className="slider-input__number"
            type="number"
            value={props.svgWidthPx}
            onChange={props.onSvgWidthChange}
          />
        </div>
      </FormGroup>

      <FormGroup label="Spin Speed">
        {/* TODO replace with RangeInput component */}
        <div className="slider-input">
          <Slider
            min={0}
            max={10000}
            step={100}
            value={props.spinSpeedMs}
            onChange={props.onSpinSpeedSliderChange}
            className="slider-input__bar"
          />
          <input
            className="slider-input__number"
            type="number"
            value={props.spinSpeedMs}
            onChange={props.onSpinSpeedChange}
          />
        </div>
      </FormGroup>

      <FormGroup label="Spin Direction">
        <StyledRadio
          type="radio"
          name="spin-direction"
          id="clockwise"
          checked={props.spinDirection === 'clockwise'}
          onChange={props.onSpinDirectionChange}
          label="Clockwise"
        />
        <StyledRadio
          type="radio"
          name="spin-direction"
          id="counter-clockwise"
          checked={props.spinDirection === 'counter-clockwise'}
          onChange={props.onSpinDirectionChange}
          label="Counter Clockwise"
        />
      </FormGroup>
    </form>
  );
}

export default ConfigPanel;
