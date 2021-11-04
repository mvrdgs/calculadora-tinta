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
  const [totalArea, suggestedCans] = result;
  const canQuantities = suggestedCans && Object.values(suggestedCans);
  const canSizes = suggestedCans && Object.keys(suggestedCans);

  const handleSubmit = () => {
    const [area, cans] = calculateTotalArea(formData);

    setResult([area, cans]);
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
        {` ${totalArea} `}
        metros quadrados.
        Sugerimos utilizar:
        { canSizes.map((size, index) => (
          <div key={size}>
            {` ${canQuantities[index]} latas de ${size}L`}
          </div>
        )) }
      </div>
      )}
    </div>
  );
}

export default Calculator;
