import React from 'react';
import FormGroup from './FormGroup';
import CodeInput from './CodeInput';

function GeneratedCodeBlocks(props) {
  return (
    <div className="generated-code-blocks">
      <h3 className="generated-code-blocks__title">
        Your Generated Code:
      </h3>
      <div className="generated-code-blocks__code">
        <FormGroup label="HTML Code">
          <CodeInput value={props.html} />
        </FormGroup>
        <FormGroup label="CSS Code">
          <CodeInput value={props.css} />
        </FormGroup>
      </div>
    </div>
  );
};

export default GeneratedCodeBlocks;
