import React from 'react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import renderTest from './renderWithRouter';
import Calculator from '../views/Calculator';

const formParameters = [
  12, 5, 2, 2, 15, 1, 1, 0, 5, 15, 0, 2, 14, 3, 0, 0,
];

describe('1 - Testa se a aplicação retornar os valores esperados', () => {
  it('Deve retornar 178.72 de área a ser pintada e as sugestões corretas de latas', () => {
    const { getAllByRole, getByRole, getByText } = renderTest(<Calculator />);

    const inputs = getAllByRole('textbox');
    const submitButton = getByRole('button', { name: /calcular/i });

    inputs.forEach((input, index) => fireEvent.change(input,
      { target: { value: formParameters[index] } }));

    fireEvent.click(submitButton);

    const correctResult = getByText(/178.72 metros/i);
    const paintCanGallon = getByText(/1 lata de 18l/i);
    const paintCanLarge = getByText(/4 latas de 3.6l/i);
    const paintCanMedium = getByText(/1 lata de 2.5l/i);
    const paintCanSmall = getByText(/2 latas de 0.5l/i);

    expect(correctResult).toBeInTheDocument();
    expect(paintCanGallon).toBeInTheDocument();
    expect(paintCanLarge).toBeInTheDocument();
    expect(paintCanMedium).toBeInTheDocument();
    expect(paintCanSmall).toBeInTheDocument();
  });
});
