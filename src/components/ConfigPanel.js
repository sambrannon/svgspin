import React from 'react';
import FormGroup from './FormGroup';

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
          {/* TODO replace with RangeInput component */}
          <div className="slider">
            <input
              type="number"
              value={props.svgWidthPx}
              onChange={props.onSvgWidthChange}
            />
          </div>
        </FormGroup>

        <FormGroup label="Spin Speed">
          {/* TODO replace with RangeInput component */}
          <div className="slider">
            <input
              type="number"
              value={props.spinSpeedMs}
              onChange={props.onSpinSpeedChange}
            />
          </div>
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
