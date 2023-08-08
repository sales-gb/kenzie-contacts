<h1 align="center">
  <img alt="Kenzie Contacts" title="Kenzie Contacts" src="https://res.cloudinary.com/dhavjx2gp/image/upload/v1691377967/logo-default_kgxhwy.svg" width="300px" />
</h1>

<h1 align="center">
  Kenzie Contacts - API
</h1>

<p align = "center">
  Este é o backend da aplicação Kenzie Contacts - Uma plataforma para gerenciamento de contatos pessoais desenvolvida por mim, aqui na Kenzie! O objetivo dessa API é permitir que os usuários cadastrem e controlem seus contatos de forma eficiente!
</p>

## Configurando o Banco de Dados

O Kenzie Contacts requer um banco de dados para armazenar informações sobre usuários e contatos. Siga estas etapas para configurar o banco de dados:

1. Certifique-se de que você tenha um servidor de banco de dados compatível (como PostgreSQL, MySQL, SQLite, etc.) instalado e em execução em sua máquina.

2. Crie um novo banco de dados para o projeto Kenzie Contacts.

3. Abra o arquivo `.env` na raiz do projeto e configure as variáveis de ambiente relacionadas ao banco de dados de acordo com o servidor que você está usando. Siga os passos do arquivo .env.example e conseguirá rodar o projeto.

<br>

<blockquote> Lembre-se de substituir as variáveis específicas, como `user`, `password` e `db`, pelas informações reais do seu projeto. Como seu nome de usuário, sua senha e o nome do banco de dados que foi criado.</blockquote>

<br>

## Como executar localmente

Para executar o projeto localmente em sua máquina, você precisa ter o Node.js e o npm (Node Package Manager) instalados. Caso ainda não tenha, você pode baixá-los através do site oficial do Node.js: https://nodejs.org/

Siga os passos abaixo para executar o Kenzie Contacts localmente:

1. Clone o repositório:

```bash
git clone CHAVE SSH git@github.com:sales-gb/kenzie-contacts.git
git clone HTTPS LInk https://github.com/sales-gb/kenzie-contacts.git
```

2. Acesse a pasta do projeto:

````
cd kenzie-contacts/back
````

3. Instale as dependências:

````
npm install
````

4. Rode as migrações do TypeORM:

````
npm run typeorm migration:run -- -d src/data-source
````

5. Inicie o servidor:

````
npm run dev
````
<br>

<blockquote> Após executar esses comandos, o servidor estará rodando localmente em http://localhost:3000. Agora você pode realizar as requisições para a API e explorar os endpoints utilizando o Insomnia ou outras ferramentas para testar APIs.

<br>

Lembre-se de que, como o projeto ainda não possui deploy em nenhum lugar, ele será executado apenas em sua máquina local. Caso tenha alguma dúvida ou precise de mais ajuda, estou à disposição! <br></blockquote>

<br>


## **Endpoints**

A API tem um total de 10 endpoints, sendo em volta principalmente do usuário (client) - podendo cadastrar seus contatos e ter total acesso para monitora-los e edita-los. <br/>

<a style="display:flex; justify-content:center" href="https://drive.google.com/file/d/12frK4UGvUcD9-jcgk5xStX5dKG9RBK8m/view?usp=drive_link" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

<blockquote> Para importar o JSON no Insomnia é só clicar no botão "Run in Insomnia". Depois é só seguir os passos que ele irá importar todos os endpoints em seu insomnia.
</blockquote>
 
<br>

A url base da API é http://localhost:3000

## Rotas que não precisam de autenticação

<h2 align ='center'> Criação de usuário </h2>

`POST /clients - FORMATO DA REQUISIÇÃO`

