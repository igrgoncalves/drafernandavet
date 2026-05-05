# Diretrizes do Projeto - Dra. Fernanda Moreno

## 🧠 Regras de Continuidade e Memória
- **Persistência Obrigatória:** Ao final de cada tarefa ou conjunto significativo de alterações, o agente DEVE atualizar os arquivos de memória do projeto para garantir que o contexto seja preservado entre sessões.
- **Arquivos de Referência:**
  - `C:\Users\Igor\.gemini\tmp\drafernandavet\memory\sessao_atual.md`: Resumo técnico detalhado da evolução.
  - `util/ultimochat.txt`: Registro rápido da última interação para fácil leitura humana.
  - `util/infosite.txt`: Fonte da verdade para textos, filosofia e dados de contato.

## 🏗️ Arquitetura Técnica
- **Framework:** Nuxt 4 (compatibilityVersion: 4).
- **Estrutura de Pastas:** App-first (código principal em `/app`).
- **Área Administrativa (CP):** 
  - Localizada em `/cp/**`.
  - Configurada como SPA (`ssr: false`) em `nuxt.config.ts`.
  - Autenticação manual via Supabase (`redirect: false`).
- **Gerenciamento de Estado:** Pinia.
- **Banco de Dados:** Supabase (Blog, Depoimentos, Configurações).

## 🎨 Identidade Visual e UI
- **Estilo:** Design Premium, imersivo, com uso de Glassmorphism e Blurs.
- **Paleta de Cores (Oficial 04/05/26):**
  - Burgundy: `#721e12` (Primária)
  - Rose: `#b97462` (Accent)
  - Background: `#fffaf9`
- **Tipografia:** 'Poppins' (Sans-serif).
- **Componentes Globais:**
  - `AppWhatsApp`: Botão flutuante no canto inferior esquerdo com animação de pulso.
  - `TheHeader` / `TheFooter`: Layout padrão.
- **Animações:** 
  - Scroll Suave: Lenis.
  - Micro-interações: Transições CSS suaves.
  - Página 404: Animações de animais com lágrimas dinâmicas e redirecionamento de 15s.

## 🛠️ Convenções de Código
- **Componentes:** Localizados em `app/components/ui`, `app/components/layout` e `app/components/sections`.
- **Pages:** Uso de `definePageMeta({ layout: false })` em páginas isoladas como `/links`.
- **Icons:** Uso exclusivo da biblioteca Iconify via módulo `@nuxt/icon` (preferência por prefixo `ph:` - Phosphor).
