# ⚡ Calisthenic Siswa Sibuk

> **Platform Kebugaran Singkat & Terukur untuk Pelajar Menengah (SMA/SMK)**  
> Membantu siswa tetap bugar dan produktif di sela padatnya jadwal sekolah melalui sesi mikro 10–30 menit, panduan gerakan ramah kamar kos, dan pencatatan latihan otomatis.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.21-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![Database](https://img.shields.io/badge/Database-Supabase%20%2F%20MySQL-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

---

## 📌 Latar Belakang Masalah

Berdasarkan riset kebutuhan siswa usia 16–18 tahun:
1. **Keterbatasan Waktu & Energi Mental:** 86% siswa merasa kelelahan setelah seharian belajar di sekolah dan kesulitan menyisihkan waktu 1–2 jam untuk pergi ke gym.
2. **Keraguan Postur & Takut Cedera:** Sebagian besar siswa berlatih mandiri di rumah tanpa pengawasan instruktur, sehingga membutuhkan panduan form yang jelas dan alternatif gerakan yang lebih aman.
3. **Inkonsistensi Rutinitas:** Kesibukan tugas sekolah dan ujian sering memutus kebiasaan olahraga.

**Calisthenic Siswa Sibuk** hadir sebagai solusi: menghadirkan sesi calisthenics 10–30 menit tanpa alat gym, bebas suara hentakan (ramah kamar kos), dengan prinsip **1-Click Start**.

---

## ✨ Fitur Utama

- 🚀 **1-Click Start & Sesi Otomatis Berotasi:** Siswa dapat langsung memulai latihan hari ini dari dashboard tanpa harus mengatur alur menu yang rumit.
- 🛡️ **Panduan Teknik & Kotak Keselamatan:** Setiap gerakan dilengkapi poin instruksi ringkas, peringatan kesalahan umum berisiko cedera (*Orange Warning Box*), dan tempo gerakan.
- 🔄 **Chip Penyesuaian Level (Regresi & Progresi):** Fitur *"Lebih mudah"* (misal: *Incline Push-up*) dan *"Lebih sulit"* (*Diamond Push-up*) memudahkan siswa menyesuaikan beban latihan dengan level kebugaran masing-masing.
- ⏱️ **Player Latihan Interaktif & Timer Istirahat 45 Detik:** Countdown timer istirahat otomatis antar set dengan kontrol cepat instan (`+15 dtk`, `-15 dtk`, `Lewati`).
- 🔥 **Tracker Konsistensi 7 Hari (Streak Tracker):** Visualisasi titik aktivitas mingguan dan selebrasi di akhir sesi untuk menjaga motivasi belajar dan berolahraga.
- 📚 **Custom Library Onboarding:** Personalisasi kombinasi durasi (10, 15, 30 menit) dan fokus latihan (*Push*, *Legs*, *Pull & Core*, *Full Body*).
- 📜 **Riwayat Latihan (Accordion View):** Log riwayat latihan tersimpan rapi dengan rincian repetisi per set yang dapat diperluas (*expandable*).
- 🌓 **Dual-Theme (Default Dark Mode):** Desain mobile-first dengan tema gelap pekat (`#15171A`) dan aksen *Lime Green* (`#C8F135`) yang hemat daya serta nyaman di mata saat dibuka malam hari.

---

## 🛠️ Tech Stack

- **Frontend Framework:** [Next.js 14+](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Mobile-First Responsive Design)
- **Ikon Antarmuka:** [Lucide React](https://lucide.dev/)
- **ORM & Data Layer:** [Prisma ORM](https://www.prisma.io/) (Mendukung PostgreSQL Supabase & MySQL Localhost)
- **Database:** [Supabase](https://supabase.com/) (Production PostgreSQL) / [XAMPP phpMyAdmin](https://www.apachefriends.org/) (Local MySQL)
- **Hosting & CI/CD:** [Vercel](https://vercel.com/)

---

## 📁 Struktur Folder Proyek

```text
calisthenic-siswa-sibuk/
├── app/                              # Next.js 14 App Router
│   ├── (auth)/akun/page.tsx          # Layar Autentikasi (Masuk & Daftar + Demo Auto-fill)
│   ├── (dashboard)/home/page.tsx     # Dashboard Siswa, Sesi Hari Ini & Streak
│   ├── library/page.tsx              # Personalisasi Library Latihan
│   ├── latihan/[sessionId]/page.tsx  # Interactive Workout Player & Rest Timer
│   ├── selesai/[logId]/page.tsx      # Ringkasan Selesai Latihan & Selebrasi
│   ├── riwayat/page.tsx              # Riwayat Latihan (Accordion Log)
│   ├── notifikasi/page.tsx           # Pengaturan Alarm Pengingat Harian
│   ├── api/                          # Route Handlers (Auth, Library, Workout Logs)
│   ├── globals.css                   # Tailwind Base & Token Desain
│   └── layout.tsx                    # Root Layout & Global Providers
├── components/                       # Reusable UI & Layout Components
│   ├── layout/Header.tsx             # Navbar Desktop & Mobile Header
│   ├── layout/BottomNav.tsx          # Fixed Bottom Navigation (Mobile View)
│   └── layout/MobileContainer.tsx    # Responsivitas Kontainer Layar
├── context/                          # React Client State Management
│   ├── AuthContext.tsx               # Context Autentikasi Pengguna
│   └── WorkoutContext.tsx            # Context Logika Latihan, Timer & Library
├── prisma/
│   ├── schema.prisma                 # Skema Database Prisma (Users, Logs, Sets)
│   └── seed.js                       # Seeding Data Awal Siswa Demo
├── middleware.ts                     # Proteksi Rute Terotentikasi
└── README.md                         # Dokumentasi Proyek
```

---

## 🚀 Panduan Memulai Cepat (Local Development)

### 1. Kloning Repositori
```bash
git clone https://github.com/USERNAME-ANDA/calisthenic-siswa-sibuk.git
cd calisthenic-siswa-sibuk
```

### 2. Pasang Dependensi
```bash
npm install
```

### 3. Konfigurasi Environment Variables (`.env`)
Salin berkas `.env.example` menjadi `.env`:
```bash
cp .env.example .env
```

Sesuaikan nilai koneksi database Anda:
* **Untuk Local MySQL (XAMPP / phpMyAdmin):**
  ```env
  DATABASE_URL="mysql://root:@localhost:3306/calisthenic_db"
  ```
* **Untuk Cloud Supabase (PostgreSQL):**
  ```env
  DATABASE_URL="postgresql://postgres.[REF]:[PASS]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
  DIRECT_URL="postgresql://postgres.[REF]:[PASS]@aws-0-[REGION].pooler.supabase.com:5432/postgres"
  ```

### 4. Sinkronisasi Database & Seed Data
```bash
# Push skema tabel ke database
npx prisma db push

# Masukkan akun demo awal
npm run seed
```

### 5. Jalankan Server Lokal
```bash
npm run dev
```
Buka browser di [http://localhost:3000](http://localhost:3000).

---

## 🔑 Akun Demo Pengujian

Aplikasi telah dilengkapi akun demo pengujian yang siap digunakan tanpa perlu registrasi ulang:

| Keterangan | Nilai |
|---|---|
| **Email** | `rizky@sma11.sch.id` |
| **Kata Sandi** | `rahasia123` |
| **Shortcut** | Tombol **"Isi Demo"** pada halaman `/akun` |

---

## 🌐 Panduan Deployment ke Vercel

1. **Push repositori ini ke akun GitHub Anda:**
   ```bash
   git init
   git add .
   git commit -m "feat: initial release for Calisthenic Siswa Sibuk"
   git branch -M main
   git remote add origin https://github.com/USERNAME-ANDA/calisthenic-siswa-sibuk.git
   git push -u origin main
   ```
2. Buka [Vercel](https://vercel.com/) dan impor repositori GitHub tersebut.
3. Pada tab **Environment Variables**, tambahkan:
   - `DATABASE_URL`: *(Connection pooling URI dari Supabase)*
   - `DIRECT_URL`: *(Direct connection URI dari Supabase)*
4. Klik **Deploy**. Aplikasi akan otomatis ter-build dan siap diuji secara publik!

---

## 📄 Lisensi & Kontribusi

Proyek ini dibuat untuk tujuan edukasi, portofolio, dan kompetisi inovasi digital pelajar. Terbuka untuk kontribusi fitur dan masukan desain.

© 2026 **Calisthenic Siswa Sibuk**.

