# Portofolio Zaidan — Next.js + Tailwind CSS

## Cara menjalankan di komputer kamu

1. Pastikan sudah install **Node.js** (versi 18 ke atas). Cek dengan:
   ```
   node -v
   ```
   Kalau belum ada, download di https://nodejs.org (pilih versi LTS).

2. Extract folder ini, lalu buka lewat VS Code atau terminal, masuk ke foldernya:
   ```
   cd portfolio-next
   ```

3. Install semua dependency:
   ```
   npm install
   ```

4. Jalankan server development:
   ```
   npm run dev
   ```

5. Buka browser ke `http://localhost:3000` — portofolio kamu langsung tampil dan auto-reload tiap kamu save perubahan.

## Struktur folder

```
app/
  layout.tsx      -> pengaturan font & metadata global
  page.tsx        -> halaman utama, menyusun semua komponen
  globals.css     -> Tailwind + animasi reveal
components/
  Navbar.tsx      -> menu navigasi atas
  Hero.tsx        -> bagian awal (nama, pitch, kartu kode)
  About.tsx       -> bagian tentang saya
  Skills.tsx      -> bagian keahlian
  Projects.tsx    -> bagian proyek (edit di sini!)
  Timeline.tsx    -> bagian perjalanan pendidikan
  Contact.tsx     -> bagian kontak
  Reveal.tsx      -> animasi fade-in saat scroll
```

## Yang perlu kamu edit sebelum publish

- `components/Contact.tsx` — ganti email, link LinkedIn/GitHub/WhatsApp, link CV
- `components/Projects.tsx` — ganti data `[Nama Proyek Kedua]` & `[Nama Proyek Ketiga]` dengan proyek asli kamu, tambah link demo/repo
- `components/Skills.tsx` — sesuaikan daftar bahasa/tools

## Cara deploy biar bisa diakses orang lain (gratis)

**Opsi termudah: Vercel** (pembuat Next.js, paling cocok buat project ini)

1. Buat akun di https://vercel.com (bisa langsung pakai akun GitHub)
2. Upload folder project ini ke GitHub dulu:
   ```
   git init
   git add .
   git commit -m "Portofolio pertama"
   ```
   Buat repo baru di github.com, lalu:
   ```
   git remote add origin <link-repo-kamu>
   git branch -M main
   git push -u origin main
   ```
3. Di dashboard Vercel, klik **Add New Project** → pilih repo GitHub kamu → klik **Deploy**
4. Tunggu 1-2 menit, Vercel kasih link publik (contoh: `zaidan-portofolio.vercel.app`) yang bisa langsung kamu bagikan

Setiap kali kamu `git push` perubahan baru, Vercel otomatis build & update situsnya — jadi CSS/JS nggak akan pernah "hilang" karena semuanya diatur otomatis oleh build system Next.js.
