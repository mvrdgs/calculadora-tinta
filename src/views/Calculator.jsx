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

const formDataSchema = {
  'Parede 1': wallParameters,
  'Parede 2': wallParameters,
  'Parede 3': wallParameters,
  'Parede 4': wallParameters,
};

const errorsSchema = {
  'Parede 1': null,
  'Parede 2': null,
  'Parede 3': null,
  'Parede 4': null,
};

function Calculator() {
  const [formData, setFormData] = useState(formDataSchema);
  const numberOfWalls = Object.keys(formDataSchema);

  const [errors, setErrors] = useState(errorsSchema);

  const [results, setResults] = useState([]);

  const handleSubmit = () => {
    setErrors(errorsSchema);

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
          error={errors[wall]}
        />
      )) }

      <button onClick={handleSubmit} type="button">Calcular</button>

      { results.length > 0 && <DisplayResults results={results} />}
    </div>
  );
}

export default Calculator;
