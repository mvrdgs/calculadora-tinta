import React, { useEffect, useState } from 'react';
import { string, func, objectOf } from 'prop-types';
import { inputPattern } from '../utils/schemas';
import Input from './Input';

function WallForm(props) {
  const {
    identifier, setRoomData, roomData, error,
  } = props;
  const [wallData, setWallData] = useState(roomData[identifier]);

  useEffect(() => {
    setRoomData({ ...roomData, [identifier]: wallData });
  }, [wallData]);

  const handleChange = async ({ target }) => {
    const { id, value } = target;

    if (inputPattern[id].test(value)) {
      setWallData({ ...wallData, [id]: value });
    }
  };

  return (
    <div>
      <span>{ identifier }</span>
      <Input
        label="Largura"
        id="width"
        wallData={wallData}
        handleChange={handleChange}
      />
      <Input
        label="Altura"
        id="height"
        wallData={wallData}
        handleChange={handleChange}
      />
      <Input
        label="Quantidade de janelas"
        id="windows"
        wallData={wallData}
        handleChange={handleChange}
      />
      <Input
        label="Quantidade de portas"
        id="doors"
        wallData={wallData}
        handleChange={handleChange}
      />
      { error && (
        <div>
          <span>{`*${error}`}</span>
        </div>
      )}
    </div>
  );
}

WallForm.propTypes = {
  identifier: string,
  setRoomData: func,
  roomData: objectOf(objectOf(string)),
  error: string,
}.isRequired;

export default WallForm;
