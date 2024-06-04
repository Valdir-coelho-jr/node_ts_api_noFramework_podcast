## API de Podcasts (DIO - Desafio Node.js)

Este projeto é uma API RESTful para gerenciar informações sobre podcasts, desenvolvida durante o curso de formação Node.js da DIO, acompanhando as video aulas do Felipão. O objetivo do projeto é demonstrar a construção de uma API simples e funcional utilizando Node.js, TypeScript e outras bibliotecas, além de atender aos requisitos do desafio proposto no curso.

### Descrição

A API permite as seguintes operações:

* **Listar todos os episódios:** Retorna uma lista com todos os episódios disponíveis, incluindo informações como nome do podcast, título do episódio, ID do vídeo e categorias.
* **Filtrar episódios por nome do podcast:** Permite filtrar a lista de episódios por um nome de podcast específico.

### Funcionalidades

* **Leitura de dados:** A API lê os dados dos podcasts de um arquivo JSON (`podcasts.json`).
* **Validação de dados:** A API valida os dados recebidos e retorna mensagens de erro caso ocorram erros de validação.
* **Gerenciamento de status HTTP:** A API utiliza códigos de status HTTP para indicar o sucesso ou falha das requisições.
* **Formatação da resposta:** As respostas da API são formatadas em JSON.

### Implementação

O projeto foi implementado com as seguintes tecnologias:

* **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript.
* **[TypeScript](https://www.typescriptlang.org/):** Linguagem de tipagem estática para JavaScript.
* **[Express](https://expressjs.com/):** Framework web para Node.js (utilizado apenas no repositório do Felipão, nesse projeto a API é construida com as bibliotecas "http" e "fs").
* **[JSON](https://www.json.org/):** Formato de dados utilizado para armazenar e trocar informações.

### Estrutura do projeto

O projeto está organizado da seguinte forma:

* **controllers:** Contém os controladores da API, que recebem as requisições e delegam o processamento para os serviços.
* **models:** Contém as interfaces que definem os modelos de dados utilizados na API.
* **repositories:** Contém os repositórios, responsáveis por acessar os dados.
* **routes:** Contém as rotas da API, que definem os endpoints e os métodos HTTP que podem ser utilizados.
* **services:** Contém os serviços da API, responsáveis pela lógica de negócio.
* **utils:** Contém as funções utilitárias, como os códigos de status HTTP, tipos de conteúdo e outros.
