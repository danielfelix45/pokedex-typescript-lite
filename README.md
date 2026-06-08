# Pokédex TypeScript Lite

## Sobre o Projeto

O Pokédex TypeScript Lite é uma aplicação desenvolvida em Node.js com TypeScript que realiza consultas na PokeAPI e permite organizar Pokémon em um catálogo local durante a execução do programa.

O objetivo é praticar conceitos fundamentais de desenvolvimento back-end, integração com APIs externas, Programação Orientada a Objetos, tipagem com TypeScript, tratamento de erros e versionamento com Git/GitHub.

---

## Objetivo

Este projeto foi desenvolvido para praticar os seguintes conceitos:

- Node.js
- TypeScript
- Interfaces e Tipagem
- Classes e Orientação a Objetos
- Async/Await
- Promises
- Fetch API
- Tratamento de Erros
- Arrays e Métodos de Array
- Git e GitFlow
- Organização de Projeto em Camadas

---

## Tecnologias Utilizadas

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub
- Trello

---

## Estrutura do Projeto

```txt
pokedex-typescript-lite
│
├── src
│   ├── controllers
│   │   └── TerminalController.ts
│   │
│   ├── models
│   │   ├── Pokemon.ts
│   │   └── CustomErrors.ts
│   │
│   ├── services
│   │   ├── PokeApiService.ts
│   │   └── CatalogoPokemon.ts
│   │
│   ├── utils
│   │   └── textFormatters.ts
│   │
│   └── main.ts
│
├── pc_box.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## Pré-requisitos

Antes de executar o projeto é necessário possuir:

- Node.js
- npm
- Git

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/danielfelix45/pokedex-typescript-lite.git
```

Acesse a pasta:

```bash
cd pokedex-typescript-lite
```

Instale as dependências:

```bash
npm install
```

---

## Como Executar

Modo desenvolvimento:

```bash
npm run dev
```

Compilar o projeto:

```bash
npm run build
```

---

## Funcionalidades

- Buscar Pokémon por nome ou ID
- Consumir dados da PokeAPI
- Tratar erros de Pokémon inexistente
- Mapear resposta da API para objeto simplificado
- Adicionar Pokémon ao catálogo
- Impedir Pokémon duplicados
- Listar Pokémon cadastrados
- Remover Pokémon por ID
- Exibir mensagens amigáveis no terminal

---

## Conceitos Aplicados

### Interfaces

Foram utilizadas interfaces para representar:

- PokemonResumo
- PokemonApiResponse

Garantindo tipagem dos dados consumidos da API e utilizados pela aplicação.

### Classes

Foi utilizada a classe:

- CatalogoPokemon

Responsável por armazenar e manipular os Pokémon do catálogo.

### Async/Await e Promises

A comunicação com a PokeAPI é realizada utilizando:

```ts
await fetch(...)
```

com tratamento de erros utilizando:

```ts
try/catch
```

### Métodos de Array

Métodos utilizados:

- map()
- some()
- filter()
- forEach()

---

## Exemplos de Execução

### Busca válida

**Entrada:**

```txt
pikachu
```

**Saída:**

```txt
[OK] Pokémon encontrado: pikachu

#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
```

---

### Busca inválida

**Entrada:**

```txt
pokemon-inexistente
```

**Saída:**

```txt
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

---

### Duplicidade

**Entrada:**

```txt
adicionar pikachu duas vezes
```

**Saída:**

```txt
[AVISO] pikachu já está no catálogo.
```

---

### Remoção

**Entrada:**

```txt
remover ID 25
```

**Saída:**

```txt
[OK] Pokémon removido do catálogo.
```

---

## GitFlow Utilizado

Branches utilizadas:

```txt
main
develop
feature/model-pokemon
feature/custom-errors
feature/poke-api-service
feature/catalogo
feature/main
```

---

## Kanban

Link do Trello:

```txt
https://trello.com/b/qrNEMRyz/meu-quadro-do-trello
```

---

## Repositório GitHub

Link do projeto:

```txt
https://github.com/danielfelix45/pokedex-typescript-lite
```

---

## Melhorias Futuras

- Persistência dos dados em pc_box.json
- Menu interativo via terminal
- Exibição de HP, Attack e Defense
- Filtros por tipo de Pokémon
- Busca múltipla de Pokémon
- Integração com banco de dados
- Criação de API REST com Express

```

```
