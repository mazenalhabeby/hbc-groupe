# 🚀 Full Stack Web Application (Next.js + NestJS + Prisma)

This is a modular, production-ready full-stack application built with modern web technologies. The frontend is powered by **Next.js 15**, while the backend uses **NestJS 11** with **Prisma ORM**, Redis, JWT authentication, and AWS S3 for file handling.

---

## 📁 Monorepo Structure

```
root/
├── frontend/         # Next.js frontend (App Router)
├── backend/          # NestJS backend (API, Auth, DB)
├── documentation/    # Technical documentation (frontend & backend)
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🧱 Tech Stack Overview

### 🖥️ Frontend
- **Next.js 15+** (App Router)
- **TailwindCSS + ShadCN UI**
- **React Hook Form + Zod**
- **React Query + Zustand**
- **next-intl** for internationalization

### 🔧 Backend
- **NestJS 11** Modular Architecture
- **Prisma ORM** with PostgreSQL
- **JWT Authentication** + Role Guards
- **Redis** for session and caching
- **AWS S3** for media storage
- **CSRF, Helmet, Throttler** for security

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/your-repo.git
cd your-repo
```

### 2. Setup Environment Variables

Create `.env` files in both `frontend/` and `backend/` directories.

```bash
# .env example (backend)
DATABASE_URL=postgresql://user:pass@localhost:5432/dbname
JWT_SECRET=your_secret
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
REDIS_URL=redis://localhost:6379
```

---

## 🖼️ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Access: [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Backend Setup

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npm run start:dev
```

API Access: [http://localhost:4000](http://localhost:4000)

---

## 📚 Documentation

Full development and architectural documentation is located in the [documentation](./documentation) folder:

- 📘 [Frontend Documentation](./documentation/frontend.md)
- 🔧 [Backend Documentation](./documentation/backend.md)

Includes details on:
- Folder structure
- Package rationale
- Authentication flow
- Form, state, and API patterns
- Security guidelines

---

## 🧪 Testing

### Backend

```bash
npm run test          # Unit tests
npm run test:e2e      # End-to-end tests
```

Frontend test integration coming soon (Playwright/Vitest suggested).

---

## 🚀 Deployment

Deployment-ready with Docker, CI/CD, and environment separation. See documentation for CI/CD and cloud setup recommendations (e.g., Vercel + Render + Supabase + AWS).

---

## 📝 License

Licensed under the **MIT License** – feel free to use, adapt, and build on it.

---

## 🙌 Contributing

Coming soon: contribution guide and project roadmap.
