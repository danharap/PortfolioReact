export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React frontend and FastAPI backend, featuring user authentication, payment processing, and inventory management.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Docker"],
    liveDemo: "#",
    github: "#",
    image: "🛒"
  },  {
    id: 2,
    title: "TaskManager - Enterprise Task Management System",
    description: "A professional-grade full-stack task management application built with Angular 18 and ASP.NET Core, showcasing enterprise development practices with robust authentication, role-based access control, and comprehensive task organization features.",
    technologies: ["Angular 18", "TypeScript", "ASP.NET Core", "Entity Framework", "SQL Server", "JWT", "Angular Material", "RxJS"],
    liveDemo: "#", // Add your live demo URL when deployed    github: "https://github.com/danharap/TaskManager", // Update with actual repo URL when available
    image: "/images/taskmanager/Thumbnail.png",
    featured: true,
    details: {
      overview: "TaskManager is a comprehensive enterprise-level task management solution that demonstrates modern full-stack development practices. Built with Angular 18 frontend and ASP.NET Core backend, it features secure authentication, hierarchical task organization, calendar integration, and administrative controls suitable for professional environments.",
      keyFeatures: [
        "🔐 Secure JWT Authentication with SHA-256 password hashing and token refresh",
        "👥 Role-based authorization system (User/Admin) with granular permissions",
        "📅 Advanced calendar integration with angular-calendar for visual task scheduling",
        "📋 Hierarchical task management with unlimited subtask nesting",
        "🎨 Modern UI with Light/Dark theme support using Angular Material",
        "🔔 Real-time notification system with toast messages and status updates",
        "⚡ High-performance RESTful API with Entity Framework Core and SQL Server",
        "📱 Fully responsive design optimized for desktop, tablet, and mobile devices",
        "🛡️ Comprehensive input validation and error handling on both client and server",
        "🚀 Optimized performance with lazy loading and efficient data pagination"
      ],
      technicalHighlights: [
        "Modern Angular 18 architecture with standalone components and TypeScript",
        "HTTP interceptors for automatic JWT token management and request/response handling",
        "Reactive programming patterns using RxJS observables and operators",
        "Entity Framework Core with Code-First migrations and LocalDB integration",
        "Comprehensive CORS configuration for secure cross-origin resource sharing",
        "Service-oriented architecture with dependency injection throughout the application",
        "Angular Material Design System for consistent and professional UI components",
        "State management using Angular services and reactive patterns",
        "Custom validators and form controls for enhanced user experience",
        "Modular component structure with reusable UI elements and shared services"
      ],      screenshots: [{
          title: "Main Dashboard Overview",
          image: "/images/taskmanager/Dashboard.png",
          description: "Comprehensive task dashboard with priority indicators, completion tracking, and quick action buttons"
        },        {
          title: "Advanced Task Management",
          image: "/images/taskmanager/TaskManagement.png",
          description: "Hierarchical task organization with unlimited subtask nesting, priority levels, and status tracking"
        },
        {
          title: "Subtask Management",
          image: "/images/taskmanager/Subtasks.png",
          description: "Detailed subtask breakdown with hierarchical organization and progress tracking"
        },
        {
          title: "Integrated Calendar View",
          image: "/images/taskmanager/Calendar.png",
          description: "Visual task scheduling with monthly, weekly, and daily calendar views using angular-calendar"
        },
        {
          title: "User Management Panel",
          image: "/images/taskmanager/UserManagement.png",
          description: "Advanced user administration with role management and account controls"
        },
        {
          title: "Account Settings",
          image: "/images/taskmanager/Settings.png",
          description: "Secure account management with username updates and password change functionality"
        },        {
          title: "Analytics Dashboard",
          image: "/images/taskmanager/Analytics.png",
          description: "Comprehensive analytics and reporting dashboard with task completion metrics"
        },
        {
          title: "Help & Documentation",
          image: "/images/taskmanager/HelpPage.png",
          description: "Built-in help system with comprehensive documentation and user guides"
        },
        {
          title: "Technical Documentation",
          image: "/images/taskmanager/DevDocs.png",
          description: "Developer documentation and technical specifications for the application"
        },        {
          title: "Real-time Notifications",
          image: "/images/taskmanager/Notification.png",
          description: "Comprehensive notification system with real-time updates and user feedback"
        }
      ],
      architecture: {
        frontend: [
          "Angular 18 with TypeScript for type-safe development",
          "Angular Material for consistent UI components",
          "RxJS for reactive programming and state management",
          "Angular Router for navigation and route guards",
          "HTTP Client with interceptors for API communication"
        ],
        backend: [
          "ASP.NET Core Web API with RESTful endpoints",
          "Entity Framework Core for database operations",
          "JWT Bearer token authentication and authorization",
          "SQL Server with LocalDB for development",
          "CORS middleware for secure cross-origin requests"
        ],
        security: [
          "SHA-256 password hashing with salt",
          "JWT token-based authentication with refresh tokens",
          "Role-based authorization with claims",
          "Input validation and sanitization",
          "HTTPS enforcement and secure headers"
        ]
      },
      challenges: [
        "Implementing secure JWT authentication with automatic token refresh",
        "Designing a scalable hierarchical task structure with unlimited nesting",
        "Creating a responsive UI that works seamlessly across all device sizes",
        "Integrating complex calendar functionality with task management workflows",
        "Implementing real-time notifications without WebSocket complexity"
      ],
      outcomes: [
        "Achieved 100% type safety with TypeScript throughout the application",
        "Implemented enterprise-grade security with JWT and role-based access",
        "Created a scalable architecture suitable for production deployment",
        "Delivered a professional user experience with Angular Material Design",
        "Demonstrated full-stack development expertise with modern technologies"
      ]
    }
  },
  {
    id: 3,
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for data visualization and analytics using Python backend with React frontend, featuring real-time charts and reporting.",
    technologies: ["React", "Python", "PostgreSQL", "Docker"],
    liveDemo: "#",
    github: "#",
    image: "📊"
  }
];
