# 📘 Frontend Documentation (Best Practices)

## Overview
This documentation provides a comprehensive overview of the frontend structure, tools, and libraries used. It explains the rationale behind each decision to support scalability, maintainability, and performance across enterprise-grade applications.

---

## 📁 Project Structure

- `/app` – Next.js App Router structure.
- `/components` – Reusable UI components (atomic design).
- `/lib` – Shared utility functions (e.g., API clients).
- `/hooks` – Custom React hooks.
- `/store` – Zustand state management stores.
- `/schemas` – Zod validation schemas.
- `/types` – TypeScript interfaces and types.
- `/i18n` – Internationalization logic and messages.
- `/public` – Static assets.
- `/providers` – Global React providers.
- `/styles` – TailwindCSS custom styles.
- `/messages` – Translations for next-intl.

---

## 📦 Libraries & Purpose

### UI & Styling
- **TailwindCSS** – Utility-first styling.
- **ShadCN UI** – Pre-built Radix components with Tailwind.
- **clsx** / **class-variance-authority (CVA)** – Conditional styling.
- **lucide-react** – Icons.
- **tw-animate-css** – Tailwind-based animations.

### Form Handling
- **react-hook-form** – Performant form state management.
- **zod** – Runtime validation.
- **@hookform/resolvers** – Bridge for zod + react-hook-form.

### State & Data
- **zustand** – Global state manager.
- **@tanstack/react-query** – Data fetching, caching, and sync.

### Routing & Theming
- **next** – Next.js 15+ (App Router).
- **next-intl** – i18n with locale routing.
- **next-themes** – Light/dark theme support.

### Rich Content
- **@tiptap/react** – Rich text editor.
- **@uiw/react-md-editor** – Markdown editor.

### Drag & Drop
- **@dnd-kit/core**, **sortable**, **modifiers** – Advanced drag-and-drop.

### Enhancements
- **framer-motion** – Animations and transitions.
- **react-scroll** – Smooth scrolling.
- **recharts** – Data visualization.
- **cmdk** – Command menu UI.
- **sonner** – Toast notifications.

### Utility
- **uuid** – Generate unique IDs.
- **zodios** – API client with Zod types.

---

## 🧪 Developer Tooling

- **eslint**, **eslint-config-next** – Code quality.
- **prettier** – Code formatting.
- **typescript** – Static typing.
- **postcss.config.mjs**, **tailwind.config.mjs** – Tailwind config.

---

## 🧠 Best Practices

### Component Design
- Atomic design pattern.
- CVA for styling variants.
- ShadCN for accessible UI.

### Forms
- Modular forms.
- Use zod validation in `/schemas`.
- RHF for input handling.

### State Management
- Local: `useState`.
- Global: Zustand.
- Server: React Query.

### APIs
- Clients in `/lib/api`.
- Typed using Zod + Zodios.
- Managed via React Query.

### Internationalization
- Translations in `/messages`.
- `next-intl` handles locale routing.

### Environment
- Use `.env.local`.
- Keep secrets out of repo.

---

## 📜 NPM Scripts

```bash
npm run dev       # Development server
npm run build     # Production build
npm run start     # Start production
npm run lint      # Lint project
```

---

## ✅ Summary

This frontend setup is built with best practices in scalability, maintainability, performance, and developer experience using cutting-edge tools like Next.js, Tailwind, Zustand, Zod, and React Query.
