# Daniel Harapiak - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my skills, projects, and experience as a Software Engineer and Computer Science major.

## 🌟 Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode** - Toggle between themes with smooth transitions
- **Smooth Scrolling Navigation** - Seamless navigation with active section highlighting
- **Mobile-Friendly** - Hamburger menu and touch-optimized interface
- **Contact Form** - Functional contact form ready for backend integration
- **Modern UI/UX** - Clean, professional design with interactive elements
- **Component-Based Architecture** - Modular React components for easy maintenance

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.com) *(Coming Soon)*

## 📱 Screenshots

### Desktop View
![Desktop Screenshot](screenshots/desktop.png) *(Screenshots coming soon)*

### Mobile View
![Mobile Screenshot](screenshots/mobile.png) *(Screenshots coming soon)*

## 🛠️ Built With

- **Frontend Framework:** React 18.2.0
- **Styling:** Tailwind CSS 3.3.0
- **Icons:** Lucide React
- **Build Tool:** Create React App
- **Version Control:** Git
- **Deployment:** *(To be configured)*

## 📋 Sections

1. **Hero Section** - Introduction and call-to-action
2. **About Me** - Personal background, education, and interests
3. **Technical Skills** - Organized by categories (Frontend, Backend, Databases, Tools)
4. **Featured Projects** - Showcase of development projects
5. **Contact** - Contact form and social media links

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/danharap/PortfolioReact.git
   cd PortfolioReact
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Removes Create React App abstraction (one-way operation)

## 📂 Project Structure

```
Portfolio.App/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js       # Navigation bar with mobile menu
│   │   ├── HeroSection.js      # Landing/intro section
│   │   ├── AboutSection.js     # About me information
│   │   ├── SkillsSection.js    # Technical skills display
│   │   ├── ProjectsSection.js  # Featured projects showcase
│   │   ├── ContactSection.js   # Contact form and info
│   │   └── Footer.js          # Footer component
│   ├── data/
│   │   ├── skillsData.js      # Skills information
│   │   └── projectsData.js    # Projects information
│   ├── App.js                 # Main application component
│   ├── index.js              # React DOM render
│   └── index.css             # Global styles (Tailwind)
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Personal Information
Update your personal details in the following files:
- `src/components/HeroSection.js` - Name, title, location, description
- `src/components/AboutSection.js` - Background, education, interests
- `src/components/ContactSection.js` - Email and contact information

### Skills
Modify your technical skills in:
- `src/data/skillsData.js` - Add/remove skills organized by category

### Projects
Update your projects portfolio in:
- `src/data/projectsData.js` - Add your actual projects with descriptions, tech stack, and links

### Styling
- Colors and themes can be customized in `tailwind.config.js`
- Component-specific styling is handled through Tailwind classes

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds on push

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy scripts to package.json
3. Run: `npm run deploy`

## 📬 Contact Integration

The contact form is ready for backend integration. Popular options include:

- **Web3Forms** - Simple form handling service
- **Formspree** - Form backend for static sites
- **Netlify Forms** - Built-in form handling (if using Netlify)
- **Custom Backend** - Express.js, Flask, or other backend services

## 🔄 Git Workflow

This project uses a three-branch workflow:

- **main** - Production-ready code
- **dev** - Development and feature integration
- **qa** - Quality assurance and testing

### Contributing
1. Create feature branches from `dev`
2. Submit pull requests to `dev`
3. Merge to `qa` for testing
4. Merge to `main` for production

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect With Me

- **Email:** daniel.harapiak@email.com
- **LinkedIn:** [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub:** [danharap](https://github.com/danharap)
- **Location:** Burlington, Ontario, Canada

## 🔮 Future Enhancements

- [ ] Add blog section
- [ ] Implement project filtering
- [ ] Add animations and micro-interactions
- [ ] Include testimonials section
- [ ] Add resume download functionality
- [ ] Implement contact form backend
- [ ] Add dark mode persistence
- [ ] Include analytics tracking

---

⭐ If you found this portfolio helpful, please consider giving it a star!

Built with ❤️ by Daniel Harapiak
