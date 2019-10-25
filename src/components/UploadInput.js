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
    <input 
      type="file"
      accept="image/svg+xml"
      onChange={handleChange}
    />
  )
}

export default UploadInput;