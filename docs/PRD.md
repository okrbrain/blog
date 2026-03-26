# [1] Nome do Projeto  
OKR Brain Blog

---

# [2] Visão Geral do Blog

O Blog da OKR Brain será um canal de aquisição orgânica altamente escalável, com geração automatizada de conteúdo via n8n.

O foco é produzir artigos com alta intenção de busca (ex: exemplos de OKR, dores e comparações), mantendo consistência de estrutura, SEO e conversão. O blog funcionará como uma máquina de geração de tráfego + ativação do produto.

A automação permite volume e velocidade, enquanto a padronização garante qualidade e alinhamento com o posicionamento da OKR Brain (IA + execução de OKRs).

---

# [3] Objetivos da Primeira Versão (v1)

- Criar máquina de conteúdo escalável via n8n
- Gerar tráfego orgânico consistente
- Converter leitores em usuários do app
- Validar quais tipos de conteúdo geram mais ativação
- Testar produção em volume sem perder qualidade

---

# [4] Personas Prioritárias

**Founder / CEO**
- Busca clareza estratégica
- Quer solução rápida (baixo tempo de setup)

**Gestor / Líder**
- Precisa organizar execução e metas
- Sofre com falta de acompanhamento

**Consultor de OKR**
- Precisa de exemplos e estrutura para clientes
- Potencial parceiro da plataforma

---

# [5] Estrutura de Conteúdo (Categorias)**

### 1. Exemplos de OKRs (PRIORIDADE MÁXIMA)
- OKRs prontos por área
- OKRs por tipo de empresa
- OKRs por cenário

👉 Melhor tipo para automação + conversão

---

### 2. Dores e Dificuldades
- Erros comuns
- Falhas na implementação
- Falta de engajamento

👉 Conteúdo que gera identificação

---

### 3. Benefícios de OKR
- Clareza
- Foco
- Alinhamento

👉 Reforço de valor

---

### 4. Estudos de Caso
- Problema → OKRs → resultado

👉 Prova prática

---

### 5. Comparação de Ferramentas
- OKR Brain vs concorrentes
- Destaque para IA + consultores

👉 Conteúdo de decisão

---

# [6] Estrutura de Cada Artigo (PADRÃO PARA AUTOMAÇÃO)

⚠️ ESSA É A PARTE MAIS CRÍTICA DO PRD

Todos os artigos devem seguir estrutura fixa para permitir geração via n8n:

---

### Bloco 1 — Título (SEO)
- Palavra-chave principal
- Ex: “Exemplos de OKR para marketing”

---

### Bloco 2 — Introdução (Dor)
- Problema direto
- 2–3 parágrafos curtos

---

### Bloco 3 — Conteúdo Principal
Depende da categoria:

**Exemplos:**
- Lista de OKRs
- Estruturado (Objetivo + Key Results)

**Dores:**
- Problema
- Explicação
- Consequência

**Comparação:**
- Tabela simples
- Diferenças claras

---

### Bloco 4 — Aplicação prática
- Como usar aquilo na prática

---

### Bloco 5 — Conexão com produto
- Mostrar como a OKR Brain resolve isso
- Destacar IA

---

### Bloco 6 — CTA final
- Direto para criação de OKR com IA

---

# [7] Estratégia de CTA (Padronizada para Automação)

### Topo
- CTA leve
- “Crie OKRs com IA”

---

### Meio
- Inserido após valor entregue
- Template fixo

---

### Final
- Bloco forte com:
  - headline
  - benefício
  - botão

---

⚠️ Todos os CTAs devem ser componentes reutilizáveis (não texto solto)

---

# [8] Estrutura de Páginas

### Home
- Destaque de conteúdos
- Categorias principais
- CTA visível

---

### Categoria
- Texto SEO padrão (gerável via n8n)
- Lista de artigos

---

### Post
- Estrutura fixa
- Índice automático
- CTAs distribuídos
- Links internos automáticos

---

# [9] Requisitos Técnicos (Astro + Automação)

### Stack
- Astro
- Markdown como fonte de conteúdo
- Integração com n8n

---

### Integração com n8n

Fluxo esperado:

1. Entrada:
   - palavra-chave
   - categoria

2. Geração:
   - conteúdo estruturado (seguindo template fixo)

3. Output:
   - arquivo markdown
   - slug automático
   - meta title + description

4. Publicação:
   - commit automático no repositório
   - build do site

---

### Regras obrigatórias de conteúdo

- Sempre usar headings corretos
- Sempre incluir palavra-chave
- Sempre incluir CTA
- Sempre incluir links internos (se existir)

---

### SEO técnico

- URLs amigáveis
- Sitemap automático
- Schema de artigo
- Open Graph

---

### Performance

- Carregamento rápido (Astro)
- JS mínimo
- Imagens otimizadas

---

# [10] Estratégia de Crescimento

### Produção em escala

- Publicação frequente (ex: 1–5 posts/dia)
- Foco em volume + consistência

---

### SEO

- Ataque a palavras-chave específicas
- Long tail primeiro
- Cluster por tema

---

### Distribuição

- LinkedIn (principal)
- Reaproveitamento de conteúdo

---

### Loop

Keyword → n8n → conteúdo → SEO → tráfego → CTA → usuário

---

# [11] Métricas de Sucesso

- 1.000+ visitas/mês (inicial)
- Crescimento semanal de tráfego
- Conversão ≥ 3%
- Nº de artigos indexados
- Nº de usuários vindos do blog

---

# [12] Regras Críticas do Sistema

- Conteúdo precisa ser padronizado
- Sem depender de edição manual
- Sempre orientado à conversão
- Sempre conectado ao produto

---

# [13] Riscos e Cuidados

- Conteúdo genérico (evitar)
- Falta de diferenciação
- SEO sem profundidade
- Repetição de conteúdo

👉 Mitigação:
- foco em exemplos reais
- foco em dor específica
- foco em aplicação prática

---

# Resumo Estratégico

O blog não é um canal editorial.

É uma máquina de aquisição automatizada.

n8n = produção  
Astro = distribuição  
Conteúdo = conversão  

--- 

Cor de destaque é verde #5EFC8D. Use degrades.

---

Foco total:
👉 escala  
👉 consistência  
👉 conversão