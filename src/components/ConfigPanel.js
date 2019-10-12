import React from 'react';
import FormGroup from './FormGroup';
import RangeInput from './RangeInput';

function ConfigPanel(props) {
  return (
    <div className="config-panel">
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
          <RangeInput             
            value={props.svgWidthPx}
            onChange={props.onSvgWidthChange}
            min="0"
            max="1000"
          />
        </FormGroup>

        <FormGroup label="Spin Speed">          
          <RangeInput             
            value={props.spinSpeedMs}
            onChange={props.onSpinSpeedChange}
            min="0"
            max="4000"
          />
        </FormGroup>

        <FormGroup label="Spin Direction">
          {/* TODO replace with StyledRadio component */}
          <div className="styled-radio">
            <input
              type="radio"
              name="spin-direction"
              id="clockwise"
              checked={props.spinDirection === 'clockwise'}
              onChange={props.onSpinDirectionChange}
            />
            <label htmlFor="clockwise">
              Clockwise
            </label>
          </div>

          {/* TODO replace with StyledRadio component */}
          <div className="styled-radio">
            <input
              type="radio"
              name="spin-direction"
              id="counter-clockwise"
              checked={props.spinDirection === 'counter-clockwise'}
              onChange={props.onSpinDirectionChange}
            />
            <label htmlFor="counter-clockwise">
              Counter Clockwise
            </label>
          </div>
        </FormGroup>
      </form>
    </div>
  );
}

export default ConfigPanel;
