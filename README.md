# Temu Dataku Landing Page

Project Technical Test: Mini web-app sederhana dengan tiga halaman utama:

1. Home Page: Menampilkan deskripsi singkat TemuDataku dan tombol CTA untuk login.

2. Login Page: Halaman simulasi login (password apa saja diterima).

3. Katalog Produk: Menampilkan daftar produk TemuDataku yang hanya dapat diakses setelah pengguna login.

## Daftar Isi

1. [Struktur Folder](#struktur-folder)
2. [Prasyarat](#prasyarat)
3. [Instalasi](#instalasi)
4. [Contoh Berkas Environment](#contoh-berkas-environment)
5. [Setup Database](#setup-database)
6. [Menjalankan Aplikasi](#menjalankan-aplikasi)
7. [Perintah Tersedia](#perintah-tersedia)
8. [Teknologi](#teknologi)
9. [Lisensi](#lisensi)

## Struktur Folder

```
├── public/                  # Aset statis: gambar, font, favicon
│   └── images/              # Folder gambar
├── server/                  # Kode backend Express.js
│   └── server.ts            # Entrypoint server
├── src/                     # Kode frontend Next.js
│   ├── app/                 # Struktur App Router Next.js
│   │   ├── admin/           # Folder admin page
│   │   |   └── page.tsx     # Halaman utama admin page
│   │   ├── components/      # Folder components
│   │   ├── login/           # Folder login page
│   │   └── page.tsx         # Halaman utama landing page
│   └── styles/              # File CSS/SCSS global (jika ada)
├── init.sql                 # Skrip inisialisasi database PostgreSQL
├── middleware.tsx           # Middleware Next.js (opsional)
├── next.config.ts           # Konfigurasi Next.js
├── postcss.config.mjs       # Konfigurasi PostCSS & Tailwind
├── tailwind.config.cjs      # Konfigurasi Tailwind CSS
├── tsconfig.json            # Konfigurasi TypeScript
├── package.json             # Konfigurasi npm (scripts & dependencies)
└── .gitignore               # Daftar file/folder yang diabaikan Git
```

> **Catatan:** Jika Anda menambahkan komponen, styles, atau fitur baru, sesuaikan struktur di atas.

## Prasyarat

* **Node.js** v16 atau lebih baru
* **npm**, **yarn**, atau **pnpm**
* **PostgreSQL** v12 atau lebih baru
* **Git** untuk meng-clone repository

## Instalasi

1. Clone repository:

   ```bash
   git clone https://github.com/Ilham1m4man/temu-dataku-landing-page.git
   cd temu-dataku-landing-page
   ```
2. Pasang dependensi:

   ```bash
   npm install     # atau yarn install / pnpm install
   ```

## Contoh Berkas Environment

Buat file `.env` dan `.env.local` di root proyek.

### `.env`

```bash
# Koneksi database PostgreSQL
DATABASE_URL=postgresql://user:password@localhost:5432/temu_dataku

# Secret untuk JWT
JWT_SECRET=ubah_dengan_rahasia_anda

# Port (default 3000)
CLIENT_ORIGIN=localhost:PORT
```

### `.env.local`

```bash
# Override variabel environment untuk pengembangan lokal
DATABASE_URL=postgresql://dev_user:dev_pass@127.0.0.1:5432/temudataku

# Secret JWT untuk dev
JWT_SECRET=dev_rahasia
```

## Setup Database

Jalankan skrip `init.sql` untuk membuat tabel dan data dummy:

```bash
psql "$DATABASE_URL" -f init.sql
```

## Menjalankan Aplikasi

### Mode Pengembangan

1. Jalankan backend:

   ```bash
   npm run server-dev
   ```
2. Di terminal lain, jalankan frontend:

   ```bash
   npm run dev
   ```
3. Buka browser ke `http://localhost:3000`.

### Mode Produksi

1. Build frontend:

   ```bash
   npm run build
   ```
2. Jalankan backend:

   ```bash
   npm run server-dev
   ```
3. Jalankan server Next.js:

   ```bash
   npm start
   ```

## Perintah Tersedia

* `npm run dev` — Next.js dengan hot-reload (frontend)
* `npm run server-dev` — Express.js dengan `tsx` (backend)
* `npm run build` — Build Next.js untuk produksi
* `npm start` — Jalankan Next.js production server
* `npm run lint` — Jalankan ESLint

## Teknologi

* **Next.js**
* **React**
* **Express.js**
* **Tailwind CSS**
* **PostgreSQL**
* **TypeScript**
