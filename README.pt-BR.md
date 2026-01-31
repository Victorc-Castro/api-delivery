## 📦 Delivery API

[🇺🇸 Read this documentation in English](./README.md)

Esta API foi desenvolvida para gerenciar o fluxo de entregas de pedidos, permitindo o controle de usuários com diferentes perfis (roles), pedidos, status de delivery e o histórico de movimentações de cada pedido.

A aplicação trabalha com dois perfis principais:

Vendedor: responsável por criar e enviar pedidos para os clientes.

Cliente: que pode visualizar e acompanhar seus pedidos.

Cada pedido pertence a um usuário e possui um status de entrega, como:

processing

shipped

delivered

Além disso, a API registra as movimentações do pedido (ex: produto saiu para entrega), garantindo rastreabilidade completa do processo.

## 👩‍💻 Aprendizados

Durante o desenvolvimento do Delivery API, foram aplicados diversos conceitos fundamentais para APIs modernas e escaláveis. Entre os principais aprendizados estão:

--> 1. Controle de Acesso com User Roles
Implementação de perfis de usuário (vendedor e cliente), definindo permissões e acessos específicos para cada tipo de usuário dentro da aplicação.

--> 2. Validação de Dados com Zod
Criação de schemas para validação de entradas, garantindo consistência, segurança e confiabilidade dos dados trafegados pela API.

--> 3. Modelagem de Dados com Prisma ORM
Definição de modelos relacionais utilizando PostgreSQL, incluindo relacionamentos entre usuários, pedidos e movimentações de delivery.

--> 4. Gerenciamento de Status e Fluxo de Entregas
Implementação do ciclo de vida de um pedido, desde a criação até a entrega final, com controle de estados e histórico de eventos.

--> 5. Testes Automatizados com Jest
Criação de testes automatizados para validação das regras de negócio, aumentando a confiabilidade e facilitando a manutenção da aplicação.

--> 6. Ambiente Containerizado com Docker
Configuração do banco de dados com Docker Compose, facilitando a padronização do ambiente de desenvolvimento.

## 💻 Estrutura do Projeto
API-DELIVERY

├── node_modules/            # Dependências (ignorado pelo Git) 

├── prisma/                  # Schema, migrations e client do Prisma

├── src/                     # Código fonte do backend

├── .env                     # Variáveis de ambiente (ignorado pelo Git)

├── .env-example             # Exemplo de variáveis de ambiente

├── .gitignore

├── README.md

├── README.pt-BR.md

├── docker-compose.yml       # Configuração do PostgreSQL com Docker

├── jest.config.js           # Configuração do Jest

├── package-lock.json

├── package.json

├── request_insomnia.yaml    # Coleção de requisições para teste da API

└── tsconfig.json            # Configurações do TypeScript

## 💾 Pré-requisitos

--> Node.js

--> npm ou yarn

--> Docker e Docker Compose

--> Insomnia ou Postman (para testar os endpoints)

## 🚀 Como Rodar o Projeto

--> Clone o repositório

--> Instale as dependências

--> Suba o banco de dados com Docker

--> Execute as migrations do Prisma

--> Inicie o servidor em modo desenvolvimento

A API estará disponível na porta configurada do projeto.

## 🧪 Testes Automatizados

O projeto utiliza Jest para testes automatizados.

--> Executar testes em modo watch de acordo com os scripts configurados.

## 🛠️ Testes da API com Insomnia

--> Localize o arquivo request_insomnia.yaml

--> Importe no Insomnia

--> Todas as requisições estão configuradas para a URL local da API

Isso permite testar facilmente os fluxos de:

criação de usuários

autenticação

pedidos

status de delivery

movimentações

## ⚙️ Tecnologias Utilizadas

--> Node.js

--> TypeScript

--> PostgreSQL

--> Prisma ORM

--> Zod

--> Docker & Docker Compose

--> Jest

--> Git & GitHub
