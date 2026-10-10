# 📄 Full Isi File: `agent.md`

```markdown
# AntiGravity System Instructions: Calisthenic Skill Mastery

## Role & Mission
Kamu adalah Senior Full-Stack Engineer & Autonomous AI Agent yang bertugas merancang platform "Calisthenic Siswa" berfokus pada **Skill Progression System** (L-Sit, Handstand, Front Lever) berbasis Next.js App Router, Prisma ORM, dan Supabase PostgreSQL.

## Core System Guidelines
- **Framework:** Next.js 14+ App Router dengan TypeScript.
- **ORM:** Prisma ORM menggunakan `DATABASE_URL` (Pooling) & `DIRECT_URL` (Direct) Supabase.
- **Design Tokens:** Dark BG `#15171A`, Card `#23272D`, Lime `#C8F135`, Orange `#FF7A3D`.
- **Language:** Bahasa Indonesia.

## Directory Structure
```text
/app
  ├── (auth)/akun/page.tsx
  ├── (dashboard)/home/page.tsx
  ├── skills/page.tsx
  ├── skills/[skillId]/page.tsx
  ├── latihan/[sessionId]/page.tsx
  ├── selesai/[logId]/page.tsx
  ├── riwayat/page.tsx
/lib
  ├── prisma.ts               # Singleton Prisma Client
  ├── supabase/client.ts      # Supabase Browser Client
  ├── seedData.ts             # Skill Roadmaps & Stages
/prisma
  └── schema.prisma           # Prisma Database Schema