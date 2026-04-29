# Website Institucional — Skill de Criação e Manutenção

---
name: igtech-devweb
description: >
  Skill completa para criar, expandir e manter sites institucionais com Nuxt 4.
  Cobre arquitetura Nuxt 4, design system CSS, autenticação JWT+Supabase, painel de controle (CP),
  animações (Lenis + Scroll Reveal), regras de nomenclatura, segurança e boas práticas estabelecidas
  ao longo do projeto. Use esta skill sempre que trabalhar neste projeto.
metadata:
  stack: Nuxt 4 · Vue 3 · TypeScript · Supabase · Pinia · VueUse · Lenis · Iconify
  version: "2026.04.22"
  skills-utilizadas:
    - nuxt
    - frontend-design
---

---

## ⚠️ REGRAS ABSOLUTAS — NUNCA IGNORE

> Estas regras devem ser seguidas em **100% do desenvolvimento**. Nenhuma exceção.

### 📱 1. Responsividade Obrigatória
- **TODOS** os componentes e páginas DEVEM ser responsivos.
- Breakpoints mínimos obrigatórios:
  - `mobile`: < 768px
  - `tablet`: 768px – 1024px
  - `desktop`: > 1024px
- Abordagem: **Mobile-first** — estilos base para mobile, `@media` queries apenas para cima.
- Testar visualmente em mobile e desktop antes de considerar qualquer componente pronto.
- Usar `clamp()` para tipografia e espaçamentos fluidos sempre que possível.

### 🧩 2. Modularização e Componentização Obrigatória
- **TODA** feature deve ser dividida em componentes reutilizáveis com responsabilidade única.
- **NUNCA** criar componentes monolíticos ou misturar responsabilidades num mesmo arquivo.
- Estrutura **pasta por pasta, componente por componente**.
- Lógica reutilizável deve ser extraída para **composables** (nunca duplicar lógica entre componentes).
- Cada componente = uma responsabilidade clara e bem definida.

### 🛡️ 3. Segurança e Higienização (Auditoria)
- **Anti-XSS:** Toda entrada de texto rico (HTML/Quill) deve ser sanitizada via `server/utils/sanitize.ts` antes de persistir no banco.
- **JWT Dupla Camada:** Operações administrativas sensíveis usam verificação de token manual (`jose`) em complemento ao Supabase Auth.
- **Headers Rigorosos:** Jamais enfraquecer CSP, `X-Frame-Options` e `Permissions-Policy` definidos no `nuxt.config.ts`.
- Nunca retornar stack traces ou detalhes internos para o client.
- Nunca expor a `supabaseServiceKey` no client.

### 🖼️ 4. Gestão de Assets e Performance
- **Compressão no Browser:** Imagens enviadas pelo usuário DEVEM ser comprimidas no cliente (via `browser-image-compression`) antes do upload para o Storage.
- **Suporte Moderno:** Garantir suporte a arquivos `.heic` e `.heif` (conversão para JPG/PNG via `heic2any`).
- Imagens estáticas do projeto em `public/` — nunca em `assets/` (assets são processados pelo bundler).

### 🏢 5. Plataforma com CP (Control Panel)
- O projeto é um **site + painel administrativo completo**:
  - Site público (vitrine/landing page)
  - **CP (Control Panel):** painel para gerenciar todo o conteúdo — substitui o termo "admin" em todo o projeto
  - CRUD completo para todos os recursos gerenciáveis
  - Autenticação e autorização via middleware `cp-auth`
- O CP deve atualizar o conteúdo do site em tempo real via banco de dados.
- Rotas do CP são **SPA puro** (`ssr: false` via `routeRules`).

---

## 1. Visão Geral do Projeto

Site institucional premium com vitrine pública e painel de controle privado. O site possui:

