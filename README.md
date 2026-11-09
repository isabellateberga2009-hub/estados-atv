
# API de Consulta de Capitais

## Sobre o projeto

Esta API permite consultar as capitais dos estados brasileiros
utilizando suas siglas.

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express

## Como executar o projeto

1. Instale as dependências:

npm install

2. Compile o projeto:

npm run build

3. Inicie o servidor:

npm start

## Endereço da API

GET http://localhost:3000/estados/:sigla

## Exemplos

São Paulo:
http://localhost:3000/estados/SP

Rio de Janeiro:
http://localhost:3000/estados/RJ

Minas Gerais:
http://localhost:3000/estados/MG

## Resposta de erro

Quando a sigla não existir, a API retorna o código 404.

{
  "erro": "Estado não encontrado."
}
