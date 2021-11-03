import React, { useEffect, useState } from 'react';

const wallParameters = {
  width: '0',
  height: '0',
  doors: '0',
  windows: '0',
};

const predefinedAreas = {
  doorArea: (0.80 * 1.9),
  windowArea: (2 * 1.2),
};

// const wallPaintOptions = [0.5, 2.5, 3.6, 18];

const calculateWallArea = ({
  width, height, doors, windows,
}) => {
  const windowsArea = windows > 0 ? predefinedAreas.windowArea * windows : 1;
  const doorsArea = doors > 0 ? predefinedAreas.doorArea * doors : 1;

  const wallArea = width * height;

  const areaToBePainted = wallArea - windowsArea - doorsArea;

  return areaToBePainted;
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
      <button onClick={() => console.log(calculateWallArea(wallData))} type="button">Calcular</button>
    </div>
  );
}

export default Calculator;
