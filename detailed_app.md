# Spesifikasi Prototype & Deployment: Calisthenic Siswa Sibuk

Website latihan calisthenic untuk siswa SMA/SMK yang sibuk. Dokumen ini adalah spesifikasi siap pakai untuk dikembangkan menjadi aplikasi web production-ready berbasis **Next.js App Router**, **Supabase (Database & Auth)**, dan **Vercel Hosting**.

---

## 1. Ringkasan Produk & Tech Stack

| Item | Isi |
|---|---|
| **Tujuan** | Membantu siswa sibuk berlatih calisthenic secara rutin lewat sesi singkat 10–30 menit, panduan gerakan, dan pencatatan latihan |
| **Pengguna Target** | Siswa SMA/SMK usia 16–18 tahun dengan jadwal padat, berlatih mandiri di rumah |
| **Framework Frontend** | Next.js 14+ (App Router, TypeScript, React) |
| **Styling & UI** | Tailwind CSS, Lucide React Icons |
| **Database & Auth** | Supabase (PostgreSQL Database + Supabase Auth) |
| **Hosting & Deployment**| Vercel (Hosting Gratis & Live Link untuk Pengujian Juri) |
| **Bahasa Antarmuka** | Bahasa Indonesia |
| **Nilai Utama** | Sesi 10–30 menit, 1-click start, panduan gerakan aman, tracker streak real-time |

---

## 2. Ruang Lingkup Aplikasi

### Termasuk dalam Prototype (Production Scope):
1. **Autentikasi (Supabase Auth):** Regristrasi akun baru, Masuk/Login, Keluar/Logout.
2. **Custom Library (Supabase Database):** Menyimpan preferensi durasi & fokus siswa di database.
3. **Dashboard Utama:** Sesi hari ini (auto-rotate), streak 7 hari, status latihan terputus (*active workout*).
4. **Player Latihan Interaktif:** Set logger, timer istirahat countdown 45 detik (+15s, -15s, Lewati), chip progresi/regresi.
5. **Ringkasan Selesai & Celebration:** Kalkulasi total durasi, set, repetisi, penambahan streak real-time.
6. **Riwayat Latihan (Accordion View):** Catatan riwayat latihan tersimpan permanen di Supabase per siswa.
7. **Responsive Dual-View Design:** Tampilan dioptimalkan untuk Mobile-First (HP) dan rapi di Desktop.

### Tidak Termasuk (Out of Scope):
- OAuth Social Login (Google/Facebook)
- AI Camera posture evaluation & video analysis
- Pembayaran, iklan, dan sosial feed/komunitas

---

## 3. Peta Rute & Referensi UI Visual

| Rute | Akses | Deskripsi Layar | File Referensi Gambar UI |
|---|---|---|---|
| `/` | Publik | Beranda Landing Page | - |
| `/akun` | Publik | Tab Login & Register | `dual_view_preview_layar_autentikasi_akun_calisthenic_siswa_sibuk.png` |
| `/library` | Protected | Onboarding / Setup Custom Library | `dual_view_preview_layar_library_library_calisthenic_siswa_sibuk.png` |
| `/home` | Protected | Dashboard Utama & Sesi Hari Ini | `dual_view_dashboard_utama_home_calisthenic_siswa_sibuk.png` |
| `/latihan/[sessionId]`| Protected | Active Workout Player & Timer | `dual_view_preview_layar_player_latihan_latihan_sessionid_calistheni.png` |
| `/selesai/[logId]` | Protected | Summary & Selebrasi Selesai | `dual_view_preview_ringkasan_selesai_latihan_selesai_logid_calisthenic_si.png` |
| `/riwayat` | Protected | Riwayat & Rekap Latihan | `dual_view_preview_riwayat_latihan_riwayat_calisthenic_siswa_sibuk.png` |

---

## 4. Design System & Tokens

### Color Palette Tokens
- **Background Dark:** `#15171A` (Default Mode Gelap)
- **Card Surface:** `#23272D` (Border 1px solid `#2E3238`)
- **Primary Accent (Lime Green):** `#C8F135` (Gunakan untuk Tombol CTA Utama, Badge Streak, Status Aktif. *Teks di atas tombol warna ini wajib `#15171A`*).
- **Secondary Accent (Energetic Orange):** `#FF7A3D` (Gunakan untuk Timer Countdown, Warning Box, Banner Latihan Terputus).
- **Text Primary:** `#EEF1F4`
- **Text Muted:** `#8A929C`

### Geometri & Layout
- Radius Kartu: `16px` (`rounded-2xl`)
- Radius Tombol: `12px` (`rounded-xl`)
- Touch Target Minimal: `48px`
- Layout Mobile: Single column dengan Bottom Navigation Bar (3 tab: Beranda, Library, Riwayat).
- Layout Desktop: Centered container (`max-w-xl` atau `max-w-4xl`) dengan Top Header Navigation Bar.

---

## 5. Skema Database Supabase (SQL Script)

Jalankan skrip SQL berikut di **Supabase SQL Editor** untuk membuat tabel database yang diperlukan:

```sql
-- 1. TABEL USER LIBRARIES (Preferensi Durasi & Fokus Siswa)
CREATE TABLE public.user_libraries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  durasi TEXT[] NOT NULL DEFAULT '{}',
  fokus TEXT[] NOT NULL DEFAULT '{}',
  session_ids TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. TABEL WORKOUT LOGS (Riwayat Sesi Latihan Selesai)
CREATE TABLE public.workout_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  session_id TEXT NOT NULL,
  session_name TEXT NOT NULL,
  durasi_detik INTEGER NOT NULL DEFAULT 0,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text