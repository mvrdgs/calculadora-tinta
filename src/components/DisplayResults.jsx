import React from 'react';
import {
  arrayOf, string, objectOf, func,
} from 'prop-types';
import '../styles/DisplayResults.css';

function DisplayResults(props) {
  const { results, setResults } = props;
  const [totalArea, suggestedCans] = results;
  const canQuantities = suggestedCans && Object.values(suggestedCans);
  const canSizes = suggestedCans && Object.keys(suggestedCans);

  return (
    <div className="results-container">
      <div className="result-message">
        A área total a ser pintada será de
        {` ${totalArea} `}
        metros quadrados.
      </div>
      <div>
        Sugerimos utilizar:
        { canSizes.map((size, index) => (
          <div key={size}>
            {` ${canQuantities[index]} ${canQuantities[index] > 1 ? 'latas' : 'lata'} de ${size}L`}
          </div>
        )) }
      </div>
      <button
        className="button"
        type="button"
        onClick={() => setResults([])}
      >
        Retornar
      </button>
    </div>
  );
}

DisplayResults.propTypes = {
  result: arrayOf([string, objectOf(string)]),
  setResults: func,
}.isRequipred;

export default DisplayResults;
