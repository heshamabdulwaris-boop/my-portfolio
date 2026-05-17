# Abdul Waris Hesham - Frontend Developer Portfolio

A world-class, modern, highly professional developer portfolio website built with **React + Tailwind CSS**.

## 🚀 Features

- ✨ **Modern & Premium Design** - Ultra-modern aesthetic with glassmorphism, gradients, and smooth animations
- 🌓 **Dark/Light Mode** - Toggle between themes with localStorage persistence
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎨 **Framer Motion Animations** - Smooth scroll reveals, hover effects, and transitions
- ⌨️ **Typing Animation** - Dynamic role display in hero section
- 📊 **Interactive Skills Section** - Categorized skills with animated progress bars
- 🎯 **Project Filtering** - Filter projects by category
- 📜 **Experience Timeline** - Beautiful vertical timeline with animations
- 💬 **Testimonials Carousel** - Auto-playing client testimonials slider
- 📧 **Contact Form** - Validated form with toast notifications
- 🖱️ **Custom Cursor** - Desktop-only animated cursor
- 📈 **Scroll Progress Bar** - Visual scroll indicator
- ⬆️ **Back to Top Button** - Smooth scroll to top
- ⚡ **Performance Optimized** - Lazy loading and efficient rendering
- ♿ **Accessibility Compliant** - ARIA labels and keyboard navigation
- 🔍 **SEO Friendly** - Meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool & Dev Server
- **Tailwind CSS** - Utility-first CSS Framework
- **Framer Motion** - Animation Library
- **React Icons** - Icon Library
- **React Hot Toast** - Notification System

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── assets/              # Images and static assets
│   ├── components/
│   │   ├── common/          # Reusable common components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Preloader.jsx
│   │   │   ├── ScrollProgress.jsx
│   │   │   ├── BackToTop.jsx
│   │   │   └── CustomCursor.jsx
│   │   ├── sections/        # Page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Services.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/              # Reusable UI components
│   │       ├── SectionHeading.jsx
│   │       ├── SkillCard.jsx
│   │       ├── ProjectCard.jsx
│   │       ├── TimelineItem.jsx
│   │       ├── TestimonialCard.jsx
│   │       ├── ServiceCard.jsx
│   │       └── Button.jsx
│   ├── data/                # Sample data and content
│   │   ├── personalInfo.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── experience.js
│   │   ├── testimonials.js
│   │   └── services.js
│   ├── hooks/               # Custom React hooks
│   │   ├── useScrollPosition.js
│   │   └── useFormValidation.js
│   ├── context/             # React Context
│   │   └── ThemeContext.jsx
│   ├── App.jsx              # Main App component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles & Tailwind
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd "c:\Users\Hesham\Desktop\my portfolio"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information

Update your details in `src/data/personalInfo.js`:
```javascript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your@email.com',
  // ... update other fields
};
```

### Skills

Modify your skills in `src/data/skills.js` with your technologies and proficiency levels.

### Projects

Add your real projects in `src/data/projects.js` with images, descriptions, and links.

### Experience

Update your work experience and education in `src/data/experience.js`.

### Colors & Theme

Customize colors in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your colors */ },
  secondary: { /* your colors */ },
  accent: { /* your colors */ },
}
```

## 🌐 Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 📱 Sections Included

1. **Navbar** - Sticky navigation with active section highlighting
2. **Hero** - Animated introduction with typing effect
3. **About** - Professional summary with stats
4. **Skills** - Categorized skills with progress bars
5. **Projects** - Filterable project showcase
6. **Experience** - Interactive timeline
7. **Testimonials** - Client testimonials carousel
8. **Services** - Service offerings
9. **Contact** - Contact form with validation
10. **Footer** - Quick links and social media

## 🎯 Key Features

- **Preloader** - Animated loading screen
- **Scroll Progress** - Visual scroll indicator
- **Smooth Scrolling** - Navigate between sections smoothly
- **Dark Mode** - Toggle between light and dark themes
- **Responsive Design** - Works on all screen sizes
- **Form Validation** - Client-side validation with error messages
- **Toast Notifications** - Success/error feedback
- **Hover Animations** - Interactive card effects
- **Gradient Text** - Eye-catching text effects
- **Glassmorphism** - Modern glass-effect cards

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Abdul Waris Hesham**
- Frontend Web Developer
- React Specialist
- UI/UX Enthusiast

## 🙏 Acknowledgments

- React Community
- Tailwind CSS Team
- Framer Motion
- Vite Team

---

Built with ❤️ by Abdul Waris Hesham
