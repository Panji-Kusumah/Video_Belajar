# 🎓 VideoBelajar

VideoBelajar adalah platform pembelajaran video berbasis web yang memberi pengguna akses ke beragam kursus dan tutorial berbasis video. Dengan VideoBelajar, pengguna dapat belajar dengan kecepatan dan jadwal mereka sendiri. VideoBelajar menawarkan cara yang fleksibel dan nyaman untuk memperoleh keterampilan dan pengetahuan baru, sehingga memudahkan pengguna menyesuaikan pembelajaran ke dalam kehidupan mereka yang sibuk. VideoBelajar menawarkan berbagai kursus dan tutorial, mencakup topik seperti bisnis, teknologi, kesehatan dan kesejahteraan, pembelajaran bahasa, dan banyak lagi.

## 📖 Tentang Project

VideoBelajar dirancang untuk membantu pengguna menemukan dan mempelajari berbagai topik melalui video pembelajaran berkualitas. Platform ini menyediakan:
- **Landing Page** modern dengan daftar kursus unggulan
- **Sistem Authentication** (Login/Register)
- **Admin Panel** dengan fitur CRUD lengkap
- **Dashboard** dengan statistik dan recent activities
- **Manajemen Kursus** (tambah, edit, hapus course)
- **Manajemen Pengguna** (tambah, edit, hapus user)

## ✨ Fitur Utama

### 🏠 Public Pages
- ✅ Landing Page Modern dengan Hero Section
- ✅ Daftar Kursus Unggulan (9 kursus dengan rating & review)
- ✅ Informasi Instruktur Lengkap
- ✅ Kategori Kursus (Programming, Desain, Marketing, Bisnis)
- ✅ Newsletter Subscription
- ✅ Responsive Design (Desktop & Mobile)
- ✅ Sistem Login & Register
- ✅ Conditional Rendering di Navbar (Login button vs User Avatar)

### 🔐 Authentication
- ✅ Login dengan localStorage
- ✅ Logout dengan session clearing
- ✅ Protected routes
- ✅ Conditional UI berdasarkan login status

### 👨‍💼 Admin Panel
- ✅ **Dashboard**: Statistik Total Users, Orders, Products + Recent Activities
- ✅ **Products Management**: CRUD kursus lengkap dengan form dan tabel
- ✅ **Users Management**: CRUD pengguna dengan avatar dan validasi
- ✅ **Sidebar Navigation** dengan active state
- ✅ **Toast Notifications** (zero dependency, smooth animation)

### 🎨 UI/UX Features
- ✅ Custom Toast Notification System
- ✅ Smooth Animations & Transitions
- ✅ Hover Effects
- ✅ Professional Color Scheme (Primary Green, Secondary Yellow, Accent Orange)
- ✅ Font: Lato (Google Fonts)

## 🛠️ Tech Stack

- **React JS** (Vite)
- **JavaScript** (ES6+)
- **Tailwind CSS v4** (dengan @theme configuration)
- **React Router DOM** (nested routing)
- **useState Hook** (state management)
- **localStorage** (session persistence)
- **JSX**

## 📂 Struktur Project

```bash
src/
├── components/
│   ├── layout/              # Layout components
│   │   ├── Navbar.jsx       # Navigation dengan auth logic
│   │   ├── Footer.jsx
│   │   ├── Sidebar.jsx      # Admin sidebar navigation
│   │   └── AdminLayout.jsx  # Admin layout wrapper
│   └── ui/                  # Reusable UI components
│       ├── Hero.jsx
│       ├── CourseCard.jsx
│       ├── CourseSection.jsx
│       ├── Newsletter.jsx
│       └── Toast.jsx        # Custom toast notification
├── pages/
│   ├── public/              # Public pages
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   └── admin/               # Admin pages
│       ├── Dashboard.jsx
│       ├── Products.jsx     # CRUD courses
│       └── Users.jsx        # CRUD users
├── App.jsx                  # React Router setup
├── main.jsx
└── index.css                # Tailwind v4 @theme config

🎯 Tujuan Project
Project ini dibuat untuk:
✅ Mempelajari React JS dan Component-Based Architecture
✅ Mengimplementasikan useState untuk state management
✅ Menerapkan CRUD Operations (Create, Read, Update, Delete)
✅ Mengimplementasikan React Router DOM dengan nested routes
✅ Menerapkan Responsive Web Design dengan Tailwind CSS
✅ Mengubah desain Figma menjadi aplikasi web nyata
✅ Melatih kemampuan Frontend Development standar industri
✅ Implementasi Authentication Flow dengan localStorage

👨‍💻 Developer
Dibuat oleh Panji Kusumah sebagai project pembelajaran Frontend menggunakan React JS 
Code by choice, not by force.