import React from 'react';
import { arrayOf, string, objectOf } from 'prop-types';

function DisplayResults(props) {
  const { results } = props;
  const [totalArea, suggestedCans] = results;
  const canQuantities = suggestedCans && Object.values(suggestedCans);
  const canSizes = suggestedCans && Object.keys(suggestedCans);

  return (
    <div>
      A área total a ser pintada será de
      {` ${totalArea} `}
      metros quadrados.
      Sugerimos utilizar:
      { canSizes.map((size, index) => (
        <div key={size}>
          {` ${canQuantities[index]} ${canQuantities[index] > 1 ? 'latas' : 'lata'} de ${size}L`}
        </div>
      )) }
    </div>
  );
}

DisplayResults.propTypes = {
  result: arrayOf([string, objectOf(string)]),
}.isRequipred;

export default DisplayResults;
