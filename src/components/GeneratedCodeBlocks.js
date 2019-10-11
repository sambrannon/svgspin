import React from 'react';

function GeneratedCodeBlocks(props) {
  return (
    <div className="generated-code-blocks">
      {/* TODO replace with CondeInput component */}
      <div className="code-input">
        <textarea
          className="code-input__text"
          value={props.html}
          spellCheck="false"
          readOnly
        />
      </div>
      <div className="code-input">
        <textarea
          className="code-input__text"
          value={props.css}
          spellCheck="false"
          readOnly
        />
      </div>
    </div>
  );
};

export default GeneratedCodeBlocks;
