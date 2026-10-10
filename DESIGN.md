# UI/UX Specification: Calisthenic Siswa Sibuk

Spesifikasi antarmuka pengguna (UI) dan pengalaman pengguna (UX) untuk platform website latihan calisthenics khusus siswa SMA/SMK yang sibuk. Dokumen ini dirancang sebagai panduan utama pembuatan komponen visual dan layout menggunakan Google Stitch atau AI UI Builder lainnya.

---

## 1. Fondasi UX & Justifikasi Temuan Riset

Setiap elemen UI/UX pada platform ini dirancang langsung berdasarkan validasi masalah dari 15 responden siswa:

1. **Dark Mode Default:** Siswa sering membuka aplikasi di malam hari setelah belajar/koding. Mode gelap mengurangi kelelahan mata dan menghemat baterai HP entry-level.
2. **Mobile-First & One-Tap Workout:** 86% siswa terkendala waktu dan lelah mental. Tombol "Mulai Latihan" dapat diakses sekali klik di layar utama tanpa alur konfigurasi berbelit.
3. **Panduan Visual & Chip Regresi/Progresi:** 12 dari 15 siswa ragu akan kebenaran postur (*form*). Setiap gerakan dilengkapi poin teknik ringkas, peringatan kesalahan umum (warna oranye), serta chip "Lebih mudah" dan "Lebih sulit".
4. **Timer Istirahat & Focus Mode:** 100% siswa membawa HP saat latihan untuk musik/timer. Pemutar latihan dilengkapi timer countdown otomatis 45 detik dengan kontrol instan (+15 dtk, -15 dtk, Lewati).
5. **Streak Tracker Visual:** Menjaga motivasi siswa yang sering mengalami *on-off* konsistensi akibat kesibukan tugas sekolah.

---

## 2. Design System & Tokens (Google Stitch Ready)

### 2.1 Palet Warna (Theme Tokens)
- **Primary Accent / Lime Green (`#C8F135`):** Tombol aksi utama (CTA), indikator streak aktif, status selesai. *Teks di atas warna ini wajib berwarna `#15171A` (Hitam Pekat).*
- **Secondary Accent / Energetic Orange (`#FF7A3D`):** Timer countdown, badge kesalahan umum, status latihan terputus.
- **Background Dark (`#15171A`):** Warna latar belakang utama platform.
- **Card Surface (`#23272D`):** Warna latar belakang kartu dan kontainer UI.
- **Border Line (`#2E3238`):** Garis batas kartu dan pembatas konten (1px solid).
- **Text Primary (`#EEF1F4`):** Warna teks judul dan konten utama.
- **Text Muted (`#8A929C`):** Warna teks deskripsi, label sekunder, dan status non-aktif.

### 2.2 Tipografi & Geometri
- **Font Family:** System Sans-Serif (Inter, Roboto, atau SF Pro).
- **Hirarki Teks:**
  - Display / Judul Layar: Bold 24px
  - Subjudul / Nama Gerakan: Semi-bold 18px
  - Body / Poin Teknik: Regular 16px
  - Caption / Tag: Medium 13px
- **Geometri Komponen:**
  - Radius Kartu / Kontainer: `16px`
  - Radius Tombol / Chip: `12px`
  - Min Touch Target (HP): `48px`

---

## 3. Tata Letak & Arsitektur Layar (Screen-by-Screen Layout)

### 3.1 Layar 1: Dashboard Utama (`/home`)
- **Header:**
  - Sapaan: `"Halo, [Nama Panggilan] 👋"`
  - Aksi Kanan: Avatar pengguna dan saklar ganti mode (Dark/Light).
- **Banner Active Workout (Kondisional):**
  - Tampil hanya jika ada latihan yang belum selesai.
  - Kartu border oranye (`#FF7A3D`) dengan tombol `"Lanjutkan Latihan"`.
- **Hero Card "Sesi Hari Ini":**
  - Background `#23272D` dengan garis tepi halus Lime (`#C8F135`).
  - Badge Status: `"Sesi Hari Ini • 15 Menit • Push"`
  - Pratinjau Gerakan: Horizontal tag berisi daftar gerakan (misal: *Push-up, Incline push-up, Dead bug, Plank*).
  - Tombol Utama: Full-width Lime (`#C8F135`) dengan teks hitam `"Mulai Latihan"` + Ikon Play.
- **Streak Tracker Bar:**
  - Kartu berisi teks `"Streak [n] Hari 🔥"`.
  - Tracker 7 hari (Senin–Minggu) berupa 7 titik lingkaran (titik terisi warna Lime jika ada latihan pada hari tersebut).
- **Section "Library Saya":**
  - Baris kartu sesi tersimpan yang dapat digeser secara horizontal.
- **Bottom Navigation Bar (Fixed Mobile):**
  - 3 Menu Utama: **Beranda** (Aktif), **Library**, **Riwayat**.

---

### 3.2 Layar 2: Player Latihan Interaktif (`/latihan/:sessionId`)
- **Top Header Bar:**
  - Judul Sesi: `"Push 15"`
  - Indikator Langkah: `"Gerakan [x] dari [n]"`
  - Top Progress Bar: Bilah hijau Lime yang terisi sesuai progres gerakan.
  - Tombol Batal: Tautan kecil `"Akhiri Latihan"`.
