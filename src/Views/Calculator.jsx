import React from 'react';

function Calculator() {
  return (
    <div>
      <label htmlFor="width">
        Largura:
        <input id="width" type="text" />
      </label>
      <label htmlFor="height">
        Altura:
        <input id="height" type="text" />
      </label>
      <label htmlFor="windows">
        Quantidade de janelas:
        <input id="windows" type="text" />
      </label>
      <label htmlFor="doors">
        Quantidade de portas:
        <input id="doors" type="text" />
      </label>
      <button type="button">Calcular</button>
    </div>
  );
}

export default Calculator;
