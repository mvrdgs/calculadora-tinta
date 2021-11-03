import React, { useEffect, useState } from 'react';
import WallForm from '../components/WallForm';
import { calculateTotalArea } from '../utils/calculatorFuncions';

const wallParameters = {
  width: '1',
  height: '1',
  windows: '0',
  doors: '0',
};

const formDataStructure = {
  'Parede 1': wallParameters,
  'Parede 2': wallParameters,
  'Parede 3': wallParameters,
  'Parede 4': wallParameters,
};

function Calculator() {
  const [formData, setFormData] = useState(formDataStructure);
  const numberOfWalls = Object.keys(formDataStructure);

  useEffect(() => { console.log(formData); }, [formData]);

  return (
    <div>
      { numberOfWalls.map((wall) => (
        <WallForm
          key={wall.trim().toLowerCase()}
          identifier={wall}
          setFormData={setFormData}
          formData={formData}
        />
      )) }
      <button onClick={() => calculateTotalArea(formData)} type="button">Calcular</button>
    </div>
  );
}

export default Calculator;
