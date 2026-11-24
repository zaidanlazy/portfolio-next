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

## Menjalankan dan deploy

### Menjalankan di komputer

Dari folder proyek, jalankan:

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`. Server development akan memperbarui halaman setiap kali file disimpan.

### Deploy ke Vercel

Repo proyek ini sudah ada di GitHub: `zaidanlazy/portfolio-next`, pada branch `main`.

- **Jika proyek Vercel lama sudah terhubung ke repo tersebut:** buka **Settings → Git**, pastikan repository yang terhubung benar dan **Production Branch** adalah `main`. Push baru ke `main` akan memicu deployment. Periksa tab **Deployments** untuk melihat status build.
- **Jika belum terhubung:** di dashboard Vercel pilih **Add New → Project**, import `zaidanlazy/portfolio-next`, biarkan **Root Directory** di root repo (`./`) dan gunakan pengaturan Next.js yang terdeteksi otomatis, lalu pilih **Deploy**.

Untuk memperbarui situs berikutnya, commit perubahan lalu push ke `main`:

```bash
git add .
git commit -m "Perbarui portofolio"
git push origin main
```
