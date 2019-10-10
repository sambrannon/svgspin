import React from 'react';

function CodeInput(props) {
  return (
    <div className="code-input">
      <textarea
        className="code-input__text"
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default CodeInput;
