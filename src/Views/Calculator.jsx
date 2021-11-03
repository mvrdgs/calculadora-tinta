import React, { useEffect, useState } from 'react';

const wallParameters = {
  width: '0',
  height: '0',
  doors: '0',
  windows: '0',
};

function Calculator() {
  const [wallData, setWallData] = useState(wallParameters);

  useEffect(() => { console.log(wallData); }, [wallData]);

  const handleChange = ({ target }) => {
    const { id, value } = target;

    setWallData({ ...wallData, [id]: value });
  };

  return (
    <div>
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
      <button type="button">Calcular</button>
    </div>
  );
}

export default Calculator;
