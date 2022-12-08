# Blog [Back-End]

Projeto pessoal para a criação de um blog público com controle de usuários dentro da plataforma.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento.

## 📋 Pré-requisitos
 - [Node](https://nodejs.org/en/) na versão 16.
 - IDE da sua escolha.
 - Docker (Opcional).
 - Ferramenta para banco de dados de sua preferência.

## 🔧 Instalação

>Antes de escolher a opção que vai rodar seu projeto localmente, não esqueça de criar o arquivo .env com as informações do banco de dados, qual porta o servidor será levantado e escolha da sua JWT_SECRET.

  ### 👉 Com Docker
<details>
  > Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências com `npm install`. (Instale dentro do container)
  
  - Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  - O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.
</details>
<br />

  ### 👉 Sem Docker
<details>
  > Instale com `npm install`
  
  - Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

</details>
<br/>

## 🛠️ Construído com

* [Node.js](https://nodejs.org/en/) - Runtime Javascript
* [Sequelize](https://sequelize.org/) - ORM para fazer as transações do banco de dados
* [JWT](https://jwt.io/introduction) - Para tráfego de informações sensiveis
* [md5](https://www.md5hashgenerator.com/) - Para salvar a senha com segurança no banco de dados
* [Swagger](https://swagger.io/) - Para documentação da API
* [ESLint](https://eslint.org/) - Para padronizar a estrutura do código

## :play_or_pause_button: Comandos Importantes
 * ``` npm run prestart ``` para fazer a criação das tabelas do banco de dados.
 * ``` npm start ``` ou ``` npm run debug``` para levantar o servidor localmente.
 * ``` npm run drop ``` para dropar as tabelas do banco de dados.
 * ``` npm run seed ``` para popular as tabelas com os arquivos da pasta seeders.
 * ``` npm run start-gendoc ``` para atualizar a documentação do swagger.
  * > Para acessar a documentação do swagger basta acessar http://localhost:${Sua porta}/doc/

## Utilidades
  > Caso queira fazer uso da API estarei deixando uma collection do POSTMAN com todas as operações presentes.
  [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/94da45c1d642150d6a1f?action=collection%2Fimport)
## 📌 Versão

Está sendo utilizado [git](https://git-scm.com/) para controle de versão. Para as versões disponíveis.

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Vinicius Aquino** - *Desenvolvedor Full-Stack* - [GitHub](https://github.com/CandidoVinii)


---
