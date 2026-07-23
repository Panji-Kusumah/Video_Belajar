# 🎓 VideoBelajar

> Modern video learning platform built with React.js, Redux Toolkit, Zustand, Axios, and Tailwind CSS.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.12-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5-443E38?style=for-the-badge)
![Axios](https://img.shields.io/badge/Axios-1.18-5A29E4?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![React Phone Number Input](https://img.shields.io/badge/Phone_Input-3.4.17-25D366?style=for-the-badge)
![React Toastify](https://img.shields.io/badge/React_Toastify-11-FF6B35?style=for-the-badge)

---

##  About

**VideoBelajar** is a modern web-based learning platform designed to help users discover and explore various video courses across multiple categories.

This project focuses on implementing modern frontend development practices, including API integration, state management, authentication flow, CRUD operations, responsive design, and reusable component architecture.

---

##  Features

###  User Features

- Responsive landing page
- Course catalog with search and filtering
- Course sorting and pagination
- Login and registration system
- User profile management
- International phone number input with country code support
- Persistent authentication session
- Toast notifications for user feedback

###  Authentication

- Login and registration flow
- Email validation
- Unique email validation during registration
- Password confirmation validation
- Session persistence using Zustand
- Logout functionality
- Protected admin routes

###  Admin Panel

- Dashboard with statistics
- Course management
- Create, read, update, and delete courses
- User management
- Responsive admin layout
- Toast notifications for CRUD operations

---

##  Tech Stack

- **React.js** — Frontend UI development
- **Redux Toolkit** — Course state management
- **Zustand** — Authentication and user session management
- **Axios** — HTTP client and API integration
- **React Router DOM** — Routing and nested routes
- **Tailwind CSS** — Styling and responsive UI
- **React Phone Number Input** — International phone number input
- **React Icons** — UI icons
- **React Toastify** — Toast notifications
- **Vite** — Development and build tool

---

##  Architecture

The project separates responsibilities between UI components, pages, API services, and state management.

- **Zustand** handles authentication and user session state.
- **Redux Toolkit** manages course data, filtering, sorting, and CRUD-related state.
- **Axios** handles communication with the backend API.
- **React Router DOM** manages application routing and nested admin routes.
- **React Phone Number Input** provides international phone number formatting and country selection.
- **React Toastify** provides toast notifications for user feedback.

---

## 📂 Project Structure

```text
└───src
    │   App.jsx
    │   index.css
    │   main.jsx
    │
    ├───assets
    │       react.svg
    │
    ├───components
    │   ├───layout
    │   │       AdminLayout.jsx
    │   │       Footer.jsx
    │   │       Navbar.jsx
    │   │       Sidebar.jsx
    │   │
    │   └───ui
    │           CourseCard.jsx
    │           CourseSection.jsx
    │           FilterSidebar.jsx
    │           Hero.jsx
    │           NewsLetter.jsx
    │           Pagination.jsx
    │           SearchBox.jsx
    │           SortDropdown.jsx
    │           Toast.jsx
    │
    ├───context
    │       ThemeContext.jsx
    │
    ├───pages
    │   ├───admin
    │   │       Dashboard.jsx
    │   │       Products.jsx
    │   │       Users.jsx
    │   │
    │   └───public
    │           Courses.jsx
    │           Home.jsx
    │           Login.jsx
    │           NotFound.jsx
    │           Profile.jsx
    │           Register.jsx
    │
    ├───services
    │       api.js
    │
    ├───store
    │   │   useAuthStore.js
    │   │
    │   └───redux
    │           courseSlice.js
    │           store.js
    │
    └───utils
```
---

##  Project Goals

This project was built to practice and implement:

- Component-based architecture with React
- State management using Redux Toolkit and Zustand
- REST API integration using Axios
- CRUD operations
- Authentication flow
- Client-side routing
- Responsive web design
- Reusable UI components
- Modern frontend development workflow

---

##  Developer

**Panji Kusumah**

Frontend Development Project

*Async...*  
*Asynchronous...*  
*Promise pending...*  
*Life mysterious...*