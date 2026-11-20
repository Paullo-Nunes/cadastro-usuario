# Cadastro de Usuário

Aplicação web para cadastrar, listar e excluir usuários. O projeto é dividido em um frontend React e uma API Node.js que persiste os dados no MongoDB.

## Funcionalidades

- Cadastro de usuário com nome, idade e e-mail.
- Listagem dos usuários cadastrados.
- Exclusão de usuários.

## Tecnologias

- **Frontend:** React, Vite, React Router, Styled Components e Axios.
- **Backend:** Node.js, Express, Mongoose e MongoDB.

## Requisitos

- Node.js e npm.
- Uma instância MongoDB local ou uma conta MongoDB Atlas.

## Configuração

Na raiz do repositório, instale as dependências do frontend:

```bash
npm install
```

Crie o arquivo `.env.local` na raiz do projeto e configure o endereço da API:

```env
VITE_API_URL=http://localhost:3000
```

Instale as dependências do backend:

```bash
cd backend
npm install
```

Crie `backend/.env` com a URI de conexão do MongoDB e a porta da API:

```env
MONGODB_URI=mongodb+srv://USUARIO:SENHA@SEU_CLUSTER/SEU_BANCO
PORT=3000
```

Substitua os valores de exemplo pelos dados do seu banco. No MongoDB Atlas, configure também um usuário de banco de dados e autorize o IP que fará a conexão.

> **Importante:** nunca coloque a URI do MongoDB no frontend, nem publique credenciais no GitHub. Os arquivos `.env` e `.env.local` devem permanecer fora do controle de versão.

## Executar localmente

Inicie o backend em um terminal, a partir da raiz do projeto:

```bash
cd backend
npm run dev
```

Quando a conexão com o MongoDB for estabelecida, a API inicia na porta `3000`.

Em outro terminal, na raiz do projeto, inicie o frontend:

```bash
npm run dev
```

Abra no navegador o endereço informado pelo Vite, normalmente `http://localhost:5173`. Se essa porta já estiver ocupada, o Vite poderá escolher outra. Nesse caso, atualize a origem permitida no `cors` de `backend/server.js` para corresponder à URL do frontend.

O backend não serve a interface visual. Ele recebe as requisições do frontend em `http://localhost:3000`.

## Rotas da API

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/usuario` | Retorna a lista de usuários. |
| `POST` | `/usuario` | Cadastra um usuário. Envie `name`, `age` e `email` no corpo JSON. |
| `DELETE` | `/usuario/:id` | Exclui o usuário com o ID informado. |

Os documentos são armazenados na coleção MongoDB `usuarios`.

## Rotas do frontend

| Rota | Página |
| --- | --- |
| `/` | Formulário de cadastro. |
| `/lista-de-usuarios` | Lista de usuários cadastrados. |

## Verificações

Na raiz do projeto, execute o lint e o build do frontend:

```bash
npm run lint
npm run build
```

Para produção, hospede o backend separadamente, configure `VITE_API_URL` com a URL pública da API e permita no CORS a origem pública do frontend. O frontend usa o caminho-base `/cadastro-usuario/` no build; o backend não é hospedado pelo GitHub Pages.
