# Orange Evolution Frontend 🍊

Bem-vindo ao repositório do projeto "Orange Evolution App"

Clique [aqui](orange-evolution-front.pages.dev/) para ver.

Faça **login** no app com as seguinte credencial:

```
user: liasousa@email.com
password: 123456
```

## Como rodar este projeto localmente

Clone o repositório:

`git clone git@github.com:andersonfpcorrea/orange-evolution-front.git`

`cd orange-evolution-front`

Antes de rodar o projeto, configure um arquivo `.env` de acordo com o arquivo `.env.example`.

Para ter acesso à API você tem duas opções:

1 - Rodar localmente o projeto [orange-evolution-back](https://github.com/andersonfpcorrea/orange-evolution-back): nesse caso, o arquivo `.env` ficará assim:

```
REACT_APP_PROTOCOL=http
REACT_APP_URL=localhost:3001
```

2 - Usar diretamente a API através deste [link](https://orange-evolution.up.railway.app/), e nesse caso o `.env` será:

```
REACT_APP_PROTOCOL=https
REACT_APP_URL=orange-evolution.up.railway.app

```

O React automaticamente dá acesso a essas variáveis de ambiente, basta deixar o nome delas começando com `REACT_APP_`

Para iniciar este projeto basta rodar o seguinte comando na raiz do diretório:

```
npm start
```

## Setup do projeto

- React v.18.2.0
- React Router v6.4.3
- TailwindCSS v3.2.2
- Framer Motion v7.6.5
- Axios v.1.1.3
- ESLint v8.27.0
- commitlint v17.2.0
- Husky v8.0.2
- semantic-release v19.0.5
