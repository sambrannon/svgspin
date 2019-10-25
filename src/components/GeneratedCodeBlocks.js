import React from 'react';
import FormGroup from './FormGroup';

function GeneratedCodeBlocks(props) {
  return (
    <div className="generated-code-blocks">
      <h3 className="generated-code-blocks__title">
        Your Generated Code:
      </h3>
      <div className="generated-code-blocks__code">
        <FormGroup label="HTML Code">
          {/* TODO replace with CodeInput component */}
          <div className="code-input">
            <textarea
              className="code-input__text"
              value={props.html}
              spellCheck="false"
              readOnly
            />
          </div>
        </FormGroup>
        <FormGroup label="CSS Code">
          <div className="code-input">
            <textarea
              className="code-input__text"
              value={props.css}
              spellCheck="false"
              readOnly
            />
          </div>
        </FormGroup>
      </div>
    </div>
  );
};

export default GeneratedCodeBlocks;
