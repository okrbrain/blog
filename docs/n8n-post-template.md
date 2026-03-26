---
title: "Titulo do post"
description: "Resumo curto para listagem e SEO (140-160 caracteres)"
pubDate: 2026-03-25
updatedDate: 2026-03-25
author: "OKR Brain"
tags:
  - estrategia
  - produto
draft: false
---

## Introducao

Escreva um contexto curto do problema ou oportunidade.

## Desenvolvimento

Apresente os pontos principais com exemplos praticos.

## Fechamento

Resuma os aprendizados e proponha proximo passo.

---

## Contrato para automacao n8n

- Salvar arquivos em `src/content/blog/`.
- Nome do arquivo vira slug da URL (ex.: `plano-okr-trimestral.md` -> `/blog/plano-okr-trimestral/`).
- Campos obrigatorios:
  - `title`
  - `description`
  - `pubDate`
- Campos opcionais:
  - `updatedDate`
  - `author`
  - `tags`
  - `draft`
- Em producao, posts com `draft: true` nao aparecem no blog nem no RSS.
