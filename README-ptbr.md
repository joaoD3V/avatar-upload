
[🇧🇷 Leia esta página em português](http....README-ptbr.md)
[🇺🇸 Read this page in English](http....README.md)

-------------
##### 🇧🇷 Croct - Desafio Front End

# Avatar Upload

Sistema Web que permite que usuários possam subir imagens de suas organizações. Além disso, os usuários podem fazer edições, ajustando as imagens de acordo com o corte do zoom.

------------

### Overview

Subindo, ajustando e salvando a imagem:

![Subindo, ajustando e salvando](https://media.giphy.com/media/WD3hedWHFFbdZlimRE/giphy.gif)

Erro ao subir arquivo com a extensão incorreta:

![Error](https://media.giphy.com/media/c8GYWyLeCjDETISMw8/giphy.gif)

Cancelando a edição e retornando para o estado inicial:

![Error](https://media.giphy.com/media/Gv9JYLu9YjFsSH5eKY/giphy.gif)

------------


### Principais tecnologias usadas durante o desafio

- **ReactJS**: lib para a construção de interfaces frontend.
- **NextJS**: framework React pronto pra produção.
- **TypeScript**: superset para o JavaScript.
- **Styled Components**: para a estilização css dos componentes.
-   **ContextAPI**: para o compartilhamento de estado entre componentes.
- **Jest e Testing Library**: para a realização de testes unitários automatizados.

------------

### Testes Automatizados

[Imagem dos testes](https://imgur.com/ZkjXoew)


File                      | % Stmts | % Branch | % Funcs | % Lines |
--------------------------|---------|----------|---------|---------|
All files                 |      94 |    78.26 |      88 |      94 |

------------

### Performance da aplicação

[Imagem do Google LightHouse](https://imgur.com/Ug8kgoC)


| % Performance | % Acessibilidade | % Boas práticas | % SEO |
|---------|----------|---------|---------|
|      88 |    97 |      75 |      90 |

------------

### Melhorias que poderiam ser feitas:
- Realizar testes unitários com as funcionalidades do contexto
- Realizar testes de caixa preta utilizando o Cypress

------------

### Configurações obrigatórias
1. Instale os seguintes plugins no seu editor de código. (Sugestão: VSCode)
 * [ESlint](https://eslint.org/)
 * [EditorConfig](https://editorconfig.org/)
 2. Instale o Node acima da versão 16 e o Yarn acima da versão 1.
 -	[Node (instalação passo-a-passo)](https://www.notion.so/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f)
 -	[Yarn (instalação passo-a-passo)](https://www.notion.so/Instalando-o-Yarn-eca6a13be5b3467d8d2f7be15c60f322)
------------
### Instalação e execução
**Instalação das dependências**
```
yarn
```
Para executar em modo de desenvolvimento:
```
yarn dev
```
Para visualizar os stories no **StoryBook**:
```
yarn storybook
```
Para rodar **todos os testes automatizados**:
```
yarn test
```

------------

### Host

Para ver a aplicação rodando em produção, basta [clicar aqui](https://avatar-upload-joaod3v.vercel.app/).
