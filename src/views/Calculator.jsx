import React, { useState } from 'react';
import DisplayResults from '../components/DisplayResults';
import WallForm from '../components/WallForm';
import calculateArea from '../utils/calculateArea';
import { roomDataSchema, errorsSchema } from '../utils/schemas';

function Calculator() {
  const [roomData, setRoomData] = useState(roomDataSchema);
  const numberOfWalls = Object.keys(roomDataSchema);

  const [errors, setErrors] = useState(errorsSchema);

  const [results, setResults] = useState([]);

  const handleSubmit = () => {
    setErrors(errorsSchema);

    const [area, cans] = calculateArea(roomData);

    setResults([area, cans]);
  };

  return (
    <div>
      { numberOfWalls.map((wall) => (
        <WallForm
          key={wall.trim().toLowerCase()}
          identifier={wall}
          setRoomData={setRoomData}
          roomData={roomData}
          error={errors[wall]}
        />
      )) }

      <button onClick={handleSubmit} type="button">Calcular</button>

      { results.length > 0 && <DisplayResults results={results} />}
    </div>
  );
}

export default Calculator;
