# Creative Hub — A Platform for Artists & Designers

**Creative Hub** is a digital space built for artists, designers, and creative thinkers to **upload**, **discover**, **collaborate**, and even **sell** their artwork through a bidding system. Designed with a visually artistic UI and seamless user experience, Creative Hub brings the creative community together on a single platform.

---

## 🔹 Features

- 🎨 Modern, clean, and center-aligned UI made for creative audiences  
- 📁 Upload and preview images or videos with titles, tags, and categories  
- 💬 Like, comment, and collaborate on others’ artworks  
- 💸 Bidding system (frontend-simulated) to receive and place bids on artwork  
- 🔍 AI-based discovery (simulated) for personalized artwork suggestions  
- 🌗 Dark/Light mode toggle with preference saved in localStorage  
- ⚡ Smooth animations with Framer Motion and Tailwind transitions  
- 📱 Fully responsive and mobile-first layout  

---

## 🧰 Tech Stack

- **React.js** (functional components with Hooks)  
- **Tailwind CSS** with **Shadcn UI**  
- **React Router v6**  
- **Framer Motion** for animations  
- **localStorage** for theme persistence  

---

## 📁 Folder Structure

```
src/
├── assets/           → Images, icons, and static assets
├── components/       → Reusable UI components (Navbar, Cards, Forms, etc.)
├── context/          → Theme context & state management
├── hooks/            → Custom hooks (e.g., useLocalStorage)
├── pages/            → All page components (Home, Gallery, Upload, etc.)
├── App.jsx           → Main component with routing
└── main.jsx          → Project entry point
```

---

## 🗂 Pages Overview

- **Home** – Hero section, features, CTA, theme toggle  
- **Login / Register** – Email/password forms with validation & animations  
- **Dashboard** – Overview stats, avatar, buttons for gallery, uploads, collabs  
- **Upload Artwork** – Live preview upload form with tags & categories  
- **Gallery** – Masonry-style layout with like/comment and filter options  
- **AI Recommendations** – Simulated suggestions based on tags/styles  
- **Bidding Page** – View and place bids on artworks (frontend only)  
- **Profile Settings** – Update name, bio, profile picture with toast feedback  

---

## 🚀 Getting Started

```bash
git clone https://github.com/AshleyMathias/creative-hub.git
cd creative-hub
npm install
npm run dev
```

> Make sure Node.js and npm are installed before running the project.

--- 

## 🌐 Live Website

Check out the live project here:  
[https://creativehub02.netlify.app/](https://creativehub02.netlify.app/)

---

## 📄 License

This project is licensed under the MIT License.

---
