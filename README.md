# TNT Concursos

Plataforma web para resolução de questões de concursos públicos com integração de Inteligência Artificial para auxiliar os estudantes durante o processo de aprendizagem.

Além da resolução das questões, a IA fornece explicações detalhadas sobre cada alternativa, justificando tanto as respostas corretas quanto as incorretas, tornando o estudo mais eficiente e didático.

---

## Tecnologias

### Front-end
- React
- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI

### Gerenciamento de Estado
- Zustand

### Requisições e Cache
- TanStack Query (React Query)

### Back-end
- Node.js
- API REST

### Banco de Dados
- PostgreSQL
- Drizzle ORM

### Autenticação
- JWT

### Inteligência Artificial
- Integração com APIs de IA para:
  - Explicação das alternativas corretas;
  - Justificativa das alternativas incorretas;
  - Auxílio ao aprendizado.

---

# Arquitetura

O projeto segue uma arquitetura em camadas, buscando desacoplamento entre interface, regras de negócio e acesso aos dados.

Principais padrões utilizados:

- Componentização com React
- Separação entre UI e lógica de negócio
- Hooks customizados
- Repository Pattern para acesso aos dados
- Services para regras de negócio
- DTOs para comunicação entre camadas
- Gerenciamento global de estado com Zustand
- Cache e sincronização de dados com TanStack Query

---

# Estrutura do Projeto

```
src/
 ├── app/
 ├── components/
 ├── hooks/
 ├── services/
 ├── repositories/
 ├── lib/
 ├── store/
 ├── types/
 └── utils/
```

---

# Configuração

## 1. Clone o projeto

```bash
git clone <repositorio>
```

## 2. Instale as dependências

```bash
pnpm install
```

ou

```bash
npm install
```

---

## 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto.

Exemplo:

```env
DATABASE_URL=

JWT_SECRET=

OPENAI_API_KEY=

NEXT_PUBLIC_API_URL=
```

> Ajuste os valores conforme seu ambiente.

---

## 4. Banco de Dados

Gerar as migrations:

```bash
pnpm drizzle-kit generate
```

Executar as migrations:

```bash
pnpm drizzle-kit migrate
```

---

## 5. Executar o projeto

Modo desenvolvimento:

```bash
pnpm dev
```

ou

```bash
npm run dev
```

---

# Funcionalidades

- Cadastro e autenticação de usuários
- Resolução de questões
- Correção automática
- Explicação da resposta correta
- Explicação das alternativas incorretas
- Histórico de resolução
- Sistema de filtros por disciplina, banca e assunto
- Integração com Inteligência Artificial
- Interface responsiva

---

# Objetivo

O TNT Concursos tem como objetivo oferecer uma plataforma moderna para preparação de concursos públicos, combinando um banco de questões com recursos de Inteligência Artificial para fornecer explicações completas e facilitar o processo de aprendizagem dos estudantes.

---

# Licença

Projeto desenvolvido para fins de estudo e demonstração técnica.