- **Vitrine pública** — landing page com seções modulares (hero, sobre, serviços, projetos, galeria, contato, etc.)
- **Painel de Controle (CP)** — área administrativa privada (sem Supabase Auth no front, JWT puro no back)
- **API Server** — Nitro/Nuxt com autenticação JWT, rate limiting, sanitização e BCrypt

---

## 2. Tecnologias e Dependências

### Core
| Pacote | Versão | Função |
|--------|--------|--------|
| `nuxt` | ^4.x | Framework full-stack Vue com SSR |
| `vue` | ^3.5 | Framework reativo de UI |
| `vue-router` | ^5.x | Roteamento client-side |
| `typescript` | embutido | Tipagem estática |

### Módulos Nuxt
| Módulo | Função |
|--------|--------|
| `@pinia/nuxt` | Gerenciamento de estado global |
| `@nuxtjs/color-mode` | Dark/Light mode com CSS class strategy |
| `@vueuse/nuxt` | Composables utilitários (VueUse) |
| `@nuxt/icon` | Ícones via Iconify (100.000+ ícones) |
| `@nuxtjs/supabase` | Integração Supabase (DB + Storage) |

### UI & UX
| Pacote | Função |
|--------|--------|
| `lenis` | Smooth scroll com inércia premium |
| `@vueup/vue-quill` | Editor rich-text (CP - reportagens) |
| `vuedraggable` | Drag-and-drop (CP - reordenação) |

### Backend & Segurança
| Pacote | Função |
|--------|--------|
| `jose` | JWT (SignJWT, jwtVerify) — HS256 |
| `bcryptjs` | Hash de senhas |
| `isomorphic-dompurify` | Sanitização HTML no servidor |
| `browser-image-compression` | Compressão de imagens antes do upload |
| `heic2any` | Conversão de HEIC para JPEG (iOS) |

---

## 3. Estrutura de Diretórios

