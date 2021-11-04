import React, { useState } from 'react';
import WallForm from '../components/WallForm';
import calculateTotalArea from '../utils/calculatorFuncions';

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
  const [result, setResult] = useState([]);

  const handleSubmit = () => {
    const [area] = calculateTotalArea(formData);

    setResult([area]);
  };

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
      <button onClick={handleSubmit} type="button">Calcular</button>

      { result.length > 0 && (
      <div>
        A área total a ser pintada será de
        {` ${result[0]} `}
        metros quadrados
      </div>
      )}
    </div>
  );
}

export default Calculator;
