import React from 'react';
import FormGroup from './FormGroup';
import StyledRadio from './StyledRadio';
import CodeInput from './CodeInput';
import SliderInput from './SliderInput';

function ConfigPanel(props) {
  return (
    <form>
      <FormGroup label="SVG Code">
        <CodeInput
          placeholder="Paste SVG markup here…"
          onChange={props.onSVGMarkupChange}
          value={props.svgMarkup}
        />
      </FormGroup>
      <FormGroup label="SVG Width (px)">
        <SliderInput
          min={0}
          max={2000}
          step={10}
          value={props.svgWidthPx}
          onSliderChange={props.onSvgWidthSliderChange}
          onInputChange={props.onSvgWidthChange}
        />
      </FormGroup>
      <FormGroup label="Spin Duration (ms)">
        <SliderInput
          min={0}
          max={10000}
          step={100}
          value={props.spinSpeedMs}
          onSliderChange={props.onSpinSpeedSliderChange}
          onInputChange={props.onSpinSpeedChange}
        />
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