```json
{
  "fullName": "John Doe",
  "email": "john@kenzie.com",
  "phoneNumber": "11223452",
  "password": "1234"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /clients - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": 1,
  "fullName": "John Doe",
  "email": "john@kenzie.com",
  "phoneNumber": "11223452",
  "createdAt": "2023-08-05"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:

Email já cadastrado:

`POST /clients - `
` FORMATO DA RESPOSTA - STATUS 409`

```json
{
  "message": "Email already exists"
}
```

phoneNumber já cadastrado:

`POST /clients - `
` FORMATO DA RESPOSTA - STATUS 409`

```json
{
  "message": "Phone number already exists"
}
```

<h2 align = "center"> Login </h2>

`POST /login - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "john@kenzie.com",
  "password": "1234"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /login - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsaWVudGUyQGtlbnppZS5jb20iLCJpYXQiOjE2OTEyNzI2MjksImV4cCI6MTY5MTM1OTAyOSwic3ViIjoiOCJ9._hwwI7D8J0ItA53Qkq56jSIrS-ORGF47KpfsJK8wLuQ"
}
```

## Rotas que necessitam de autorização

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

Após o usuário estar logado ele consegue cadastrar seus contatos e também gerencia-los da melhor maneira.

<h2 align ='center'> Buscar Perfil do usuário logado (token) </h2>

`GET /clients - FORMATO DA REQUISIÇÃO`

<blockquote>Nas requisições de usuário (clients) apenas é necessário o TOKEN, a aplicação ficará responsável em buscar o id do usuário no token e retorna ele.</blockquote>

<br>

`GET /clients - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "id": 1,
  "fullName": "John Doe",
  "email": "john@kenzie.com",
  "phoneNumber": "11223452",
  "createdAt": "2023-08-05"
}
```

Você também pode atualizar os seus dados através dessa rota:

`PATCH /clients - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "johnDoe@kenzie.com"
}
```

Caso dê tudo certo, a resposta será assim:

`PATCH /clients - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": 1,
  "fullName": "John Doe",
  "email": "johndoe@kenzie.com",
  "phoneNumber": "11223452",
  "createdAt": "2023-08-05"
}
```

Também é possível deletar deletar seu perfil, utilizando este endpoint:

`DELETE /clients`

<blockquote>É NECESSÁRIO QUE TODOS OS CONTATOS ESTEJAM EXCLUIDOS</blockquote> <br>

```
Não é necessário um corpo da requisição.
```

<h2 align ='center'> Criar contatos </h2>

`POST /contacts - FORMATO DA REQUISIÇÃO`

```json
{
  "fullName": "Contato 1",
  "email": "contato1@kenzie.com",
  "phoneNumber": "111236251"
}
```

`POST /contacts - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": 1,
  "fullName": "Contato 1",
  "email": "contato1@kenzie.com",
  "phoneNumber": "111236251",
  "createdAt": "2023-08-07",
  "clientId": 1
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:

Sem token:

`POST /contacts - FORMATO DA RESPOSTA - STATUS 401`

```json
{
  "message": "jwt expired"
}
```

Email já cadastrado:

`POST /contacts - `
` FORMATO DA RESPOSTA - STATUS 409`

```json
{
  "message": "Email already exists"
}
```

phoneNumber já cadastrado:

`POST /contacts - `
` FORMATO DA RESPOSTA - STATUS 409`

```json
{
  "message": "Phone number already exists"
}
```

Você também pode atualizar os contatos através dessa rota:

`PATCH /contacts/:contactId - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "kenzinho@kenzie.com"
}
```

Caso dê tudo certo, a resposta será assim:

`PATCH /contacts/:contactId - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": 1,
  "fullName": "Contato 1",
  "email": "kenzinho@kenzie.com",
  "phoneNumber": "111236251",
  "createdAt": "2023-08-07"
}
```

Também é possível deletar um contato, utilizando este endpoint:

`DELETE /contacts/:contactId`

```
Não é necessário um corpo da requisição.
```
<br>

<h2 align ='center'> Listar contatos </h2>

`GET /contacts - FORMATO DA REQUISIÇÃO`

<blockquote>Nas requisições de usuário (clients) apenas é necessário o TOKEN, a aplicação ficará responsável em buscar o id do usuário no token e retorna ele.</blockquote>

<br>

`GET /contacts - FORMATO DA RESPOSTA - STATUS 200`

```json
[
    {
    "id": 1,
    "fullName": "Contato 1",
    "email": "kenzinho@kenzie.com",
    "phoneNumber": "111236251",
    "createdAt": "2023-08-07"
  },
	{
		"id": 2,
		"fullName": "Contato 2",
		"email": "contato2@kenzie.com",
		"phoneNumber": "34872478643",
		"createdAt": "2023-08-07"
	},
	{
		"id": 24,
		"fullName": "Contato 3",
		"email": "contato3@kenzie.com",
		"phoneNumber": "432764324",
		"createdAt": "2023-08-07"
	},
	{
		"id": 25,
		"fullName": "Contato 4",
		"email": "contato4@kenzie.com",
		"phoneNumber": "364847365",
		"createdAt": "2023-08-07"
	}
]
```

Você também pode listar apenas um contato através dessa rota:

`GET /contacts/:contactId - FORMATO DA REQUISIÇÃO`

<br>

`GET /contacts/contactId - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "id": 1,
  "fullName": "Contato 1",
  "email": "kenzinho@kenzie.com",
  "phoneNumber": "111236251",
  "createdAt": "2023-08-07"
},
```

---

Feito com ♥ by sales-gb :wave:
