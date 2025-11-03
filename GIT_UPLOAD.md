# 📤 Upload Code ke GitHub

## Langkah 1: Initialize Git (Jika Belum)

```bash
git init
```

## Langkah 2: Tambahkan Remote Repository

```bash
git remote add origin https://github.com/kkdev20/bali-travel-website.git
```

Atau jika sudah ada remote, cek dulu:
```bash
git remote -v
```

Jika sudah ada tapi salah, hapus dulu:
```bash
git remote remove origin
git remote add origin https://github.com/kkdev20/bali-travel-website.git
```

## Langkah 3: Tambahkan Semua File

```bash
git add .
```

## Langkah 4: Commit

```bash
git commit -m "Initial commit - Bali Travel Website"
```

Atau dengan pesan yang lebih detail:
```bash
git commit -m "Add complete Bali travel portfolio website with dark mode, multi-language, and all sections"
```

## Langkah 5: Set Branch ke Main

```bash
git branch -M main
```

## Langkah 6: Push ke GitHub

```bash
git push -u origin main
```

Jika ini pertama kali, GitHub akan meminta login credentials.

---

## 🔐 Jika Ada Masalah dengan Authentication

### Opsi 1: Personal Access Token (Recommended)

1. Buka GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token dengan permission `repo`
3. Copy token
4. Saat push, gunakan token sebagai password:
   ```bash
   git push -u origin main
   # Username: kkdev20
   # Password: [paste token di sini]
   ```

### Opsi 2: GitHub CLI

```bash
# Install GitHub CLI
# Windows: winget install GitHub.cli
# atau download dari github.com/cli/cli

gh auth login
git push -u origin main
```

---

## ✅ Setelah Berhasil

Cek di browser:
- https://github.com/kkdev20/bali-travel-website

Semua file seharusnya sudah muncul di repository!

---

## 📝 Quick Command Summary

```bash
git init
git remote add origin https://github.com/kkdev20/bali-travel-website.git
git add .
git commit -m "Initial commit - Bali Travel Website"
git branch -M main
git push -u origin main
```

---

## 🔄 Untuk Update Selanjutnya

Setelah ada perubahan, cukup:

```bash
git add .
git commit -m "Update: description of changes"
git push
```


