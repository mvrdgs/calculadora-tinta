# Calculadora de tinta para pintura de salas

## Objetivo do Projeto

### Criar uma aplicação que

- Permita calcular a quantidade de tinta necessária para pintar uma sala
- Tenha uma arquitetura que permita crescimento e futuras implementações

## Descrição do projeto
A aplicação foi desenvolvida utilizando Programação Funcional e Hooks. Foi incluído React Router para permitir navegação entre páginas em futuras implementações.
O padrão de código adotado foi o Airbnb e possui Eslint configurado para garantir sua aplicação.
Foi utilizada a biblioteca React Testing Library para aplicação de testes.

## Funcionamento

- As paredes pode ter entre 1 a 15 metros de altura e largura
- As janelas possuem valor padrão de 2,00 x 1,20 metros
- As portas possuem valor padrão de 0,80 x 1,90 metros
- Cada litro de tinta é capaz de pintar 5 metros quadrados
- Piso e teto não são considerados
- O total da área de portas e janelas não pode exceder 50% da área de cada parede
- As paredes devem ter no mínimo 30 centímetros a mais de altura que portas e janelas, caso possuam alguma
- As paredes devem ser no mínimo 30 centímetros a mais de largura que a janela, caso possuam alguma

## Requisitos do Sistema

- [Node.js](https://nodejs.org/en/)

## Como rodar localmente
- Faça o clone do projeto
- Entre na pasta do projeto
- Instale as dependências:
```
npm install
```
- Utilize o script **start**
```
npm start
```

## Como rodar testes

- Acesse a pasta do projeto pelo terminal
- Utilize o seguinte script:

```
npm test
```

## Deploy da aplicação

- [Calculadora de tinta para pintura de salas](https://calculadora-tintas.herokuapp.com/calculadora)

## Estrutura da aplicação

- Página inicial (não implementada, redireciona para a página da calculadora)
- Página da calculadora

## Dependências
- [React Router](https://reactrouter.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Eslint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [history](https://www.npmjs.com/package/history)
- [prop-types](https://www.npmjs.com/package/prop-types)
