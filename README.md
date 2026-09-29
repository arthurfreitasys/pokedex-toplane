# TopLane - Pokédex de Campeões do League of Legends

Aplicação web de página única (SPA) que apresenta os campeões da **Top Lane** (Rota superior do mapa do jogo) de *League of Legends* em formato de Pokédex. Cada campeão aparece em um card com imagem, região de Runeterra (Mapa do universo do game) e classe, e pode ser marcado como favorito.

Projeto desenvolvido como avaliação prática da disciplina de Desenvolvimento para Aplicativos Moveis.

🔗 **Aplicação publicada:** [TopLane - Pokédex](https://pokedex-toplane.vercel.app/)

## Funcionalidades

- Página inicial de boas-vindas com acesso à lista de campeões
- Lista com 49 campeões da Top Lane, gerada dinamicamente a partir de um arquivo JSON
- Cards com nome, região, classe e imagem do campeão
- Botão de **favoritar**, com contador de favoritos
- Navegação entre páginas sem recarregar a tela, com botão **Voltar**
- Layout responsivo com Flexbox e tema visual inspirado em Runeterra

## Tecnologias

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router DOM](https://reactrouter.com/) (`BrowserRouter`, `Routes`, `Route`, `Link`, `useNavigate`)
- CSS
- Deploy na [Vercel](https://vercel.com/)

## Conceitos aplicados

| Conceito | Onde aparece |
|---|---|
| Componentização | `Header`, `Footer`, `Card`, `BackButton` em pastas separadas |
| Props | `Campeoes` envia nome, região, classe, imagem, estado de favorito e função de clique para o Card |
| Renderização de listas | `.map()` sobre o JSON |
| Estado reativo | `useState` guarda a lista de favoritos e atualiza a tela no clique (`onClick`) |
| Roteamento SPA | Rotas `/` e `/campeoes` com `react-router-dom` |
| Estilização | Flexbox, variáveis CSS e arquivos de estilo por componente |

## Estrutura do projeto

```
src/
├── components/
│   ├── BackButton/
│   ├── Cards/
│   ├── Footer/
│   └── Header/
├── data/
│   └── campeoes.json
├── pages/
│   ├── Campeoes.jsx
│   └── Home.jsx
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) (versão LTS).

```bash
# 1. Clonar o repositório
git clone https://github.com/arthurfreitasys/pokedex-toplane.git

# 2. Entrar na pasta do projeto
cd pokedex-toplane

# 3. Instalar as dependências
npm install

# 4. Iniciar o servidor de desenvolvimento
npm run dev
```

Depois, abra o endereço exibido no terminal (por padrão, `http://localhost:5173`).

## Deploy

O projeto é publicado na Vercel a partir deste repositório. O arquivo `vercel.json` redireciona todas as rotas para o `index.html`, 
permitindo que o React Router funcione ao abrir uma URL como `/campeoes` diretamente.

## Créditos

- Imagens dos campeões: [Data Dragon](https://developer.riotgames.com/docs/lol#data-dragon), CDN público da Riot Games.
- *League of Legends* e todos os personagens são propriedade da Riot Games. Este é um projeto acadêmico, sem fins comerciais e sem vínculo com a Riot Games.

## Autor

**Arthur Freitas** - Fatec Mogi Mirim
