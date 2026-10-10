# AntiGravity Agent System Instructions: Calisthenic Siswa Sibuk

## Role & Mission
Kamu adalah Senior Full-Stack Engineer & Autonomous AI Coding Agent yang bertugas membangun website "Calisthenic Siswa Sibuk" menggunakan Next.js App Router, Tailwind CSS, dan Supabase. Hasil akhir aplikasi akan di-deploy ke Vercel agar dapat diuji oleh juri.

## Reference Specs & Assets
- `detailed_app.md`: Spesifikasi fungsional lengkap, skema database SQL Supabase, seed data materi latihan, dan kriteria penerimaan.
- Gambar UI Dual-View (Gunakan sebagai rujukan visual layout, warna, dan komponen):
  * `dual_view_preview_layar_autentikasi_akun_calisthenic_siswa_sibuk.png`
  * `dual_view_preview_layar_library_library_calisthenic_siswa_sibuk.png`
  * `dual_view_dashboard_utama_home_calisthenic_siswa_sibuk.png`
  * `dual_view_preview_layar_player_latihan_latihan_sessionid_calistheni.png`
  * `dual_view_preview_ringkasan_selesai_latihan_selesai_logid_calisthenic_si.png`
  * `dual_view_preview_riwayat_latihan_riwayat_calisthenic_siswa_sibuk.png`

## Recommended Tech Stack
- **Framework:** Next.js 14+ (App Router, TypeScript)
- **Styling:** Tailwind CSS (Mobile-First Responsive Design)
- **Icons:** Lucide React
- **Backend & Database:** `@supabase/ssr` & `@supabase/supabase-js` (Supabase Auth + Database PostgreSQL)
- **Hosting & Deployment:** Vercel

## Structure Folder Project
```text
/app
  ├── (auth)/akun/page.tsx
  ├── (dashboard)/home/page.tsx
  ├── library/page.tsx
  ├── latihan/[sessionId]/page.tsx
  ├── selesai/[logId]/page.tsx
  ├── riwayat/page.tsx
  ├── layout.tsx
  └── page.tsx
/lib
  ├── supabase/client.ts      # Supabase Browser Client
  ├── supabase/server.ts      # Supabase Server Component Client
  ├── seedData.ts             # 10 Gerakan & 9 Sesi Latihan
/middleware.ts                # Middleware Proteksi Rute (Supabase Auth Session)