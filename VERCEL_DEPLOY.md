# 🚀 Deploy ke Vercel - Step by Step

## Langkah 1: Push Code ke GitHub

Pastikan semua code sudah di-push ke repository:

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

## Langkah 2: Deploy di Vercel

### Via Dashboard (Paling Mudah):

1. **Buka Vercel**
   - Kunjungi [vercel.com](https://vercel.com)
   - Login dengan GitHub account (sama dengan akun GitHub Anda)

2. **Import Project**
   - Klik tombol **"Add New..."** → **"Project"**
   - Pilih repository: **`kkdev20/bali-travel-website`**
   - Atau klik "Import" jika sudah ada daftar repo

3. **Configure Project** (Vercel akan auto-detect)
   - **Framework Preset**: Next.js (otomatis terdeteksi)
   - **Root Directory**: `./` (default)
   - **Build Command**: `next build` (otomatis)
   - **Output Directory**: `.next` (otomatis)
   - **Install Command**: `npm install` (otomatis)

4. **Deploy**
   - Klik tombol **"Deploy"**
   - Tunggu proses build selesai (sekitar 1-3 menit)
   - **Selesai!** 🎉

## Langkah 3: Setelah Deploy

Setelah deploy berhasil, Anda akan mendapat:

✅ **Production URL**: `bali-travel-website.vercel.app` (atau custom)

✅ **Auto Features**:
- HTTPS/SSL otomatis
- Global CDN
- Image optimization aktif
- Auto-deploy dari setiap git push

## Langkah 4: Setup Auto-Deployment

Setiap kali Anda push ke GitHub, Vercel akan otomatis:
- Build ulang
- Deploy versi baru
- Update production site

**Tidak perlu konfigurasi tambahan!**

## 🔧 Optional: Custom Domain

Jika punya domain sendiri:

1. Buka Project Settings di Vercel
2. Tab "Domains"
3. Tambahkan domain Anda
4. Ikuti instruksi DNS setup

## 📊 Monitor Deployment

- Lihat logs build di Vercel Dashboard
- Check analytics di tab "Analytics"
- Monitor performance di "Speed Insights"

---

**Catatan**: Website sudah 100% siap, tinggal klik deploy! 🚀



