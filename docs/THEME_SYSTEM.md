# Sistema de Temas - Kaique Template

Este documento descreve o sistema de temas implementado no projeto, que permite alternar entre modo claro e escuro.

## 🎨 Visão Geral

O sistema de temas foi implementado usando:
- **Context API** do React para gerenciar o estado global
- **CSS Variables** para definir as cores dos temas
- **localStorage** para persistir a preferência do usuário
- **Detecção automática** da preferência do sistema operacional

## 🏗️ Arquitetura

### Estrutura de Arquivos

```
src/
├── contexts/
│   └── ThemeContext.tsx          # Contexto principal do tema
├── hooks/
│   └── useThemeColors.ts         # Hook para usar cores do tema
├── components/
│   └── ui/
│       ├── ThemeToggle.tsx       # Componente de toggle
│       └── ThemeCard.tsx         # Card de exemplo
├── styles/
│   └── theme.css                 # Variáveis CSS dos temas
└── App.tsx                       # Provider do tema
```

## 🚀 Como Usar

### 1. Provider do Tema

O `ThemeProvider` deve envolver toda a aplicação:

```tsx
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      {/* Sua aplicação aqui */}
    </ThemeProvider>
  );
}
```

### 2. Hook useTheme

Para acessar o tema atual e suas funções:

```tsx
import { useTheme } from '../contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();
  
  return (
    <div>
      <p>Tema atual: {theme}</p>
      <button onClick={toggleTheme}>Alternar Tema</button>
      <button onClick={() => setTheme('dark')}>Modo Escuro</button>
      <button onClick={() => setTheme('light')}>Modo Claro</button>
    </div>
  );
}
```

### 3. Hook useThemeColors

Para acessar as cores do tema atual:

```tsx
import { useThemeColors } from '../hooks/useThemeColors';

function MyComponent() {
  const { colors, isDark, isLight } = useThemeColors();
  
  return (
    <div style={{ backgroundColor: colors.background.primary }}>
      <h1 style={{ color: colors.text.primary }}>Título</h1>
      <p style={{ color: colors.text.secondary }}>Texto secundário</p>
    </div>
  );
}
```

## 🎯 Variáveis CSS Disponíveis

### Cores Primárias
- `--color-primary-50` a `--color-primary-900`

### Cores de Fundo
- `--color-bg-primary` - Fundo principal
- `--color-bg-secondary` - Fundo secundário
- `--color-bg-tertiary` - Fundo terciário
- `--color-bg-card` - Fundo de cards
- `--color-bg-overlay` - Fundo de overlays

### Cores de Texto
- `--color-text-primary` - Texto principal
- `--color-text-secondary` - Texto secundário
- `--color-text-tertiary` - Texto terciário
- `--color-text-inverse` - Texto invertido

### Cores de Borda
- `--color-border-primary` - Borda principal
- `--color-border-secondary` - Borda secundária
- `--color-border-accent` - Borda de destaque

### Cores de Estado
- `--color-success` - Sucesso
- `--color-warning` - Aviso
- `--color-error` - Erro
- `--color-info` - Informação

### Sombras
- `--shadow-sm` - Sombra pequena
- `--shadow-md` - Sombra média
- `--shadow-lg` - Sombra grande
- `--shadow-xl` - Sombra extra grande

## 🎨 Classes Utilitárias

O sistema também fornece classes CSS utilitárias:

```css
.bg-primary      /* Fundo primário */
.bg-secondary    /* Fundo secundário */
.bg-tertiary     /* Fundo terciário */
.bg-card         /* Fundo de card */

.text-primary    /* Texto primário */
.text-secondary  /* Texto secundário */
.text-tertiary   /* Texto terciário */
.text-inverse    /* Texto invertido */

.border-primary  /* Borda primária */
.border-secondary /* Borda secundária */
.border-accent   /* Borda de destaque */

.shadow-theme-sm /* Sombra pequena */
.shadow-theme-md /* Sombra média */
.shadow-theme-lg /* Sombra grande */
.shadow-theme-xl /* Sombra extra grande */
```

## 🔧 Componentes Disponíveis

### ThemeToggle

Componente de toggle para alternar entre temas:

