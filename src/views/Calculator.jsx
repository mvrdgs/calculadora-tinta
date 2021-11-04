import React, { useEffect, useState } from 'react';
import { roomDataSchema, errorsSchema } from '../utils/schemas';
import validateWallParameters from '../utils/validateWallParameters';
import DisplayResults from '../components/DisplayResults';
import WallForm from '../components/WallForm';
import calculateArea from '../utils/calculateArea';

function Calculator() {
  const [roomData, setRoomData] = useState(roomDataSchema);
  const numberOfWalls = Object.keys(roomDataSchema);

  const [errors, setErrors] = useState(errorsSchema);

  const [results, setResults] = useState([]);

  useEffect(() => {
    setErrors(errorsSchema);

    const roomDataKeys = Object.keys(roomData);

    roomDataKeys.forEach((wallKey) => {
      const error = validateWallParameters(roomData[wallKey]);
      if (error) setErrors({ ...errors, [wallKey]: error });
    });
  }, [roomData]);

  const checkErrors = () => {
    const errorValues = Object.values(errors);
    const findError = errorValues.find((error) => error !== null);

    if (findError) return true;
    return false;
  };

  const handleSubmit = () => {
    const [area, cans] = calculateArea(roomData);

    const hasErrors = checkErrors();

    if (!hasErrors) setResults([area, cans]);
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
