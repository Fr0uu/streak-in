# ⚡ StreakIn

> **Platform Latihan Kalistenik Pelajar (SMA/SMK)**  
> Membantu siswa tetap bugar dan produktif di sela jadwal sekolah yang padat melalui sesi 10, 15, dan 30 menit, panduan gerakan ramah kamar kos, Isometric Hold Timer, dan Rest Timer presisi.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.21-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![Database](https://img.shields.io/badge/Database-PostgreSQL%20%2F%20MySQL-3ECF8E?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)
[![Deployment](https://img.shields.io/badge/Node_Runner-Webuzo%20%2F%20VPS-orange?style=for-the-badge&logo=node.js)](https://nodejs.org/)

---

## 📌 Latar Belakang Masalah

Berdasarkan kebutuhan siswa usia 15–18 tahun:
1. **Keterbatasan Waktu & Energi Mental:** Siswa sering kelelahan setelah seharian belajar di sekolah dan kesulitan menyisihkan waktu 1–2 jam untuk pergi ke tempat gym.
2. **Kekhawatiran Postur & Risiko Cedera:** Latihan mandiri tanpa pelatih membutuhkan panduan form yang jelas, opsi regresi yang lebih aman, dan isyarat suara/getaran saat menahan posisi hold.
3. **Inkonsistensi Kebiasaan:** Jadwal tugas dan ujian sekolah sering memutus rutinitas olahraga.

**StreakIn** hadir sebagai kawan latihan: menghadirkan sesi kalistenik 10, 15, dan 30 menit tanpa alat gym, bebas hentakan keras (ramah kamar kos), dengan prinsip **1-Click Start**.

---

## ✨ Fitur Utama

- 🚀 **1-Click Start Sesi Hari Ini:** Siswa dapat langsung memulai latihan harian dari beranda tanpa navigasi berbelit.
- 🎯 **Peta Jalan Skill 5 Stage:** Panduan terstruktur untuk 3 skill fokus (L-Sit, Handstand, dan Elbow Lever) lengkap dengan kriteria kelulusan tiap tahap.
- ⏱️ **Timer Latihan Terpadu:**
  - *Isometric Hold Timer*: Menghitung detik tahanan statis dengan tombol mulai/jeda ergonomis satu jempol.
  - *Rest Timer 45 Detik*: Menghitung mundur otomatis jeda antar set dengan tombol instan (`+15 dtk`, `-15 dtk`, `Lewati`).
- 🔊 **Audio Beep & Haptic Feedback:** Bunyi hitung mundur 3-2-1 detik terakhir dan getaran (Web Audio API & Vibration API) dengan toggle suara yang tersimpan di memori perangkat.
- 🔥 **Tracker Konsistensi 7 Hari (Streak Tracker):** Visualisasi disiplin latihan harian untuk memicu semangat siswa.
- 📚 **Library Latihan Fleksibel:** Personalisasi kombinasi durasi (10, 15, 30 menit) dan fokus otot (*Push*, *Legs*, *Pull & Core*, *Full Body*).
- 📜 **Riwayat & Evaluasi Latihan:** Pencatatan log sesi otomatis dengan riwayat beban repetisi dan detik tahanan.
- 📱 **Desain Mobile-First Ergonomis:** Layout padat untuk kenyamanan penggunaan satu tangan di HP serta tampilan multi-kolom yang optimal di layar laptop.

---

## 🛠️ Kebutuhan Sistem & Tech Stack

- **Versi Node.js yang Disarankan:** Node.js **18.x LTS** atau **20.x LTS** (kompatibel dengan npm 9+)
- **Frontend Framework:** Next.js 14 (App Router, React 18, TypeScript)
- **Styling:** Tailwind CSS (Dark Mode default)
- **Ikon Antarmuka:** Lucide React
- **ORM & Data Layer:** Prisma ORM (Mendukung MySQL dan PostgreSQL)
- **Host Architecture:** **Host-Agnostic** — Tidak terikat vendor platform serverless tertentu, siap dideploy di Node.js runner mandiri (Webuzo, VPS cPanel, Docker, Linux VM).

---

## 📁 Struktur Folder Proyek

```text
calisthenic-app/
├── app/                              # Next.js App Router
│   ├── (auth)/akun/page.tsx          # Masuk & Daftar + Demo Auto-fill
│   ├── (dashboard)/home/page.tsx     # Dashboard Siswa, Sesi Hari Ini & Streak
│   ├── skills/                       # Katalog & Roadmap Skill 5 Stage
│   │   ├── page.tsx                  # Katalog Skill
│   │   └── [skillId]/page.tsx        # Detail Progresi & Syarat Kelulusan Stage
│   ├── library/page.tsx              # Personalisasi Library (10 / 15 / 30 Menit)
│   ├── latihan/[sessionId]/page.tsx  # Interactive Workout Player, Timer & Audio
│   ├── selesai/[logId]/page.tsx      # Ringkasan Selesai Latihan & Rekor PB
│   ├── riwayat/page.tsx              # Riwayat Latihan (Accordion Log)
│   ├── notifikasi/page.tsx           # Pengaturan Alarm Pengingat
│   ├── api/                          # Route Handlers API (Auth, Library, Logs)
│   ├── globals.css                   # Token Desain & Pengaturan Global
│   └── layout.tsx                    # Root Layout & Metadata
├── components/                       # Komponen UI Reusable
│   ├── layout/Header.tsx             # Navbar Desktop & Mobile Header
│   ├── layout/BottomNav.tsx          # Navigasi Bawah Khusus HP
│   ├── layout/MobileContainer.tsx    # Kontainer Responsif Mobile & Laptop
│   └── ui/                           # Komponen Presentasional (SafeImage, StageImage)
├── context/                          # State Management
│   ├── AuthContext.tsx               # Otentikasi Pengguna & Demo Account
│   └── WorkoutContext.tsx            # State Latihan, Timer, Stage, & Library
├── lib/                              # Seed Data & Konfigurasi Sesi Latihan
├── prisma/                           # Skema Database & Berkas Seed
├── middleware.ts                     # Proteksi Rute Autentikasi
└── README.md                         # Dokumentasi Proyek
```

---

## 🚀 Panduan Memulai Cepat (Local Development)

### 1. Kloning Repositori
```bash
git clone https://github.com/USERNAME-ANDA/calisthenic-app.git
cd calisthenic-app
```

### 2. Pasang Dependensi
```bash
npm install
```

### 3. Konfigurasi Environment Variables (`.env`)
Salin berkas `.env.example` (atau buat berkas `.env` baru):
```bash
cp .env.example .env
```

Sesuaikan koneksi database Anda:
```env
DATABASE_URL="mysql://root:@localhost:3306/calisthenic_db"
# Atau PostgreSQL:
# DATABASE_URL="postgresql://user:password@localhost:5432/calisthenic_db"
```

### 4. Sinkronisasi Database
```bash
# Generate Prisma Client & Push skema tabel
npx prisma generate
npx prisma db push

# (Opsional) Jalankan data awalan
npm run seed
```

### 5. Jalankan Development Server
```bash
npm run dev
```
Buka peramban di [http://localhost:3000](http://localhost:3000).

---

## 🌐 Panduan Build & Deployment ke Server / Webuzo (Node Runner)

Aplikasi ini bersifat **host-agnostic** dan tidak memiliki keterikatan dengan platform Vercel. Anda dapat menjalankannya di server VPS/cPanel/Webuzo dengan langkah berikut:

### 1. Prasyarat Server
- Server Linux (Ubuntu/Debian/CentOS/Almalinux) atau Control Panel Webuzo/cPanel
- **Node.js:** Versi **18.x LTS** atau **20.x LTS**
- Database: MySQL 8+ atau PostgreSQL 14+
- Process Manager: PM2 (disarankan) atau Node App Runner bawaan panel

### 2. Tahap Build Produksi
Di terminal server atau pipeline deployment Anda:
```bash
# 1. Pasang dependensi
npm install --production=false

# 2. Sinkronkan skema Prisma
npx prisma generate

# 3. Kompilasi aplikasi Next.js ke mode produksi
npm run build
```

### 3. Menjalankan Aplikasi
Jalankan server produksi menggunakan:
```bash
npm run start
```

Atau menggunakan **PM2** agar aplikasi tetap berjalan di latar belakang (*daemon*) dan otomatis menyala kembali jika server reboot:
```bash
# Menjalankan Next.js produksi dengan PM2 di port default 3000
pm2 start npm --name "streakin-app" -- start

# Menyimpan konfigurasi startup PM2
pm2 save
pm2 startup
```

Jika server menggunakan reverse proxy Nginx/Apache, arahkan proxy pass ke `http://127.0.0.1:3000`.

---

## 🔑 Akun Demo Pengujian

Aplikasi dilengkapi akun demo bawaan untuk kemudahan evaluasi:

| Keterangan | Nilai |
|---|---|
| **Email** | `rizky@sma11.sch.id` |
| **Kata Sandi** | `rahasia123` |
| **Shortcut** | Tombol **"Isi Demo"** pada halaman `/akun` |

---

## 📄 Lisensi

© 2026 **StreakIn** — Kawan Latihan Kalistenik Pelajar Indonesia.
