export default function NotFound() {
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center bg-bg text-ink">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-2">404</h1>
          <p className="text-inkSoft mb-4">Halaman tidak ditemukan.</p>
          <a href="/" className="text-accent underline">
            Kembali ke beranda
          </a>
        </div>
      </body>
    </html>
  );
}
