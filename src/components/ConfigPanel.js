import React from 'react';

function ConfigPanel() {
  return (
    <div className="config-panel">
      <form>
        <div className="form-group">
          <textarea>
            paste svg here...
          </textarea>
        </div>

        <div className="form-group">
          <label className="form-group__label">
            SVG Width
          </label>
          <div className="slider">
            slider with number input
          </div>
        </div>

        <div className="form-group">
          <label className="form-group__label">
            Spin Speed
          </label>
          <div className="slider">
            slider with number input
          </div>
        </div>

        <div className="form-group">
          <label className="form-group__label">
            Spin Direction
          </label>
          <div className="styled-radio">
            <input type="radio" />
            <label>Clockwise</label>
          </div>
          <div className="styled-radio">
            <input type="radio" />
            <label>Counter Clockwise</label>
          </div>
        </div>

        <div className="form-group">
          <button>
            Generate Code
          </button>
        </div>
      </form>
    </div>
  );
}

export default ConfigPanel;
