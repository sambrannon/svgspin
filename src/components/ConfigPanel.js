import React from 'react';
import FormGroup from './FormGroup';

class ConfigPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spinDirection: 'clockwise',
    };

    this.onSpinDirectionChange = this.onSpinDirectionChange.bind(this);
  };

  onSpinDirectionChange(event) {
    this.setState({
      spinDirection: event.target.id,
    });
  }

  render() {
    return (
      <div className="config-panel">
        <form>
          <FormGroup>

            {/* TODO replace with CondeInput component */}
            <div className="code-input">
              <textarea
                className="code-input__text"
                placeholder="Paste SVG markup here…"
                onChange={this.props.onSVGMarkupChange}
                value={this.state.svgMarkup}
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
              slider with number input
            </div>
          </FormGroup>

          <FormGroup label="Spin Speed">
            {/* TODO replace with RangeInput component */}
            <div className="slider">
              slider with number input
            </div>
          </FormGroup>

          <FormGroup label="Spin Direction">
            {/* TODO replace with StyledRadio component */}
            <div className="styled-radio">
              <input
                type="radio"
                name="spin-direction"
                id="clockwise"
                checked={this.state.spinDirection === 'clockwise'}
                onChange={this.onSpinDirectionChange}
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
                checked={this.state.spinDirection === 'counter-clockwise'}
                onChange={this.onSpinDirectionChange}
              />
              <label htmlFor="counter-clockwise">
                Counter Clockwise
              </label>
            </div>
          </FormGroup>

          <FormGroup>
            <button>
              Generate Code
            </button>
          </FormGroup>
        </form>
      </div>
    );
  };
}

export default ConfigPanel;