```
projeto/
├── app/                          ← Todo código Vue/Nuxt (appDir)
│   ├── app.vue                   ← Root da aplicação (NuxtLayout + NuxtPage + NuxtLoadingIndicator)
│   ├── assets/
│   │   └── css/
│   │       └── main.css          ← Design System completo (único arquivo CSS global)
│   ├── components/
│   │   ├── layout/               ← Componentes estruturais (The-prefix)
│   │   │   ├── TheHeader.vue
│   │   │   ├── TheFooter.vue
│   │   │   ├── TheAdminHeader.vue
│   │   │   └── TheSidebar.vue
│   │   ├── sections/             ← Seções da landing page
│   │   │   ├── HeroSection.vue
│   │   │   ├── AboutSection.vue
│   │   │   ├── ServicesSection.vue
│   │   │   ├── ProjectsSection.vue
│   │   │   ├── StatsSection.vue
│   │   │   ├── ReportsSection.vue
│   │   │   ├── SocialLinkFeed.vue
│   │   │   ├── BrandCarousel.vue
│   │   │   └── ContactSection.vue
│   │   └── ui/                   ← Componentes reutilizáveis (App-prefix)
│   │       ├── AppButton.vue
│   │       ├── AppInput.vue
│   │       ├── AppTextarea.vue
│   │       ├── AppSelect.vue
│   │       ├── AppModal.vue
│   │       ├── AppToast.vue
│   │       ├── AppSpinner.vue
│   │       ├── AppBadge.vue
│   │       ├── AppCard.vue
│   │       ├── AppThemeToggle.vue
│   │       └── ProjectCard.vue
│   ├── composables/
│   │   ├── useSession.ts         ← Gerenciamento de sessão JWT (timer 2h)
│   │   ├── useToast.ts           ← Sistema de notificações globais
│   │   └── useProjectAutoFill.ts ← Auto-preenchimento de campos de projeto
│   ├── layouts/
│   │   ├── default.vue           ← Layout público (TheHeader + slot + TheFooter)
│   │   └── cp.vue                ← Layout do CP (TheAdminHeader + TheSidebar + slot)
│   ├── middleware/
│   │   └── cp-auth.global.ts     ← Guard global: protege /cp/* e redireciona para login
│   ├── pages/
│   │   ├── index.vue             ← Landing page (monta todas as Section components)
│   │   ├── historia.vue          ← Página "Sobre / História"
│   │   ├── galeria.vue           ← Galeria de fotos com lightbox
│   │   ├── projetos/             ← Lista e detalhe de projetos
│   │   ├── reportagens.vue       ← Lista de reportagens
│   │   ├── contato.vue           ← Formulário de contato
│   │   └── cp/                   ← Painel de Controle (SPA — ssr: false)
│   │       ├── index.vue         ← Dashboard do CP
│   │       ├── login.vue         ← Tela de login
│   │       ├── reset-password.vue
│   │       ├── perfil.vue
│   │       ├── usuarios.vue
│   │       ├── contato.vue
│   │       ├── galeria/
│   │       ├── projetos/
│   │       ├── reportagens/
│   │       └── slides/
│   ├── plugins/
│   │   ├── lenis.client.ts       ← Smooth scroll (só client-side)
│   │   └── reveal.client.ts      ← Scroll Reveal via IntersectionObserver
│   ├── types/                    ← Interfaces TypeScript do domínio
│   └── utils/                    ← Funções utilitárias do client
│
├── server/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login.post.ts     ← POST /api/auth/login
│   │   │   ├── logout.post.ts    ← POST /api/auth/logout
│   │   │   ├── me.get.ts         ← GET /api/auth/me
│   │   │   ├── refresh.post.ts   ← POST /api/auth/refresh
│   │   │   └── reset-password.post.ts
│   │   ├── cp/                   ← Endpoints protegidos (requerem requireAuth)
│   │   │   ├── manage-users.*    ← CRUD de usuários
│   │   │   ├── profile.*         ← Perfil do admin
│   │   │   └── projects/         ← CRUD de projetos
│   │   ├── setup/                ← Setup inicial (criação do primeiro admin)
│   │   └── social-info.get.ts    ← Endpoint público (dados sociais)
│   └── utils/
│       ├── auth.ts               ← JWT: generate, verify, cookies
│       ├── password.ts           ← BCrypt helpers
│       ├── rateLimit.ts          ← Rate limiting por IP (Map em memória)
│       ├── sanitize.ts           ← DOMPurify + validações
│       └── supabase.ts           ← useSupabaseAdmin() helper
│
├── public/                       ← Arquivos estáticos (favicon.svg, imagens, etc.)
├── nuxt.config.ts                ← Configuração central do projeto
├── package.json
├── tsconfig.json
└── .env                          ← Variáveis de ambiente (nunca commitar)
```

---

## 4. Configuração (`nuxt.config.ts`)

### Regras Obrigatórias

```typescript
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@nuxtjs/supabase',
  ],

  // Componentes sem prefix de path (usar apenas App- e The- naming)
  components: [{ path: '~/components', pathPrefix: false }],

  // Supabase: desativar redirect automático (gerenciamos manualmente)
  supabase: { redirect: false },

  // Color Mode: dark como padrão, sem sufixo de classe
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
    storageKey: 'project-theme',  // Trocar pelo nome do projeto
  },

  // Runtime Config: segredos apenas no servidor
  runtimeConfig: {
    supabaseServiceKey: '',     // SUPABASE_SERVICE_KEY
    jwtSecret: '',              // JWT_SECRET
    jwtRefreshSecret: '',       // JWT_REFRESH_SECRET
    cpEmail: '',                // CP_EMAIL
    cpPasswordHash: '',         // CP_PASSWORD_HASH
    public: {
      supabaseUrl: '',          // NUXT_PUBLIC_SUPABASE_URL
      supabaseAnonKey: '',      // NUXT_PUBLIC_SUPABASE_ANON_KEY
    },
  },

  // CP desativado de SSR (SPA puro para área admin)
  routeRules: {
    '/**': { headers: { /* Security Headers */ } },
    '/cp/**': { ssr: false },
  },

  css: ['~/assets/css/main.css'],
})
```

