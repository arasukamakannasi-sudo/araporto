# 🚀 Araporto - Modern Portfolio Website

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.6-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF.svg)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.16-FF0055.svg)](https://www.framer.com/motion/)

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS. Features elegant animations, clean design, and professional presentation.

## 📋 Table of Contents

- [🚀 Features](#-features)
- [📁 Project Structure](#-project-structure)
- [🎨 Components](#-components)
- [🛠️ Technologies](#️-technologies)
- [📦 Installation & Setup](#-installation--setup)
- [🏗️ Build & Deploy](#️-build--deploy)
- [🎯 Design Philosophy](#-design-philosophy)
- [✨ Animations & Interactions](#-animations--interactions)
- [📱 Responsive Design](#-responsive-design)
- [🔧 Customization](#-customization)
- [📊 Performance](#-performance)
- [🐛 Troubleshooting](#-troubleshooting)
- [📄 License](#-license)

## 🚀 Features

### ✨ **Design & User Experience**
- **Professional Theme**: Clean white, soft gray, and navy accents
- **Elegant Typography**: Inter, Lato, and Poppins fonts
- **Clean Layout**: Minimalist design focused on content
- **Fully Responsive**: Optimized for desktop, tablet, and mobile

### 🎭 **Animations & Interactions**
- **3D Effects**: Subtle rotations and 3D transformations
- **Framer Motion**: Smooth and elegant animations
- **Hover Effects**: Responsive and engaging interactions
- **Scroll Animations**: Elements animate on scroll

### 🏗️ **Technology & Performance**
- **TypeScript**: Type safety and enhanced developer experience
- **Vite**: Fast and efficient build tool
- **TailwindCSS**: Utility-first CSS framework
- **Component Architecture**: Modular and maintainable structure

## 📁 Project Structure

```
araporto/
├── 📁 public/
│   └── vite.svg
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📄 Navbar.tsx          # Main navigation with hamburger menu
│   │   ├── 📄 Hero.tsx            # Hero section with profile photo
│   │   ├── 📄 About.tsx           # About section with personal info
│   │   ├── 📄 Contact.tsx         # Contact form and information
│   │   └── 📄 Footer.tsx          # Footer with quick navigation
│   ├── 📄 App.tsx                 # Main application component
│   ├── 📄 main.tsx               # Application entry point
│   └── 📄 index.css              # Global styles and Tailwind imports
├── 📄 index.html                 # HTML template
├── 📄 package.json               # Dependencies and scripts
├── 📄 tailwind.config.js         # TailwindCSS configuration
├── 📄 postcss.config.js          # PostCSS configuration
├── 📄 tsconfig.json              # TypeScript configuration
├── 📄 tsconfig.node.json         # TypeScript configuration for Node
├── 📄 vite.config.ts             # Vite configuration
├── 📄 .gitignore                 # Git ignore rules
└── 📄 README.md                  # Project documentation
```

## 🎨 Components

### 🏠 **Hero Section** (`Hero.tsx`)
- Profile photo with animated border
- 3D title effects
- Brief description
- CTA buttons with hover effects
- Scroll indicator animation

### 👤 **About Section** (`About.tsx`)
- Photo with 3D entrance effect
- Personal description
- Information cards (Hobbies, Personality, Philosophy, Daily Life)
- Scroll-triggered animations

### 📞 **Contact Section** (`Contact.tsx`)
- Contact form with validation
- Contact information (Email, Phone, Location)
- Social media links
- Thank you message

### 🧭 **Navigation** (`Navbar.tsx`)
- Logo with 3D effects
- Desktop and mobile menu
- Scroll-based background changes
- Smooth scroll navigation

### 🦶 **Footer** (`Footer.tsx`)
- Copyright information
- Quick navigation
- Back to top button
- Heart animation

## 🛠️ Technologies

### **Frontend Framework**
- **React 18.2.0** - UI library with hooks and modern features
- **TypeScript 5.2.2** - Type safety and developer experience

### **Build Tools**
- **Vite 5.0.8** - Fast build tool and dev server
- **PostCSS** - CSS processing
- **ESLint** - Code linting

### **Styling & Animation**
- **TailwindCSS 3.3.6** - Utility-first CSS framework
- **Framer Motion 10.16.16** - Animation library
- **Lucide React 0.294.0** - Icon library


## 📦 Installation & Setup

### **Prerequisites**
- Node.js (version 16 or newer)
- npm or yarn package manager

### **1. Clone or Download Project**
```bash
# If using git
git clone https://github.com/arasukamakannasi-sudo/araporto.git
cd araporto

# Or download and extract ZIP file
```

### **2. Install Dependencies**
```bash
npm install
# or
yarn install
```

### **3. Run Development Server**
```bash
npm run dev
# or
yarn dev
```

### **4. Access Website**
Open browser and navigate to: `http://localhost:5173`

### **5. Build for Production**
```bash
npm run build
# or
yarn build
```

### **6. Preview Production Build**
```bash
npm run preview
# or
yarn preview
```

## 🏗️ Build & Deploy

### **Build Process**
```bash
# Build for production
npm run build

# Output will be saved in 'dist/' folder
# Contains:
# - index.html
# - assets/ (CSS, JS, images)
```

### **Deploy Options**

#### **1. Static Hosting (Netlify, Vercel)**
- Upload the `dist/` folder to your hosting provider
- Or connect your repository for auto-deploy

#### **2. GitHub Pages**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add script to package.json
"homepage": "https://username.github.io/araporto",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

#### **3. Traditional Web Server**
- Copy the contents of the `dist/` folder to your web server
- Ensure the server supports SPA routing

## 🎯 Filosofi Desain

### **🎨 Visual Design Principles**

#### **Color Palette**
```css
Primary Navy: #1e3a8a (navy-800)
Secondary Gray: #f8fafc (gray-50)
Accent White: #ffffff
Text Dark: #1f2937 (gray-800)
Text Light: #6b7280 (gray-500)
```

#### **Typography Scale**
```css
Heading 1: 3rem (48px) - Poppins Bold
Heading 2: 2.25rem (36px) - Poppins SemiBold
Body Large: 1.125rem (18px) - Inter Regular
Body: 1rem (16px) - Inter Regular
Small: 0.875rem (14px) - Inter Regular
```

#### **Spacing System**
```css
Section Padding: 4rem (64px)
Component Gap: 1.5rem (24px)
Card Padding: 1.5rem (24px)
Button Padding: 0.75rem 1.5rem
```

### **🧠 UX Principles**

1. **Minimalism**: Fokus pada konten penting
2. **Accessibility**: Kontras warna yang baik, navigasi keyboard
3. **Performance**: Optimized images, lazy loading
4. **Responsiveness**: Mobile-first approach
5. **Consistency**: Design system yang konsisten

## ✨ Animasi & Interaksi

### **🎭 3D Animation Effects**

#### **Hero Section**
```typescript
// Title Animation
initial: { rotateX: -15, opacity: 0, y: 30 }
animate: { rotateX: 0, opacity: 1, y: 0 }
hover: { rotateY: 2, scale: 1.02 }

// Button Animation
hover: { 
  rotateY: ±5, 
  scale: 1.05,
  boxShadow: "0 10px 25px rgba(30, 58, 138, 0.3)"
}
```

#### **About Section**
```typescript
// Image Animation
initial: { rotateY: -20, scale: 0.8, opacity: 0 }
animate: { rotateY: 0, scale: 1, opacity: 1 }
hover: { rotateY: 2, scale: 1.02 }

// Card Animation
initial: { rotateX: -10, opacity: 0, y: 30 }
animate: { rotateX: 0, opacity: 1, y: 0 }
hover: { rotateY: 3, scale: 1.05, y: -5 }
```

#### **Contact Section**
```typescript
// Contact Card Animation
initial: { rotateX: -10, opacity: 0, y: 20 }
animate: { rotateX: 0, opacity: 1, y: 0 }
hover: { rotateY: 3, scale: 1.02, x: 10 }

// Submit Button Animation
hover: { 
  rotateY: 2, 
  scale: 1.02,
  boxShadow: "0 10px 25px rgba(30, 58, 138, 0.3)"
}
```

### **🎪 Transition Effects**
- **Duration**: 0.3s untuk hover, 0.8s untuk entrance
- **Easing**: ease-out untuk smooth feeling
- **Stagger**: 0.1s delay antar elemen
- **3D Transform**: `transformStyle: 'preserve-3d'`

## 📱 Responsive Design

### **Breakpoints**
```css
Mobile: < 640px (sm)
Tablet: 640px - 1024px (md, lg)
Desktop: > 1024px (xl, 2xl)
```

### **Mobile Optimizations**
- Hamburger menu untuk navigasi
- Stacked layout untuk form
- Touch-friendly button sizes
- Optimized image sizes
- Reduced animation complexity

### **Tablet Adaptations**
- 2-column layout untuk cards
- Adjusted spacing
- Medium font sizes

### **Desktop Enhancements**
- Full 3D animations
- Multi-column layouts
- Hover effects
- Larger typography

## 🔧 Customization

### **🎨 Mengubah Warna Tema**
Edit file `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'navy': {
        // Sesuaikan warna navy
        800: '#1e3a8a', // Primary
        700: '#1e40af', // Darker
        600: '#2563eb', // Lighter
      }
    }
  }
}
```

### **📝 Mengubah Konten**
1. **Hero Section** (`Hero.tsx`):
   ```typescript
   // Ganti nama dan deskripsi
   <h1>Nama Anda</h1>
   <p>Deskripsi Anda</p>
   ```

2. **About Section** (`About.tsx`):
   ```typescript
   // Update personal info
   const personalInfo = [
     {
       icon: BookOpen,
       title: "Hobi Anda",
       description: "Deskripsi hobi..."
     }
   ];
   ```

3. **Contact Section** (`Contact.tsx`):
   ```typescript
   // Update contact information
   const contactInfo = [
     {
       icon: Mail,
       title: "Email",
       value: "email@anda.com",
       link: "mailto:email@anda.com"
     }
   ];
   ```

### **🖼️ Mengganti Foto**
1. **Upload foto** ke folder `public/` atau hosting online
2. **Update URL** di komponen:
   ```typescript
   // Hero.tsx dan About.tsx
   src="path/to/your/photo.jpg"
   ```

### **🔗 Mengupdate Social Links**
Edit di `Contact.tsx`:
```typescript
const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://linkedin.com/in/username",
    color: "hover:text-blue-600"
  }
];
```

## 📊 Performance

### **Optimization Features**
- **Code Splitting**: Automatic dengan Vite
- **Tree Shaking**: Unused code removal
- **Image Optimization**: Responsive images
- **CSS Purging**: TailwindCSS removes unused styles
- **Bundle Analysis**: Built-in Vite analyzer

### **Performance Metrics**
```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist

# Lighthouse scores target:
# Performance: 90+
# Accessibility: 95+
# Best Practices: 95+
# SEO: 90+
```

### **Loading Optimization**
- Lazy loading untuk images
- Preload critical resources
- Minimal JavaScript bundle
- Optimized CSS delivery

## 🐛 Troubleshooting

### **Common Issues**

#### **1. Dependencies Installation Error**
```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
```

#### **2. TypeScript Errors**
```bash
# Check TypeScript version compatibility
npm install @types/react@latest @types/react-dom@latest
```

#### **3. TailwindCSS Not Working**
```bash
# Verify PostCSS configuration
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### **4. Build Errors**
```bash
# Check for TypeScript errors
npm run build
# Fix any type errors before building
```

#### **5. Animation Performance Issues**
```typescript
// Reduce animation complexity on mobile
const isMobile = window.innerWidth < 768;
const animationProps = isMobile 
  ? { scale: 1.05 } 
  : { scale: 1.05, rotateY: 5 };
```

### **Debug Mode**
```typescript
// Enable Framer Motion debug
<motion.div
  animate={{ x: 100 }}
  transition={{ duration: 2 }}
  style={{ background: "red" }} // Visual debug
>
```

## 📄 Lisensi

```
© 2025 Faizah Azzahra. All Rights Reserved.

Website portofolio pribadi ini dibuat dengan tujuan personal branding 
dan representasi diri yang profesional. Semua konten, desain, dan 
kode dalam proyek ini adalah milik pribadi Faizah Azzahra.

Dilarang mengcopy, memodifikasi, atau menggunakan ulang tanpa 
izin tertulis dari pemilik.
```

---

## 📞 Kontak & Support

**Dibuat dengan ❤️ oleh Faizah Azzahra**

Jika ada pertanyaan atau feedback mengenai website ini, 
silahkan hubungi melalui:

- 📧 Email: faizah.azzahra@example.com
- 💼 LinkedIn: [Faizah Azzahra](https://linkedin.com/in/faizah-azzahra)
- 📱 Instagram: [@faizah.azzahra](https://instagram.com/faizah.azzahra)

---

*Terima kasih telah mengunjungi portofolio pribadi saya!* 🙏
#   f a i z a h a z z a h r a 
 
 #   a r a p o r t o 
 
 