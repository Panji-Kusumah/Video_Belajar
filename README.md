# 🎓 VideoBelajar

VideoBelajar adalah platform pembelajaran video berbasis web yang memberikan pengguna akses ke berbagai kursus dan tutorial dalam bentuk video. Dengan VideoBelajar, pengguna dapat belajar sesuai dengan kecepatan dan jadwal mereka sendiri. Platform ini menawarkan cara yang fleksibel dan nyaman untuk memperoleh keterampilan serta pengetahuan baru, sehingga memudahkan pengguna menyesuaikan proses belajar dengan aktivitas sehari-hari. VideoBelajar menyediakan berbagai kursus dan tutorial yang mencakup topik seperti bisnis, teknologi, kesehatan dan kesejahteraan, pembelajaran bahasa, dan masih banyak lagi.

---

# 📖 Tentang Project

VideoBelajar dirancang untuk membantu pengguna menemukan dan mempelajari berbagai topik melalui video pembelajaran berkualitas.

Platform ini menyediakan:

- Landing Page modern dengan daftar kursus unggulan.
- Sistem Authentication (Login/Register) dengan validasi keamanan.
- Admin Panel dengan fitur CRUD lengkap.
- Dashboard dengan statistik dan recent activities.
- Manajemen Kursus (tambah, edit, hapus course).
- Manajemen Pengguna (tambah, edit, hapus user).
- State Management menggunakan Zustand untuk performa yang optimal.

---

# ✔ Fitur Utama

## 🏠 Public Pages

- ✅ Landing Page Modern dengan Hero Section
- ✅ Daftar Kursus Unggulan (9 kursus dengan rating & review)
- ✅ Informasi Instruktur Lengkap
- ✅ Kategori Kursus (Programming, Desain, Marketing, Bisnis)
- ✅ Newsletter Subscription
- ✅ Responsive Design (Desktop & Mobile)
- ✅ Sistem Login & Register dengan validasi
- ✅ Conditional Rendering di Navbar (Login Button vs User Avatar)

## 🔐 Authentication & Security

- ✅ Register wajib dilakukan sebelum Login
- ✅ Validasi email unik (tidak bisa register dua kali dengan email yang sama)
- ✅ Validasi password match saat Register
- ✅ Password tersimpan di LocalStorage (encrypted simulation)
- ✅ Session persistence menggunakan Zustand + LocalStorage
- ✅ Logout dengan session clearing
- ✅ Protected Routes untuk Admin Panel
- ✅ Conditional UI berdasarkan status login

## 👨‍💼 Admin Panel

- ✅ Dashboard: Statistik Total Users, Orders, Products, dan Recent Activities
- ✅ Products Management: CRUD kursus lengkap dengan form dan tabel
- ✅ Users Management: CRUD pengguna dengan avatar dan validasi
- ✅ Sidebar Navigation dengan active state
- ✅ Toast Notifications (zero dependency, smooth animation)

## 🎨 UI / UX Features

- ✅ Custom Toast Notification System
- ✅ Smooth Animations & Transitions
- ✅ Hover Effects
- ✅ Professional Color Scheme (Primary Green, Secondary Yellow, Accent Orange)
- ✅ Font: Lato (Google Fonts)

---

# 🛠️ Tech Stack

- React JS (Vite)
- JavaScript (ES6+)
- Tailwind CSS v4 (`@theme` configuration)
- React Router DOM (Nested Routing)
- Zustand (State Management)
- LocalStorage (Session & Data Persistence)
- JSX

---

# 📂 Struktur Project

```text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx            # Navigation dengan auth logic (Zustand)
│   │   ├── Footer.jsx
│   │   ├── Sidebar.jsx           # Admin sidebar navigation
│   │   └── AdminLayout.jsx       # Admin layout wrapper
│   │
│   └── ui/
│       ├── Hero.jsx
│       ├── CourseCard.jsx
│       ├── CourseSection.jsx     # Fetch data dari useCourseStore
│       ├── Newsletter.jsx
│       └── Toast.jsx             # Custom toast notification
│
├── pages/
│   ├── public/
│   │   ├── Home.jsx
│   │   ├── Login.jsx             # Validasi dengan useAuthStore
│   │   └── Register.jsx          # Register dengan validasi email unik
│   │
│   └── admin/
│       ├── Dashboard.jsx         # Display user name dari Zustand
│       ├── Products.jsx          # CRUD courses dengan useCourseStore
│       └── Users.jsx             # CRUD users
│
├── store/
│   ├── useAuthStore.js           # Authentication state management
│   └── useCourseStore.js         # Course data management
│
├── App.jsx                       # React Router setup
├── main.jsx
└── index.css                     # Tailwind CSS v4 configuration
```

---

# ✔ Tujuan Project

Project ini dibuat untuk:

- ✅ Mempelajari React JS dan Component-Based Architecture.
- ✅ Mengimplementasikan Zustand sebagai state management yang efisien.
- ✅ Menerapkan CRUD Operations (Create, Read, Update, Delete).
- ✅ Mengimplementasikan React Router DOM dengan Nested Routes.
- ✅ Menerapkan Responsive Web Design menggunakan Tailwind CSS v4.
- ✅ Mengubah desain Figma menjadi aplikasi web nyata.
- ✅ Melatih kemampuan Frontend Development sesuai standar industri.
- ✅ Mengimplementasikan Authentication Flow dengan validasi keamanan.
- ✅ Memisahkan concerns melalui state management menggunakan Zustand.

---

# 📄 License

Project ini dilisensikan di bawah **MIT License**. Lihat file **LICENSE** untuk informasi lebih lanjut.

---

# 👨‍💻 Developer

**Panji Kusumah**

Project pembelajaran Frontend menggunakan React JS.

> *"Code by choice, not by force."*