### Security Headers Obrigatórios
Sempre incluir em `routeRules['/**'].headers`:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `X-XSS-Protection: 1; mode=block`
- `Content-Security-Policy` — configurar conforme serviços usados

---

## 5. Variáveis de Ambiente (`.env`)

```env
# Supabase
NUXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NUXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_KEY=eyJ...

# JWT (usar segredos longos e aleatórios — mín. 32 chars)
JWT_SECRET=seu-segredo-longo-aqui
JWT_REFRESH_SECRET=outro-segredo-longo-aqui

# CP Admin (fallback/setup inicial)
CP_EMAIL=admin@dominio.com
CP_PASSWORD_HASH=$2b$12$...bcrypt-hash...
```

> **NUNCA** commitar `.env`. Garantir que esteja no `.gitignore`.

> **DICA DE SEGURANÇA:** Usar segredos JWT com no mínimo 32 caracteres aleatórios. Gerar com: `openssl rand -base64 32`

---

## 6. Design System (`app/assets/css/main.css`)

O projeto usa **um único arquivo CSS global** com design system completo. Não usar Tailwind.

### Estrutura do `main.css`

```
1.  RESET & BASE
2.  DESIGN TOKENS — DARK MODE (padrão)
3.  DESIGN TOKENS — LIGHT MODE
4.  TYPOGRAPHY
5.  SPACING & LAYOUT
6.  COMPONENTS BASE (scrollbar, selection, focus, divider, tag)
7.  ANIMATIONS & TRANSITIONS
8.  DECORATIVE ELEMENTS (circuit-line, noise-overlay, grid-bg)
9.  PAGE TRANSITIONS
10. UTILITIES
11. RESPONSIVE HELPERS
12. ADMIN SPECIFIC
```

### Paleta de Cores (Dark Mode — Padrão)

```css
/* Backgrounds — Azul Marinho Profundo */
--color-bg:           #020817;
--color-bg-elevated:  #0a1628;
--color-bg-card:      #0f1e35;

/* Accent — Azul Elétrico */
--color-accent:       #3b82f6;
--color-accent-hover: #60a5fa;

/* Text */
--color-text:         #cbd5e1;
--color-heading:      #f1f5f9;
--color-text-muted:   #64748b;
```

### Fontes

- **Heading/Display**: `Poppins` (importada via Google Fonts no `nuxt.config.ts`)
- **Body**: `Poppins` / `system-ui` fallback

```html
<!-- Em nuxt.config.ts → app.head.link -->
{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' }
```

### Container Padrão

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: clamp(1rem, 4vw, 2rem);
}
```

### Classes de Reveal (Scroll Animation)

```css
/* Aplicar na tag HTML do elemento */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1.2s cubic-bezier(0.2, 0.8, 0.2, 1),
              transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 7. Nomenclatura de Componentes

| Tipo | Prefixo | Exemplo |
|------|---------|---------|
| Layout global (header, footer, sidebar) | `The` | `TheHeader.vue`, `TheFooter.vue` |
| Seções da página (uma por seção) | `Section` sufixo | `HeroSection.vue`, `AboutSection.vue` |
| Componentes UI reutilizáveis | `App` | `AppButton.vue`, `AppModal.vue` |
| Cards específicos de domínio | nome + `Card` | `ProjectCard.vue` |
| Páginas (rota) | lowercase, kebab-case | `sobre.vue`, `reset-password.vue` |
| API endpoints | `nome-rota.verbo.ts` | `login.post.ts`, `projects.get.ts` |
| Composables | `use` + PascalCase | `useSession.ts`, `useToast.ts` |
| Pinia Stores | `use` + Nome + `Store` | `useProjectsStore.ts` |
| Types/Interfaces | PascalCase | `Project.ts`, `CpUser.ts` |

