import React, { useEffect, useState } from 'react';
import WallForm from '../components/WallForm';
import { calculateWallArea } from '../utils/calculatorFuncions';

const formDataStructure = {
  'Parede 1': {},
  'Parede 2': {},
  'Parede 3': {},
  'Parede 4': {},
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
      <button onClick={() => console.log(calculateWallArea(formData))} type="button">Calcular</button>
    </div>
  );
}

export default Calculator;
