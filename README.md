# react-emotion-list

> A filterable, sortable, paginated project list, revived on Vite + React 19 + TypeScript.

[![CI](https://github.com/zzeordyga/react-emotion-list/actions/workflows/ci.yml/badge.svg)](https://github.com/zzeordyga/react-emotion-list/actions/workflows/ci.yml)
[![Live demo](https://img.shields.io/badge/live%20demo-GitHub%20Pages-blue)](https://zzeordyga.github.io/react-emotion-list)

## Stack

- **Vite 6** + **React 19** + **TypeScript 5** strict (replaced CRA / react-scripts)
- **Emotion 11** styled components on the shared revival design system (dark/light, responsive)
- **Vitest 2** + Testing Library + jsdom
- Static data shipped as `public/db.json` (json-server dropped)

## Features

- Debounced-free live search with structured filters: `is:editing`, `not:completed`,
  `before:2022-07-01`, `after:2022-06-01`, plus plain substring on name
- Sort by created date (asc/desc/default), paginated (8 per page) with windowed pager
- Responsive card grid → 2×2 on mobile, sticky header, dark/light toggle (persisted)
- Skeleton loaders, empty state, error state; immutable reducer-safe filtering

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
npm run typecheck    # tsc --noEmit
npm run test         # vitest run
npm run lint         # eslint
npm run build        # static export to ./dist
```

## Deploy

Vite builds a static SPA at `./dist`, deployed to **GitHub Pages** via Actions
on green CI (`base: /react-emotion-list/`). For AWS, upload `./dist` to S3 +
CloudFront unchanged.