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

describe('2 - Testa se a aplicação gera os erros corretamente', () => {
  it('Deve informar altura inválida quando houver porta em parede com menos de 1.1 metros', () => {
    const { getAllByRole, getByText } = renderTest(<Calculator />);

    const inputs = getAllByRole('textbox');

    fireEvent.change(inputs[3], { target: { value: 1 } });

    const errorMessage = getByText(/\*a parede deve ser no mínimo 30 centímetros mais alta que a porta/i);

    expect(errorMessage).toBeInTheDocument();
  });

  it('Deve informar largura inválida quando houver janela em parede com menos de 2.3 metros', () => {
    const { getAllByRole, getByText } = renderTest(<Calculator />);

    const inputs = getAllByRole('textbox');

    fireEvent.change(inputs[2], { target: { value: 1 } });

    const errorMessage = getByText(/\*A parede deve ser no mínimo 30 centímetros mais larga que a janela/i);

    expect(errorMessage).toBeInTheDocument();
  });

  it('Deve informar que portas e janelas ocupam mais de 50% da área da parede', () => {
    const { getAllByRole, getByText } = renderTest(<Calculator />);

    const inputs = getAllByRole('textbox');

    fireEvent.change(inputs[8], { target: { value: 5 } });
    fireEvent.change(inputs[9], { target: { value: 2 } });
    fireEvent.change(inputs[10], { target: { value: 2 } });
    fireEvent.change(inputs[11], { target: { value: 1 } });

    const errorMessage = getByText(/\*Portas e janelas podem ocupar no máximo 50% da área da parede/i);

    expect(errorMessage).toBeInTheDocument();
  });

  it('Deve informar que paredes não devem possuir menos de 1 metro de largura', () => {
    const { getAllByRole, getByText } = renderTest(<Calculator />);

    const inputs = getAllByRole('textbox');

    fireEvent.change(inputs[8], { target: { value: 0.5 } });

    const errorMessage = getByText(/\*Largura não pode ser inferior a 1 metro/i);

    expect(errorMessage).toBeInTheDocument();
  });

  it('Deve informar que paredes não devem possuir menos de 1 metro de largura', () => {
    const { getAllByRole, getByText } = renderTest(<Calculator />);

    const inputs = getAllByRole('textbox');

    fireEvent.change(inputs[9], { target: { value: 0.5 } });

    const errorMessage = getByText(/\*Altura não pode ser inferior a 1 metro/i);

    expect(errorMessage).toBeInTheDocument();
  });

  it('Deve informar que paredes não devem possuir mais de 15 metros de largura', () => {
    const { getAllByRole, getByText } = renderTest(<Calculator />);

    const inputs = getAllByRole('textbox');

    fireEvent.change(inputs[8], { target: { value: 16 } });

    const errorMessage = getByText(/\*Largura não pode ser superior a 15 metros/i);

    expect(errorMessage).toBeInTheDocument();
  });

  it('Deve informar que paredes não devem possuir menos de 15 metros de altura', () => {
    const { getAllByRole, getByText } = renderTest(<Calculator />);

    const inputs = getAllByRole('textbox');

    fireEvent.change(inputs[9], { target: { value: 16 } });

    const errorMessage = getByText(/\*Altura não pode ser superior a 15 metros/i);

    expect(errorMessage).toBeInTheDocument();
  });
});

describe('3 - Testa se o formulário não pode ser submetido quando houver erros', () => {
  it('Deve informar que paredes não devem possuir menos de 1 metro de largura', () => {
    const { getAllByRole, queryByText } = renderTest(<Calculator />);

    const inputs = getAllByRole('textbox');

    fireEvent.change(inputs[9], { target: { value: 0.5 } });

    const errorMessage = queryByText(/\*Sugerimos utilizar:/i);

    expect(errorMessage).toBeNull();
  });
});
