#  Buscar Perfil Github
##### Este é um projeto desenvolvido para o desafio técnico Frontend, trata-se de um buscador de perfil usando a API do Github.

Você pode visualizar o projeto [aqui](https://buscar-perfil-github-zeta.vercel.app) ou visitando o link: https://buscar-perfil-github-zeta.vercel.app.

## Projeto desenvolvido utilizando as seguintes tecnologias
  - `React`
  - `Typescript`
  - `Next`
  - `Tailwind CSS`
  - `TanStack React Query`

*Este projeto foi inicializado com [Next](https://nextjs.org/docs/14/) na versão 14 utilizando o diretório app.*

## Estrutura do Projeto
#### A estrutura do projeto é organizada da seguinte forma, utilizando o padrão de pastas do Next.js(App):

```
GitHub-Profile
├── public
│   ├── assets
│   │   ├── Imagens e ícones
├── src
│   ├── app
│   │   ├── Rotas, páginas e utilitários do Next
│   ├── components
│   │   ├── Componentes reutilizáveis
│   ├── contexts
│   │   ├── Contextos para gerenciamento de estado
│   ├── layouts
│   │   ├── Layouts da aplicação
│   ├── requests
│   │   ├── Requisições para a API
```

## Funcionalidades

A aplicação faz a busca de um perfil no Github através do nome de usuário informado pelo usuário.

Primeiro ela armazena o nome do usuário, que o usuário informou, em um contexto para que demais componentes possam acessa-ló, com esse valor no componente [CardUser](https://github.com/matheusdsilva01/buscar-perfil-github/blob/main/src/components/CardUser.tsx) é feito uma requisição para a API do Github usando o Tanstack React Query para gerenciamento do HTTP state, com os dados retornados da requisição, o componente exibe a foto e bio do perfil buscado.

- **Busca de perfil**: O usuário pode buscar perfis do Github através do seu nome de usuário.
- **Exibição de informações**: A aplicação exibe a imagem e bio do perfil buscado.
- **Tratamento de erros**: A aplicação lida com erros na busca.

A aplicação é responsiva e se adapta a diferentes tamanhos de tela.

## Visualização do Projeto
Para visualizar o projeto localmente, siga as instruções abaixo.

1. Clone o repositório:

```bash
git clone https://github.com/matheusdsilva01/buscar-perfil-github
```

2. Instale as dependências: 

```bash
npm install
```

3. Após a instalação das dependências, execute o comando abaixo para iniciar o projeto localmente na porta [3000](http://localhost:3000):

```bash
npm run dev
```

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm install`

Para instalação de todas as dependências necessárias para funcionamento do projeto.

### `npm run dev`

Executa o aplicativo:\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.\
A página será recarregada se você fizer edições no código.

### `npm run build`

Constrói o aplicativo para produção na pasta `.next`.\
Ele agrupa corretamente o React no modo de produção e otimiza o build para obter o melhor desempenho.

### `npm start`

Inicia o aplicativo em produção.\
O aplicativo será servido em [http://localhost:3000](http://localhost:3000).