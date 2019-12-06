import React from 'react';

const UploadInput = props => {
  const handleChange = async ({ target }) => {
    const [file] = target.files;

    if (file) {
      const value = await file.text();
      props.onChange({ target: { value }});
    }
  };

  return (
    <div className="upload-input">
      <input
        type="file"
        accept="image/svg+xml"
        onChange={handleChange}
        className="upload-input__input"
        id={props.id}
      />
      <label htmlFor={props.id} className="upload-input__label">
        {props.label}
      </label>
    </div>
  )
}

export default UploadInput;
