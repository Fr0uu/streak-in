# Spesifikasi Application & Skill Engine: Calisthenic Siswa (Skill Mastery)

Website latihan calisthenic untuk siswa SMA/SMK dengan pendekatan **Skill Evolution Engine**. Pengguna berlatih melalui tahapan progresi (*Stage 1–5*) untuk menguasai gerakan spesifik (*L-Sit*, *Handstand*, *Front Lever*, *Push-up*, *Pull-up*).

---

## 1. Tech Stack & Infrastructure

| Layer | Teknologi |
|---|---|
| **Framework** | Next.js 14+ (App Router, TypeScript) |
| **Styling** | Tailwind CSS (Mobile-First Responsive) |
| **Icons** | Lucide React |
| **ORM** | Prisma ORM (`postgresql` provider) |
| **Database & Auth** | Supabase (PostgreSQL Database + Supabase Auth) |
| **Deployment** | Vercel |

---

## 2. Skema Database Prisma (`prisma/schema.prisma`)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

model UserSkillProgress {
  id           String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  userId       String   @map("user_id") @db.Uuid
  skillId      String   @map("skill_id")
  currentStage Int      @default(1) @map("current_stage")
  bestHoldSec  Int      @default(0) @map("best_hold_sec")
  updatedAt    DateTime @updatedAt @map("updated_at") @db.Timestamptz

  @@unique([userId, skillId])
  @@map("user_skill_progress")
}

model UserLibrary {
  id         String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  userId     String   @unique @map("user_id") @db.Uuid
  durasi     String[]
  skills     String[]
  createdAt  DateTime @default(now()) @map("created_at") @db.Timestamptz
  updatedAt  DateTime @updatedAt @map("updated_at") @db.Timestamptz

  @@map("user_libraries")
}

model WorkoutLog {
  id          String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  userId      String   @map("user_id") @db.Uuid
  sessionId   String   @map("session_id")
  sessionName String   @map("session_name")
  skillFocus  String?  @map("skill_focus")
  durasiDetik Int      @default(0) @map("durasi_detik")
  streakCount Int      @default(1) @map("streak_count")
  completedAt DateTime @default(now()) @map("completed_at") @db.Timestamptz

  sets SetLog[]

  @@map("workout_logs")
}

model SetLog {
  id           String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  workoutLogId String   @map("workout_log_id") @db.Uuid
  exerciseId   String   @map("exercise_id")
  exerciseName String   @map("exercise_name")
  noSet        Int      @map("no_set")
  valueLogged  Int      @map("value_logged")
  isIsometric  Boolean  @default(false) @map("is_isometric")
  createdAt    DateTime @default(now()) @map("created_at") @db.Timestamptz

  workoutLog WorkoutLog @relation(fields: [workoutLogId], references: [id], onDelete: Cascade)

  @@map("set_logs")
}