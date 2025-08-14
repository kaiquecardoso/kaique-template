# Sistema de Autenticação

## 🚀 **Visão Geral**

O sistema de autenticação implementado oferece proteção completa das rotas autenticadas, logout seguro e prevenção de acesso não autorizado.

## 🔐 **Funcionalidades Principais**

### **1. Login**
- Formulário de login com validação
- Simulação de API de autenticação
- Armazenamento seguro de tokens no localStorage
- Redirecionamento automático após login bem-sucedido

### **2. Proteção de Rotas**
- Todas as rotas `/auth/*` são protegidas
- Verificação automática de autenticação
- Redirecionamento para landing page se não autenticado
- Tela de carregamento durante verificação

### **3. Logout Seguro**
- Limpeza completa de dados de autenticação
- Redirecionamento para landing page
- Prevenção de retorno com botão voltar do navegador
- Reload da página para limpar estado da aplicação

## 🛡️ **Segurança Implementada**

### **Prevenção de Acesso Não Autorizado**
```typescript
// Hook useAuth verifica autenticação automaticamente
const { isAuthenticated, isLoading } = useAuth();

// Se não autenticado, redireciona para landing page
if (!isAuthenticated) {
  navigate({ to: '/' });
}
```

### **Logout com Proteção de Histórico**
```typescript
const logout = () => {
  // Limpa dados de autenticação
  localStorage.removeItem('authToken');
  localStorage.removeItem('userData');
  sessionStorage.clear();
  
  // Redireciona para landing page
  navigate({ to: '/' });
  
  // Impede retorno com botão voltar
  window.history.pushState(null, '', '/');
  window.history.pushState(null, '', '/');
  window.history.forward();
  
  // Força reload para limpar estado
  setTimeout(() => window.location.reload(), 100);
};
```

## 📁 **Estrutura de Arquivos**

```
src/
├── hooks/
│   └── useAuth.ts              # Hook principal de autenticação
├── components/
│   ├── auth/
│   │   └── ProtectedRoute.tsx  # Componente de proteção de rotas
│   └── layouts/
│       └── AuthLayout.tsx      # Layout com sidebar e logout
├── pages/
│   ├── public/
│   │   ├── landing/            # Página inicial (pública)
│   │   └── login/              # Página de login
│   └── auth/                   # Páginas protegidas
└── routes/
    └── index.tsx               # Configuração de rotas protegidas
```

## 🔄 **Fluxo de Autenticação**

### **1. Acesso Público**
- Usuário acessa `/` (landing page)
- Pode navegar para `/login`
- Não tem acesso às rotas `/auth/*`

### **2. Login**
- Usuário preenche formulário de login
- Sistema valida credenciais (simulado)
- Token e dados do usuário são armazenados
- Redirecionamento para `/auth/home`

### **3. Acesso Autenticado**
- Usuário pode acessar todas as rotas `/auth/*`
- Sidebar com navegação e funcionalidades
- Dados de usuário persistidos

### **4. Logout**
- Clique no botão "Sair" na sidebar
- Limpeza completa de dados
- Redirecionamento para landing page
- Prevenção de retorno às páginas autenticadas

## 🧪 **Como Testar**

### **1. Acesso Público**
```bash
# Acesse a landing page
http://localhost:5173/
```

### **2. Login**
```bash
# Acesse a página de login
http://localhost:5173/login

# Use qualquer email e senha para testar
# O sistema simula uma API de autenticação
```

### **3. Acesso Autenticado**
```bash
# Após login, você será redirecionado para
http://localhost:5173/auth/home

# Navegue entre as páginas autenticadas
http://localhost:5173/auth/usuarios
http://localhost:5173/auth/configuracao
```

### **4. Logout**
- Clique no botão "Sair" na sidebar
- Verifique que foi redirecionado para a landing page
- Tente usar o botão voltar do navegador (não deve funcionar)

## ⚙️ **Configuração para Produção**

### **1. API Real**
```typescript
// Substitua a simulação por chamada real
const response = await fetch('/api/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});

const authData = await response.json();
login(authData.token, authData.user);
```

### **2. Validação de Token**
```typescript
// Adicione validação de expiração
const checkAuth = () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    // Verificar se o token não expirou
    const decoded = jwt_decode(token);
    if (decoded.exp < Date.now() / 1000) {
      logout(); // Token expirado
      return;
    }
  }
  // ... resto da lógica
};
```

### **3. Refresh Token**
```typescript
// Implemente renovação automática de token
const refreshToken = async () => {
  const refresh = localStorage.getItem('refreshToken');
  if (refresh) {
    const response = await fetch('/api/refresh', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${refresh}` }
    });
    const { token } = await response.json();
    localStorage.setItem('authToken', token);
  }
};
```

## 🎯 **Benefícios do Sistema**

1. **Segurança**: Rotas protegidas com verificação automática
2. **UX**: Redirecionamentos automáticos e feedback visual
3. **Manutenibilidade**: Hook centralizado para lógica de autenticação
4. **Escalabilidade**: Fácil de estender para novas funcionalidades
5. **Prevenção**: Impede acesso não autorizado e retorno após logout

## 🚨 **Considerações de Segurança**

- **Tokens**: Em produção, use HTTPS e tokens JWT com expiração
- **Storage**: Considere usar httpOnly cookies para tokens sensíveis
- **Validação**: Sempre valide tokens no servidor
- **Logout**: Implemente logout em todos os dispositivos se necessário
- **Rate Limiting**: Adicione proteção contra ataques de força bruta
