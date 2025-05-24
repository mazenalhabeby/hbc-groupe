# 🔧 Backend Documentation (Best Practices)

## Overview
This backend is built with **NestJS 11**, **Prisma ORM**, and modern security, authentication, and storage practices. It follows clean architecture principles with modular organization, type safety, and integration with AWS, Redis, and PostgreSQL.

---

## 📁 Project Structure

- `/src` – Main source code (modules, controllers, services, DTOs, guards).
- `/prisma` – Database schema (`schema.prisma`) and migration files.
- `/uploads` – File upload handling (temporary or S3-staged files).
- `.env` – Environment configuration.
- `nest-cli.json` – Nest CLI settings.
- `tsconfig*.json` – TypeScript configs for build and development.
- `.prettierrc`, `eslint.config.mjs` – Linting and formatting.

---

## 📦 Libraries & Purpose

### Core Framework
- **@nestjs/common**, **@nestjs/core** – NestJS core modules.
- **@nestjs/platform-express** – Express integration.

### Auth & Security
- **@nestjs/jwt**, **passport**, **passport-jwt** – JWT authentication.
- **@nestjs/passport** – Passport strategy integration.
- **bcrypt** – Password hashing.
- **helmet** – Secure HTTP headers.
- **cookie-parser** – Cookie parsing middleware.
- **csurf** – CSRF protection.
- **@nestjs/throttler** – Rate limiting for endpoints.

### ORM & Database
- **@prisma/client**, **prisma** – Type-safe ORM for PostgreSQL (or others).
- Migrations, type generation, and DB queries.

### Validation
- **class-validator** – DTO input validation.
- **class-transformer** – Data transformation for classes and payloads.

### File Uploads
- **multer** – Handles multipart uploads.
- **multer-s3** – Streams uploads to S3.
- **@aws-sdk/client-s3**, **aws-sdk** – AWS S3 file operations.

### Caching
- **ioredis** – Redis integration for caching, sessions, or queues.

---

## 🧪 Development Tooling

- **eslint**, **prettier** – Code formatting and linting.
- **jest**, **supertest** – Unit and E2E testing.
- **ts-jest**, **ts-node** – TypeScript testing support.
- **@nestjs/testing** – Utilities to test modules and services.
- **@swc/core**, **@swc/cli** – Fast compilation.

---

## 🧱 Best Practices

### Architecture
- Split features into modules (auth, user, product, etc).
- Use controller-service-provider structure.
- Guards for roles and permissions.
- Middleware for logging, CSRF, headers.

### DTOs
- Validate every incoming request using DTOs.
- Define DTOs with decorators (`@IsString`, `@IsEmail`, etc).

### Authentication
- JWT tokens via Passport strategy.
- Guarded routes via `@UseGuards(JwtAuthGuard, RolesGuard)`.
- Refresh token management recommended (Redis/session-based).

### Prisma
- Central schema in `/prisma/schema.prisma`.
- Run migrations with `npx prisma migrate`.
- Auto-generate types for use in services.

### File Storage
- Use Multer for uploads.
- Stream to S3 via `@aws-sdk/client-s3`.

### Redis
- Use `ioredis` for caching, token/session storage, rate limiting.

---

## 🔐 Security Practices

- Use `helmet()` for HTTP header protection.
- Enable CSRF protection with `csurf`.
- Add throttling via `@nestjs/throttler` on sensitive routes.
- Store credentials securely in `.env`, not committed to Git.
- Sanitize and validate all input.

---

## 📜 NPM Scripts

```bash
npm run start         # Run in production mode
npm run start:dev     # Development mode
npm run build         # Compile app
npm run test          # Unit tests
npm run test:e2e      # End-to-end tests
npm run lint          # Lint check
npm run format        # Format code
```

---

## ✅ Summary

This backend architecture is secure, scalable, and production-ready. It uses NestJS for modular structure, Prisma for database access, and includes full JWT authentication, Redis integration, CSRF protection, and S3 file uploads.
