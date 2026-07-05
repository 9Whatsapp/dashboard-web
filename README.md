# 9WhatsApp Dashboard Web

Ini adalah repositori untuk **Dashboard Web 9WhatsApp**, sebuah antarmuka yang memungkinkan Anda untuk mengatur infrastruktur perutean pesan WhatsApp API tanpa menggunakan nomor sendiri. 

Proyek ini menggunakan **Next.js 16 (App Router)** dengan antarmuka premium bernuansa gelap (dark-mode), dikembangkan dengan **Tailwind CSS v4** dan pola komponen yang dapat digunakan ulang (reusable components).

---

## 🚀 Fitur Utama

1. **Dashboard Overview**: Metrik pengiriman pesan (total terkirim, tingkat pengiriman), dan tabel log aktivitas *routing* terkini.
2. **Autentikasi (Login & Register)**: Alur autentikasi yang langsung terhubung dengan API Backend, beserta middleware untuk proteksi akses *dashboard*.
3. **Manajemen Instance (Devices)**: Menampilkan status dari setiap *instance* WhatsApp yang terkoneksi atau sedang dalam proses koneksi.
4. **Pesan Cepat (Quick Send)**: Mengirimkan pesan pengujian secara langsung melalui antarmuka web, lengkap dengan log histori pesan.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Bahasa Pemrograman:** [TypeScript](https://www.typescriptlang.org/)
- **Font:** Inter & JetBrains Mono (Google Fonts)

---

## 📂 Struktur Proyek

```
src/
├── app/
│   ├── (auth)/             # Halaman Autentikasi (Login, Register, dll)
│   ├── (dashboard)/        # Halaman Dashboard yang terproteksi middleware
│   ├── globals.css         # Variabel desain (Theme) & Custom Utilities
│   ├── layout.tsx          # Root Layout aplikasi
│   └── proxy.ts            # Proxy / Middleware untuk rute
├── components/
│   └── ui/                 # Reusable Components (Card, Button, Badge, dll)
├── hooks/                  # Custom React Hooks (misal: useAuth)
├── lib/                    # Library Wrapper (misal: api.ts fetcher)
└── services/               # Integrasi Endpoints Backend (auth.service.ts)
```

---

## ⚙️ Prasyarat

Sebelum menjalankan proyek, pastikan Anda telah memasang:
- **Node.js** (Minimal v18+)
- **NPM** atau **Yarn** atau **PNPM**
- Kredensial API Backend 9WhatsApp (`https://api-stg.9whatsapp.web.id`)

---

## 📦 Cara Instalasi & Menjalankan

1. **Kloning Repositori**
   ```bash
   git clone git@github.com:9Whatsapp/dashboard-web.git
   cd dashboard-web
   ```

2. **Instal Dependensi**
   ```bash
   npm install
   ```

3. **Konfigurasi Environment**
   Ubah berkas `.env.local` pada *root* proyek dan tambahkan URL backend:
   ```env
   NEXT_PUBLIC_API_URL=https://api-stg.9whatsapp.web.id
   ```

4. **Jalankan Server Lokal**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000).

---

## ✨ Panduan Desain
Desain aplikasi ini sangat merujuk pada standar `DESIGN.md` dengan filosofi:
- **Premium Dark Mode**: Latar belakang pekat (`#0A0A0B`, `#0F0F11`, `#141417`) untuk mengurangi ketegangan mata.
- **Warna Aksen Khas (WhatsApp Green)**: Digunakan secara strategis (`#25D366`).
- **Antarmuka Berlapis**: Pemisahan komponen visual yang jelas menggunakan kontras tingkat kecerahan dan garis batas samar (`#2A2A2E`).

---

*Dikembangkan untuk infrastruktur WhatsApp API.*