```tsx
import { ThemeToggle } from '../components/ui/ThemeToggle';

function Sidebar() {
  return (
    <aside>
      {/* Conteúdo da sidebar */}
      <ThemeToggle />
    </aside>
  );
}
```

### ThemeCard

Card de exemplo que se adapta ao tema:

```tsx
import { ThemeCard } from '../components/ui/ThemeCard';

function DemoPage() {
  return (
    <div>
      <ThemeCard 
        title="Título do Card" 
        description="Descrição do card"
        variant="primary" // 'primary' | 'secondary' | 'accent'
      >
        <p>Conteúdo adicional</p>
      </ThemeCard>
    </div>
  );
}
```

## 🌙 Tema Escuro

O tema escuro é ativado automaticamente quando:
1. O usuário clica no toggle
2. A preferência do sistema é "dark"
3. O tema foi salvo anteriormente no localStorage

### Cores do Tema Escuro

- **Fundo principal**: `#0f172a` (azul muito escuro)
- **Fundo secundário**: `#1e293b` (azul escuro)
- **Fundo terciário**: `#334155` (azul médio)
- **Texto principal**: `#f8fafc` (branco)
- **Texto secundário**: `#cbd5e1` (cinza claro)

## ☀️ Tema Claro

O tema claro é o padrão e usa:
- **Fundo principal**: `#ffffff` (branco)
- **Fundo secundário**: `#f8fafc` (cinza muito claro)
- **Fundo terciário**: `#f1f5f9` (cinza claro)
- **Texto principal**: `#0f172a` (preto)
- **Texto secundário**: `#475569` (cinza escuro)

## 📱 Responsividade

O sistema de temas é totalmente responsivo e funciona em:
- Desktop
- Tablet
- Mobile

## 🔄 Transições

Todas as mudanças de tema incluem transições suaves:
- **Duração**: 300ms
- **Easing**: ease
- **Propriedades**: background-color, color, border-color, box-shadow

## 💾 Persistência

O tema escolhido pelo usuário é salvo automaticamente no `localStorage` com a chave `theme`.

## 🎯 Exemplos de Uso

### 1. Botão com Cores do Tema

```tsx
function ThemedButton() {
  const { colors } = useThemeColors();
  
  return (
    <button
      style={{
        backgroundColor: colors.primary[500],
        color: colors.text.inverse,
        borderColor: colors.border.accent,
      }}
    >
      Clique aqui
    </button>
  );
}
```

### 2. Card com Fundo Adaptativo

```tsx
function ThemedCard() {
  const { colors } = useThemeColors();
  
  return (
    <div
      style={{
        backgroundColor: colors.background.card,
        color: colors.text.primary,
        border: `1px solid ${colors.border.primary}`,
        boxShadow: colors.shadow.md,
      }}
    >
      <h3>Card com Tema</h3>
      <p>Este card se adapta automaticamente ao tema</p>
    </div>
  );
}
```

### 3. Layout Responsivo

```tsx
function ThemedLayout() {
  const { colors, isDark } = useThemeColors();
  
  return (
    <div
      style={{
        backgroundColor: colors.background.primary,
        color: colors.text.primary,
        minHeight: '100vh',
      }}
    >
      <header
        style={{
          backgroundColor: colors.background.secondary,
          borderBottom: `1px solid ${colors.border.primary}`,
        }}
      >
        <h1>Header</h1>
      </header>
      
      <main
        style={{
          backgroundColor: colors.background.primary,
          padding: '20px',
        }}
      >
        <p>Conteúdo principal</p>
      </main>
    </div>
  );
}
```

## 🚨 Considerações Importantes

1. **Sempre use o hook `useTheme`** em vez de acessar o contexto diretamente
2. **Use as variáveis CSS** para estilos que não podem ser aplicados via inline styles
3. **Teste em ambos os temas** para garantir boa legibilidade
4. **Mantenha o contraste** adequado entre texto e fundo
5. **Use transições suaves** para melhor experiência do usuário

## 🔮 Futuras Melhorias

- [ ] Suporte a temas customizados
- [ ] Mais variantes de cores
- [ ] Temas sazonais (Natal, Halloween, etc.)
- [ ] Exportação/importação de temas
- [ ] Temas por usuário
- [ ] Modo automático baseado na hora do dia