**REGRAS ABSOLUTAS de Nomenclatura:**
- ❌ Nunca use o prefixo ou termo `admin` — a nomenclatura correta é sempre `cp` (Control Panel)
- ❌ Nunca use nomes genéricos como `Component.vue`, `Page.vue`, `Helper.ts`
- ✅ Rotas no idioma do projeto (ex: `/galeria`, `/sobre`, `/contato` para PT-BR)
- ✅ Código (variáveis, funções, interfaces) sempre em inglês
- ✅ O middleware de autenticação se chama `cp-auth` — nunca `auth` ou `admin-auth`

---

## 8. Autenticação e Segurança

### Arquitetura de Auth

O CP usa autenticação **dupla camada**:

1. **JWT Custom** (via `jose`) — gerado pelo servidor Nitro
   - Access Token: `[prefix]_access` cookie (httpOnly, 2h) — trocar `[prefix]` pelo código do projeto
   - Refresh Token: `[prefix]_refresh` cookie (httpOnly, 24h, path=/api/auth)
   - Session Active: `[prefix]_session_active` cookie (não-httpOnly, 2h — para middleware client)

2. **Supabase Auth** — para storage e operações de banco com RLS
   - Usuários gerenciados na tabela `cp_set` (não no Supabase Auth)

### Fluxo de Login

```
[POST /api/auth/login]
  1. checkRateLimit(ip)           ← bloqueia após N tentativas
  2. sanitizeEmail(body.email)    ← DOMPurify + validação
  3. SELECT em cp_set WHERE email ← Supabase Admin Client
  4. bcrypt.compare(password, hash)
  5. generateAccessToken + generateRefreshToken (jose)
  6. setAuthCookies(event, ...)   ← define os 3 cookies
  7. return { ok: true, user }
```

### Proteção de Rotas (Middleware)

```typescript
// app/middleware/cp-auth.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
  const user = useSupabaseUser()
  const sessionActive = useCookie('[prefix]_session_active')  // trocar [prefix]

  if (to.path.startsWith('/cp') && to.path !== '/cp/login') {
    if (!user.value || !sessionActive.value) {
      return navigateTo('/cp/login')
    }
  }
  if (user.value && sessionActive.value && to.path === '/cp/login') {
    return navigateTo('/cp')
  }
})
```

### Proteção de API Endpoints

Todos os endpoints em `/server/api/cp/**` devem chamar `requireAuth`:

```typescript
import { requireAuth } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const user = await requireAuth(event, useRuntimeConfig())
  // ... lógica protegida
})
```

### Rate Limiting

```typescript
// server/utils/rateLimit.ts — Map em memória
checkRateLimit(ip)   // lança 429 se exceder limite
resetRateLimit(ip)   // reseta após login bem-sucedido
```

---

## 9. Plugins de Performance e UX

### Lenis Smooth Scroll (`app/plugins/lenis.client.ts`)

- Só executa no client (`import.meta.server` guard)
- Configuração: `duration: 1.2`, `smoothWheel: true`, `wheelMultiplier: 1.1`
- Sincroniza com Nuxt: para no `page:start`, reinicia e faz scroll ao topo no `page:finish`
- Disponibiliza `$lenis` via `provide`

```typescript
// Uso em componentes se necessário
const { $lenis } = useNuxtApp()
$lenis.scrollTo('#section-id', { offset: -80 })
```

### Scroll Reveal (`app/plugins/reveal.client.ts`)

- Usa `IntersectionObserver` nativo (sem dependências externas)
- `threshold: 0.1` e `rootMargin: '0px 0px -50px 0px'`
- Ao ser observado, adiciona `.revealed` ao elemento
- Escaneia novos elementos após cada `page:finish` (200ms delay)

```html
<!-- Uso em qualquer template -->
<div class="reveal">Conteúdo animado</div>
<div class="reveal delay-200">Conteúdo com atraso</div>
```

