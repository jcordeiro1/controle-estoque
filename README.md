# Controle de Estoque - Arquitetura em Camadas (TypeScript)

Este projeto é uma simulação de um sistema de controle de estoque simples, desenvolvido com **TypeScript** e baseado na arquitetura em **camadas**. O objetivo é demonstrar a separação de responsabilidades, uso de abstrações (interfaces), injeção de dependência e organização de código limpo conforme boas práticas.

## 📁 Estrutura de Pastas

```
src/
├── controller/                 # Camada de Apresentação
│   ├── produto.controller.ts
│   └── produto-controller.interface.ts
├── business/                   # Camada de Negócios
│   ├── produto.service.ts
│   └── produto-service.interface.ts
├── persistencia/              # Camada de Persistência
│   ├── produto.repository.ts
│   └── repository.interface.ts
├── model/                     # Entidades e DTOs
│   ├── produto.ts
│   └── produto.dto.ts
└── index.ts                   # Ponto de entrada para simulação
```

## ✅ Funcionalidades

- Cadastrar um novo produto com nome, quantidade e preço.
- Validar se o produto já está cadastrado.
- Simular entrada e saída de produtos (com validações de estoque).
- Exibir os produtos cadastrados no terminal.

## 🧠 Conceitos Aplicados

- **Arquitetura em Camadas**: Separação entre apresentação, regras de negócio e persistência.
- **Injeção de Dependência**: `ProdutoController` injeta o `ProdutoService`, que por sua vez injeta o `ProdutoRepository`.
- **Interfaces**: Usadas para definir contratos das camadas, facilitando a manutenção e testabilidade.
- **Armazenamento em Memória**: Simulação do repositório com array local, sem uso de banco de dados.

## ▶️ Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Compile o TypeScript:
```bash
npx tsc
```

3. Execute o projeto:
```bash
node dist/index.js
```

> Obs: Configure o `tsconfig.json` para gerar a saída em `dist/`.

## 📌 Requisitos

- Node.js e npm instalados
- TypeScript (`npm install -g typescript`)

---

Desenvolvido com foco educacional para a disciplina de **Arquitetura de Software**.

