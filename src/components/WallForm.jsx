import React, { useEffect, useState } from 'react';
import { string, func, objectOf } from 'prop-types';

const wallParameters = {
  width: '0',
  height: '0',
  doors: '0',
  windows: '0',
};

function WallForm(props) {
  const { identifier, setFormData, formData } = props;
  const [wallData, setWallData] = useState(wallParameters);

  useEffect(() => {
    setFormData({ ...formData, [identifier]: wallData });
  }, [wallData]);

  const handleChange = async ({ target }) => {
    const { id, value } = target;

    setWallData({ ...wallData, [id]: value });
  };

  return (
    <div>
      { identifier }
      <label htmlFor="width">
        Largura:
        <input
          id="width"
          type="text"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="height">
        Altura:
        <input
          id="height"
          type="text"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="windows">
        Quantidade de janelas:
        <input
          id="windows"
          type="text"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="doors">
        Quantidade de portas:
        <input
          id="doors"
          type="text"
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

WallForm.propTypes = {
  identifier: string,
  setFormData: func,
  formData: objectOf(objectOf(string)),
}.isRequired;

export default WallForm;