---

## 10. Composables

### `useSession`

Gerencia a sessão JWT no client:

```typescript
const { timeLeft, formattedTime, isExpired, logout, startTimer, stopTimer, resetTimer } = useSession()

// Em onMounted do layout CP:
startTimer()
onUnmounted(() => stopTimer())
```

- Duração: 2h fixas (Hard Timeout — sem renovação por atividade)
- Refresh de token a cada 1 min de throttle
- Se refresh falhar com 401, faz logout automático

### `useToast`

Sistema de notificações globais:

```typescript
const { showToast } = useToast()
showToast('Salvo com sucesso!', 'success')  // 'success' | 'error' | 'warning' | 'info'
```

---

## 11. Layouts

### `default.vue` — Layout Público
- `TheHeader` (sticky, transparente no topo → sólido ao scrollar)
- `<slot />` com `<NuxtPage />`
- `TheFooter`
- Page transition: `opacity + translateY(6px)`, 0.25s

### `cp.vue` — Layout do Painel de Controle
- `TheAdminHeader` (top bar com logo, info de sessão, botão logout)
- `TheSidebar` (menu lateral 260px, collapsa em mobile)
- Área de conteúdo com `<slot />`
- Timer de sessão visível no header (`useSession`)

---

## 12. Páginas Públicas

| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/` | `pages/index.vue` | Landing page — monta todas as Section components |
| `/sobre` | `pages/sobre.vue` | Página institucional / sobre a empresa |
| `/galeria` | `pages/galeria.vue` | Galeria de fotos com lightbox |
| `/projetos` | `pages/projetos/` | Lista e detalhes de projetos/portfólio |
| `/blog` | `pages/blog.vue` | Artigos, reportagens ou notícias |
| `/contato` | `pages/contato.vue` | Formulário de contato |

> As rotas acima são exemplos. Adapte os nomes ao contexto do projeto.

**Regra**: Todas as páginas usam `layout: 'default'` implicitamente. Usar `definePageMeta({ layout: 'cp' })` apenas nas páginas do painel.

---

## 13. Painel de Controle (CP)

Todas as páginas em `/cp/**` são **SPA** (ssr: false via routeRules).

| Rota | Funcionalidade |
|------|----------------|
| `/cp/login` | Login JWT (sem layout CP) |
| `/cp` | Dashboard com stats |
| `/cp/projetos` | CRUD de projetos |
| `/cp/galeria` | Upload e gerenciamento de fotos |
| `/cp/reportagens` | Editor rich-text (Quill) |
| `/cp/slides` | Gerenciamento de slides/hero |
| `/cp/contato` | Mensagens recebidas |
| `/cp/perfil` | Editar perfil do admin |
| `/cp/usuarios` | Gerenciar usuários do CP |
| `/cp/reset-password` | Reset de senha |

---

## 14. Banco de Dados (Supabase)

### Cliente Admin (Server-side)

```typescript
// server/utils/supabase.ts
import { createClient } from '@supabase/supabase-js'

export function useSupabaseAdmin() {
  const config = useRuntimeConfig()
  return createClient(config.public.supabaseUrl, config.supabaseServiceKey)
}
```

Use `useSupabaseAdmin()` apenas em **server routes** — nunca expor a service key no client.

### Cliente Público (Client-side)

```typescript
// Automático via @nuxtjs/supabase
const supabase = useSupabaseClient()
const user = useSupabaseUser()
```

---

## 15. Boas Práticas e Regras do Projeto

### CSS
- ✅ Usar variáveis CSS (`--color-*`, `--shadow-*`, `--gradient-*`) — nunca hardcodar cores
- ✅ Usar `clamp()` para tipografia e espaçamentos responsivos
- ✅ `<style scoped>` em todos os componentes Vue
- ✅ Mobile-first: estilos base para mobile, `@media (min-width: ...)` para cima
- ❌ Não usar Tailwind CSS
- ❌ Não adicionar bibliotecas de componentes UI (Vuetify, Element Plus, etc.)
- ❌ Nunca duplicar variáveis de cor ou espaçamento — centralizar no `main.css`

### TypeScript
- ✅ TypeScript obrigatório em **todos** os arquivos (`.ts`, `.vue`)
- ✅ Tipar todas as props, emits e return de composables
- ✅ Usar `defineProps<{}>()` e `defineEmits<{}>()` com sintaxe genérica
- ✅ Interfaces e types de domínio em `app/types/`
- ❌ Evitar `any` — usar tipos precisos ou `unknown` com narrowing

### Componentes e Modularização
- ✅ `<script setup lang="ts">` em todos os componentes
- ✅ Um componente = uma responsabilidade clara
- ✅ Props com defaults explícitos
- ✅ Lógica reutilizável extraída para composables em `app/composables/`
- ✅ Estado global em Pinia stores em `app/stores/`
- ❌ Não usar `Options API`
- ❌ Nunca criar componentes monolíticos que fazem tudo

### Responsividade
- ✅ Testar em mobile (`<768px`), tablet (`768–1024px`) e desktop (`>1024px`)
- ✅ Usar `grid-auto-fill` / `grid-auto-fit` para grids responsivos
- ✅ Imagens com `max-width: 100%` e `height: auto`
- ✅ Texto e botões tocáveis (`min-height: 44px` em mobile)
- ❌ Nunca usar `px` fixo para larguras de container — usar `clamp()` ou `%`

### Data Fetching
- ✅ Usar `useFetch` ou `useAsyncData` para data fetching (nunca `fetch` puro no `<script setup>`)
- ✅ Auto-imports do Nuxt — não importar manualmente composables e componentes Nuxt
- ✅ Tratar estado de loading e erro em toda chamada de dados

### Server/API
- ✅ Sempre sanitizar inputs com `sanitizeEmail` / `DOMPurify` (via `server/utils/sanitize.ts`)
- ✅ Sanitizar **todo HTML rico** (Quill, etc.) antes de salvar no banco
- ✅ Sempre chamar `requireAuth()` em endpoints do CP
- ✅ Usar `createError({ statusCode, message })` para erros HTTP
- ✅ Rate limiting em todos os endpoints de autenticação
- ✅ Nunca retornar stack traces ou mensagens internas para o client
- ❌ Não usar a service key do Supabase no client — apenas em `server/`

### Assets e Performance
- ✅ Comprimir imagens no browser (via `browser-image-compression`) antes do upload
- ✅ Suportar `.heic`/`.heif` (via `heic2any`) para uploads de iOS
- ✅ Imagens estáticas em `public/` — assets dinâmicos processados em `assets/`
- ✅ Lazy loading (`loading="lazy"`) em imagens fora do viewport inicial

### Segurança
- ✅ JWT com dois segredos distintos (access + refresh)
- ✅ Cookies `httpOnly` + `secure` + `sameSite: strict` para tokens
- ✅ Headers de segurança obrigatórios (CSP, X-Frame-Options, etc.) no `nuxt.config.ts`
- ✅ Jamais enfraquecer as políticas de CSP definidas
- ❌ Nunca logar senhas, tokens ou dados sensíveis no servidor

### Design
- ✅ Design premium e distinto — sem estética genérica de IA
- ✅ Tipografia característica (ex: Poppins) — evitar fontes genéricas de sistema
- ✅ Paleta coesa com variáveis CSS — Dark Mode como padrão prioritário
- ✅ Animações e micro-interações (Scroll Reveal, hover states, Lenis)
- ✅ Layouts com profundidade: sobreposição, assimetria, espaço negativo
- ❌ Nunca usar estilos inline para layout ou cores

---

## 16. Fluxo de Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
# → http://localhost:3000

# Build produção
npm run build

# Preview do build
npm run preview
```

### Adicionando um Novo Módulo
1. Instalar: `npm install nome-do-pacote`
2. Adicionar em `modules: []` do `nuxt.config.ts` (se for módulo Nuxt)
3. Configurar no bloco correspondente do `nuxt.config.ts`
4. Documentar aqui na seção de tecnologias

### Adicionando uma Nova Seção à Landing Page
1. Criar `app/components/sections/NomeDaSection.vue`
2. Usar `class="section"` no wrapper externo
3. Adicionar `.reveal` nos elementos para animação
4. Importar e montar em `app/pages/index.vue`

### Adicionando uma Nova Página ao CP
1. Criar `app/pages/cp/nome-da-pagina.vue`
2. Adicionar `definePageMeta({ layout: 'cp' })` no `<script setup>`
3. Criar endpoint em `server/api/cp/nome.verbo.ts`
4. Adicionar `requireAuth(event, useRuntimeConfig())` no endpoint
5. Adicionar link em `TheSidebar.vue`

---

## 17. Checklist de Qualidade

Antes de considerar **qualquer componente ou página concluído**, verificar:

#### 📱 Responsividade
- [ ] Funciona e está polido em **Mobile** (`<768px`), **Tablet** (`768–1024px`) e **Desktop** (`>1024px`)
- [ ] Mobile-first: nenhum estilo base quebra em telas pequenas
- [ ] Textos legíveis e botões tocáveis em mobile

#### 🛡️ Segurança
- [ ] Inputs sanitizados no servidor (`sanitize.ts`)
- [ ] HTML rico (Quill/editor) passado pelo DOMPurify antes de salvar
- [ ] Endpoints do CP protegidos com `requireAuth()`
- [ ] Headers de segurança não foram enfraquecidos

#### 🖼️ Assets & Performance
- [ ] Imagens passam por `browser-image-compression` antes do upload
- [ ] Suporte a `.heic`/`.heif` via `heic2any` (uploads iOS)
- [ ] Imagens com `loading="lazy"` onde aplicável

#### 🧩 Arquitetura
- [ ] TypeScript sem erros (sem `any` abusivo)
- [ ] Lógica reutilizável extraída para composable ou util
- [ ] Nenhum componente monolítico — responsabilidades separadas
- [ ] Auto-imports do Nuxt utilizados (sem imports manuais desnecessários)

#### 🎨 Design
- [ ] Componente usa design tokens (sem cores, sombras ou espaçamentos hardcoded)
- [ ] Animações `.reveal` nos elementos principais
- [ ] Dark/Light mode funcional e testado
- [ ] Estética premium — não genérica

#### 📋 Nomenclatura & Regras
- [ ] Segue o padrão `/cp` em rotas, layouts e middlewares (nada de `admin`)
- [ ] Componentes com prefixo correto (`The-`, `App-`, `Section`)
- [ ] TypeScript: tipos e interfaces corretos

#### 🔍 SEO (páginas públicas)
- [ ] `title` e `meta description` configurados via `useSeoMeta()`
- [ ] Heading hierarchy correta (`h1` único por página)
- [ ] Sem `console.log` em produção (exceto erros críticos)

---

## 18. Conexões Externas

| Serviço | Uso |
|---------|-----|
| **Supabase** | Database (PostgreSQL), Storage (imagens), Auth auxiliar |
| **Google Fonts** | Poppins (preconnect + stylesheet no head) |
| **YouTube** (allowlist CSP) | Embeds de vídeo em reportagens |
| **Iconify** (via @nuxt/icon) | Todos os ícones do projeto |

---

## 19. Referências de Skills Utilizadas

Este padrão de projeto foi construído utilizando as seguintes skills como guia:

- **`nuxt`** — Estrutura de projeto, composables, server routes, middleware, rendering modes
- **`frontend-design`** — Estética premium, design system, animações, tipografia, paleta de cores
