# Kaique Template

Um template moderno para aplicações React com TanStack Router e Emotion.

## 🚀 Tecnologias

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **TanStack Router** - Roteamento moderno e type-safe
- **Emotion** - CSS-in-JS com styled components
- **Vite** - Build tool rápido e moderno

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layouts/
│   │   ├── AuthLayout.tsx      # Layout com sidebar para páginas autenticadas
│   │   └── styles.ts           # Estilos do layout autenticado
│   └── ui/                     # Componentes reutilizáveis
├── pages/
│   ├── public/                 # Páginas públicas (sem autenticação)
│   │   ├── landing/            # Landing page
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── login/              # Página de login
│   │       ├── index.tsx
│   │       └── styles.ts
│   └── auth/                   # Páginas autenticadas (com sidebar)
│       ├── home/               # Dashboard principal
│       │   ├── index.tsx
│       │   └── styles.ts
│       ├── usuarios/           # Gerenciamento de usuários
│       │   ├── index.tsx
│       │   └── styles.ts
│       └── configuracao/       # Configurações do sistema
│           ├── index.tsx
│           └── styles.ts
├── routes/
│   └── index.tsx               # Configuração das rotas com TanStack Router
├── App.tsx                     # Componente raiz da aplicação
└── main.tsx                    # Ponto de entrada da aplicação
```

## 🎯 Funcionalidades

### Páginas Públicas
- **Landing Page** (`/`) - Página inicial com design moderno
- **Login** (`/login`) - Formulário de autenticação

### Páginas Autenticadas
- **Home** (`/auth/home`) - Dashboard com estatísticas
- **Usuários** (`/auth/usuarios`) - Gerenciamento de usuários
- **Configuração** (`/auth/configuracao`) - Configurações do sistema

### Layouts
- **Layout Público** - Sem sidebar, design limpo
- **Layout Autenticado** - Com sidebar fixa e navegação

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Build para produção:**
   ```bash
   npm run build
   ```

## 🎨 Estilização

O projeto usa **Emotion** para estilização com styled components. Cada página tem seu próprio arquivo `styles.ts` com os componentes estilizados.

### Exemplo de uso:
```tsx
import { Button, Container } from './styles';

const MyComponent = () => (
  <Container>
    <Button>Clique aqui</Button>
  </Container>
);
```

## 🛣️ Roteamento

O projeto usa **TanStack Router** para roteamento type-safe e performático.

### Estrutura de rotas:
- `/` - Landing page
- `/login` - Página de login
- `/auth/home` - Dashboard autenticado
- `/auth/usuarios` - Gerenciamento de usuários
- `/auth/configuracao` - Configurações

## 📱 Responsividade

Todas as páginas são responsivas e se adaptam a diferentes tamanhos de tela, incluindo dispositivos móveis.

## 🔧 Personalização

Para personalizar o template:

1. **Cores:** Edite as variáveis de cor nos arquivos de estilo
2. **Layouts:** Modifique os componentes em `components/layouts/`
3. **Páginas:** Adicione novas páginas seguindo a estrutura existente
4. **Rotas:** Configure novas rotas em `src/routes/index.tsx`

## 📄 Licença

Este projeto é um template pessoal para uso em projetos próprios.