- **Media Container (Area Panduan Visual):**
  - Kontainer 16:9 gelap `#23272D` memuat ilustrasi / GIF perulangan gerakan.
- **Informasi Gerakan & Keselamatan:**
  - Nama Gerakan: Bold 20px (misal: `"Push-up"`).
  - Target Badge: Pill tag `"3 set x 8 repetisi"`.
  - Poin Teknik: 2–3 poin ringkas tata cara gerakan yang benar.
  - Warning Box (Kesalahan Umum): Kotak berlatar oranye transparan (`#FF7A3D/10`) berisi peringatan cedera/postur salah.
- **Chip Progresi / Regresi:**
  - Chip Kiri: `"Lebih mudah: Incline push-up"`
  - Chip Kanan: `"Lebih sulit: Diamond push-up"`
- **Pencatat Set & Timer Istirahat:**
  - Baris Input Set: Nomor Set, Input Repetisi (otomatis terisi target), dan Tombol `"Selesai"`.
  - Timer Card Overlay: Muncul otomatis saat tombol `"Selesai"` ditekan. Menampilkan angka digital countdown `"00:45"` (Lime) dengan 3 tombol kontrol: `"-15 dtk"`, `"+15 dtk"`, dan `"Lewati"`.
- **Bottom Action Sticky:**
  - Tombol Full-width `"Gerakan Berikutnya"` / `"Selesai Latihan"` (pada gerakan terakhir) berwarna Lime `#C8F135`.

---

### 3.3 Layar 3: Custom Library / Onboarding Setup (`/library`)
- **Header:**
  - Judul: `"Susun Library Latihanmu"`
  - Subjudul: `"Pilih durasi dan fokus yang sesuai dengan jadwal sekolahmu."`
- **Filter Step 1 (Durasi):**
  - Multi-select Pill Buttons: `"10 Menit"`, `"15 Menit"`, `"30 Menit"` (Pill terpilih berwarna Lime `#C8F135`).
- **Filter Step 2 (Fokus Latihan):**
  - Multi-select Pill Buttons: `"Push"`, `"Legs"`, `"Pull & Core"`, `"Full Body"`.
- **Daftar Kartu Sesi:**
  - Kartu dilengkapi *checkbox* (tercentang secara default).
  - Detail Kartu: Nama Sesi, Durasi, Fokus Area, dan Ringkasan Gerakan.
- **Bottom Sticky Bar:**
  - Tombol Utama `"Simpan Library"` (`#C8F135`). Aktif jika minimal 1 sesi tercentang.

---

### 3.4 Layar 4: Ringkasan Selesai Latihan (`/selesai/:logId`)
- **Celebration Header:**
  - Ilustrasi / Ikon Api & Trofi minimalis berunsur warna Lime `#C8F135`.
  - Judul: `"Latihan Selesai! 🎉"`
  - Subjudul: `"Kerja bagus! Satu langkah lebih dekat menuju tubuh fit."`
- **Grid Ringkasan Kinerja (2x2 Card):**
  - Durasi Total: `"15 Menit"`
  - Sesi Selesai: `"Push 15"`
  - Total Set: `"12 Set"`
  - Total Repetisi: `"96 Reps"`
- **Streak Booster Card:**
  - Kartu besar menyorot `"Streak 6 Hari 🔥"` dengan peningkatan indikator visual.
- **Kartu Pengingat Harian (First-time Workout Finish):**
  - Teks: `"Mau diingatkan latihan harian di jam istirahat sekolah?"`
  - Tombol Aksi: `"Atur Pengingat"` (Primary) & `"Nanti Saja"` (Ghost Button).
- **Bottom Action Stack:**
  - Tombol Utama: `"Lihat Riwayat"` (`#C8F135`)
  - Tombol Sekunder: `"Kembali ke Beranda"` (Outline)

---

### 3.5 Layar 5: Riwayat Latihan (`/riwayat`)
- **Header Ringkasan:**
  - Total Sesi Selesai & Streak Saat Ini.
- **Daftar Log Latihan (Sorted Latest First):**
  - Kartu Riwayat: Tanggal latihan, Nama Sesi, Total Durasi, dan Jumlah Set Selesai.
  - Fitur Expand/Accordion: Menampilkan rincian repetisi per set saat kartu diklik.
- **Empty State (Jika Belum Ada Latihan):**
  - Teks: `"Belum ada riwayat latihan. Mulai sesi pertamamu!"`
  - Tombol CTA: `"Mulai Latihan"` (`#C8F135`).

---

## 4. Panduan Eksekusi Google Stitch

Saat meng-generate komponen UI di Google Stitch:
1. Pastikan selalu menggunakan kata kunci **`Mobile-First UI`**, **`Dark Mode Default (#15171A)`**, dan **`Lime Green Accent (#C8F135)`**.
2. Gunakan komponen bersih dengan sudut melengkung `16px` untuk kartu dan `12px` untuk tombol.
3. Ekspor komponen UI yang dihasilkan ke dalam format **React + Tailwind CSS** agar siap digabungkan dengan logika *vibe coding* proyekmu.