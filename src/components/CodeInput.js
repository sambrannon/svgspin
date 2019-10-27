import React from 'react';

function CodeInput(props) {
  return (
    <div className="code-input">
      <textarea
        className="code-input__text"
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        readOnly={!props.onChange}
      />
    </div>
  );
}

export default CodeInput;
