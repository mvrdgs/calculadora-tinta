import React, { useState } from 'react';
import DisplayResults from '../components/DisplayResults';
import WallForm from '../components/WallForm';
import calculateArea from '../utils/calculateArea';

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

  const [results, setResults] = useState([]);

  const handleSubmit = () => {
    const [area, cans] = calculateArea(formData);

    setResults([area, cans]);
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

      { results.length > 0 && <DisplayResults results={results} />}
    </div>
  );
}

export default Calculator;
