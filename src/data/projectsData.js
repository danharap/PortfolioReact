export const projectsData = [
  {
    id: 1,
    title: "TaskManager - Enterprise Task Management System",
    description: "A professional-grade full-stack task management application built with Angular 18 and ASP.NET Core, showcasing enterprise development practices with robust authentication, role-based access control, and comprehensive task organization features.",    technologies: ["Angular 18", "TypeScript", "ASP.NET Core", "Entity Framework", "SQL Server", "JWT", "Angular Material", "RxJS"],    liveDemo: "https://task-manager-daniel-harapiaks-projects.vercel.app/", 
    github: "https://github.com/danharap/TaskManager", // Update with actual repo URL when available
    image: "/images/taskmanager/Thumbnail.png",
    featured: true,
    details: {
      overview: "TaskManager is a comprehensive enterprise-level task management solution that demonstrates modern full-stack development practices. Built with Angular 18 frontend and ASP.NET Core backend, it features secure authentication, hierarchical task organization, calendar integration, and administrative controls suitable for professional environments.",      keyFeatures: [
        "Secure JWT authentication with SHA-256 password hashing and automatic token refresh",
        "Role-based authorization system with User and Admin permission levels",
        "Advanced calendar integration with angular-calendar for visual task scheduling",
        "Hierarchical task management with unlimited subtask nesting capabilities",
        "Modern UI with Light/Dark theme support using Angular Material Design",
        "Real-time notification system with toast messages and status updates",
        "High-performance RESTful API built with Entity Framework Core and SQL Server",
        "Fully responsive design optimized for desktop, tablet, and mobile devices",
        "Comprehensive input validation and error handling on both client and server sides",
        "Performance optimization through lazy loading and efficient data pagination"
      ],technicalHighlights: [
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
      ],      screenshots: [
        {
          title: "Secure Login System",
          image: "/images/taskmanager/Login.png",
          description: "Professional login interface with JWT authentication, input validation, and secure password handling"
        },
        {
          title: "Main Dashboard Overview",
          image: "/images/taskmanager/Dashboard.png",
          description: "Comprehensive task dashboard with priority indicators, completion tracking, and quick action buttons"
        },
        {
          title: "Subtask Management",
          image: "/images/taskmanager/Subtasks.png",
          description: "Detailed subtask breakdown with hierarchical organization and progress tracking"
        },
        {
          title: "Account Settings",
          image: "/images/taskmanager/Settings.png",
          description: "Secure account management with username updates and password change functionality"
        },
        {
          title: "Integrated Calendar View",
          image: "/images/taskmanager/Calendar.png",
          description: "Visual task scheduling with monthly, weekly, and daily calendar views using angular-calendar"
        },
        {
          title: "Analytics Dashboard",
          image: "/images/taskmanager/Analytics.png",
          description: "Comprehensive analytics and reporting dashboard with task completion metrics"
        },
        {
          title: "Real-time Notifications",
          image: "/images/taskmanager/Notification.png",
          description: "Comprehensive notification system with real-time updates and user feedback"
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
        },
        {
          title: "Advanced Task Management",
          image: "/images/taskmanager/TaskManagement.png",
          description: "Hierarchical task organization with unlimited subtask nesting, priority levels, and status tracking"
        },
        {
          title: "User Management Panel",
          image: "/images/taskmanager/UserManagement.png",
          description: "Advanced user administration with role management and account controls"
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
      },      challenges: [
        "Implementing secure JWT authentication with automatic token refresh",
        "Designing a scalable hierarchical task structure with unlimited nesting",
        "Creating a responsive UI that works seamlessly across all device sizes",
        "Integrating complex calendar functionality with task management workflows",
        "Building real-time notifications without WebSocket complexity"
      ],      outcomes: [
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
    title: "BudgetApp — Personal Finance Tracker",
    description: "A mobile-first personal finance PWA built with Expo and React Native, backed by Supabase. Features real-time transaction tracking, per-category budget limits, recurring bill management, and a premium dark UI — deployed to Vercel and installable on iOS.",
    technologies: ["Expo", "React Native", "TypeScript", "Supabase", "Postgres", "Zustand", "Expo Router", "Vercel"],
    liveDemo: "https://budget-app-inky-one.vercel.app/auth/sign-in",
    github: "https://github.com/danharap/BudgetApp",
    image: "💰",
    featured: true,
    details: {
      overview: "BudgetApp is a mobile-first personal finance application built from scratch with Expo and React Native. It allows users to track their spending, set monthly budgets per category, monitor upcoming bills, and manage multiple bank and investment accounts — all backed by a live Supabase database with per-user data isolation. The app is deployed as a Progressive Web App (PWA) via Vercel, meaning it installs directly to your iPhone home screen and feels indistinguishable from a native app.",
      keyFeatures: [
        "Email/password authentication with Supabase Auth, persistent sessions, and fully protected routing",
        "Multi-step onboarding flow: add accounts, set a monthly budget, and configure per-category spending limits",
        "Floating bottom-sheet transaction modal with Expense / Income / Transfer toggle, numeric keypad, and category chip grid",
        "Real-time account balance updates — every saved transaction instantly reflects on the linked account",
        "Monthly budget tracking with per-category spending limits, circular progress chart, and weekly/daily averages",
        "Full CRUD bill management with daily, weekly, and monthly recurrence and a day-of-month picker",
        "Multiple accounts with live balance display — positive balances shown in green with sign",
        "Premium dark UI with floating rounded tab bar, ambient glow backgrounds, layered card depth, and large money typography"
      ],
      technicalHighlights: [
        "Expo Router for file-based navigation — consistent with Next.js conventions across web and native",
        "Zustand state management with a clean service layer separating all Supabase calls from UI components",
        "Row Level Security (RLS) policies in Postgres ensure complete per-user data isolation",
        "expo-secure-store for session persistence on native with a localStorage fallback on web",
        "Full TypeScript coverage across every screen, service, and Zustand store",
        "CI/CD via Vercel — every push to main on GitHub triggers an automatic production deployment",
        "PWA manifest and meta tags configured so the app installs to iOS and Android home screens",
        "Feature-based folder architecture with dedicated service files for accounts, transactions, budgets, bills, and onboarding"
      ],
      architecture: {
        frontend: [
          "Expo (React Native) with Expo Router for file-based navigation",
          "Zustand for global state management with a clean service layer",
          "Full TypeScript across all screens and components",
          "expo-secure-store / localStorage for cross-platform session storage"
        ],
        backend: [
          "Supabase — Postgres database, Auth, and Row Level Security",
          "RLS policies for complete per-user data isolation",
          "Dedicated service files for each domain (accounts, transactions, budgets, bills)"
        ],
        deployment: [
          "Vercel with CI/CD — auto-deploys on every push to main",
          "PWA manifest for iOS and Android home screen installation",
          "Environment variables injected at build time — no secrets in source code"
        ]
      },
      challenges: [
        "Designing a seamless cross-platform experience that feels native on iOS while also running as a PWA in the browser",
        "Implementing real-time balance updates so every transaction atomically updates the linked account in Supabase",
        "Building a flexible recurrence system supporting daily, weekly, and monthly bill cycles with a day-of-month picker",
        "Architecting a clean service layer that fully decouples Supabase calls from Zustand stores and UI components",
        "Configuring expo-secure-store with a graceful localStorage fallback to handle both native and web session storage"
      ],
      outcomes: [
        "Delivered a full-stack finance app that installs natively on iOS and runs seamlessly in the browser as a PWA",
        "Achieved complete per-user data isolation through Supabase RLS with zero client-side filtering logic",
        "Built a premium dark UI with depth, ambient glows, and fluid animations that rivals native finance apps",
        "Established a production CI/CD pipeline — every GitHub push auto-deploys to Vercel with zero manual steps",
        "Demonstrated full-stack depth across mobile, real-time databases, auth, and cloud deployment in a single project"
      ]
    }
  },
  {
    id: 4,
    title: "PhotoCleaner — Cross-Platform Photo Cleanup App",
    description: "A swipe-based macOS and iOS app that lets you rapidly review your Apple Photos library and batch-delete unwanted photos with queued deletion, undo support, and a shared cross-platform SwiftUI core.",
    technologies: ["Swift", "SwiftUI", "PhotoKit", "Xcode", "iOS", "macOS"],
    liveDemo: null,
    github: "https://github.com/danharap/PhotoCleaner",
    image: "📸",
    featured: true,
    details: {
      overview: "PhotoCleaner is a cross-platform macOS and iOS SwiftUI app that solves a real friction point: cleaning up a bloated photo library is tedious in the native Photos app. PhotoCleaner replaces that with a fast swipe-review card workflow backed by PhotoKit — the same framework Apple Photos uses — so every action operates on your real library. I built it initially for one platform, then refactored it into a shared architecture (PhotoCleanerShared) so core models, service logic, the view model, and reusable views all run on both targets without duplication, while platform-specific UI wrappers handle the AppKit/UIKit differences cleanly.",
      keyFeatures: [
        "Swipe-right to keep, swipe-left to delete — fast card-based review of your full Apple Photos library via PhotoKit",
        "Queued batch deletion with confirmation step so accidental taps never immediately destroy photos",
        "Undo support for review actions — step back through your session without consequence",
        "Delete behavior options: instant deletion or confirmation-gated for different user comfort levels",
        "Filters and sorting controls so you can target specific date ranges, albums, or asset types",
        "Jump browser / grid view for rapid navigation across the full asset set without going card-by-card",
        "Keep / Delete on-screen buttons alongside gestures for accessibility and non-gesture users",
        "Metadata overlays: date, favorite status, and screenshot context surfaced on each card",
        "Full permission state handling: not-determined, authorized, limited, and denied — no dead ends",
        "App icon and branding shipped for both macOS and iOS targets"
      ],
      technicalHighlights: [
        "Extracted PhotoCleanerShared module containing all models, PhotosService, ReviewViewModel, and reusable SwiftUI views — zero logic duplication across targets",
        "PlatformImage type alias resolves to UIImage on iOS and NSImage on macOS, letting shared views compile cleanly on both platforms",
        "PhotoKit integration centralized in PhotosService handles asset fetching, change observers, and batch commit/rollback",
        "ReviewViewModel drives all state as a SwiftUI ObservableObject with async/await flows for non-blocking image loading",
        "iOS Info.plist photo library usage description keys generated and injected correctly for App Store privacy requirements",
        "Xcode multi-target project configured so shared sources compile into both macOS and iOS targets from a single source tree",
        "Resolved code-signing and entitlement conflicts to achieve clean builds for both the macOS app and iOS Simulator",
        "Production-quality app icon sets generated and wired for both platforms via Xcode asset catalogs"
      ],
      architecture: {
        shared: [
          "PhotoCleanerShared module with models, services, view model, and reusable views",
          "PlatformImage alias (UIImage / NSImage) for cross-platform image handling",
          "ReviewViewModel as ObservableObject driving async review state"
        ],
        services: [
          "PhotosService wraps all PhotoKit calls: fetch, authorization, batch delete, undo",
          "Queued deletion model — changes staged locally and committed as a single atomic batch",
          "Permission state machine: not-determined → request → authorized / limited / denied"
        ],
        platforms: [
          "Platform-specific UI wrappers for gesture handling (UIKit drag vs AppKit mouse)",
          "Conditional rendering paths for macOS window chrome vs iOS navigation patterns",
          "iOS Info.plist privacy keys; macOS sandbox entitlements for Photos access"
        ]
      },
      challenges: [
        "Bridging AppKit and UIKit gesture APIs — swipe recognition behaves differently on macOS (mouse drag) vs iOS (touch), requiring platform-specific wrapper views around a shared card component",
        "Shared SwiftUI views that reference image types needed a PlatformImage alias to compile on both SDKs without #if os() blocks scattered through business logic",
        "PhotoKit's PHPhotoLibrary authorization model differs subtly between iOS (limited mode) and macOS, requiring careful state branching to avoid silent failures",
        "Balancing preload / cache aggressiveness vs memory pressure: loading full-resolution assets for every card in a 10,000-photo library would spike RAM, so assets are fetched at display size and upgraded on demand",
        "Code signing with a personal team account works for direct device install but blocks TestFlight distribution — a known constraint documented for the next milestone"
      ],
      outcomes: [
        "Successfully converted a single-platform prototype into a fully shared cross-platform architecture — both targets build and run from one codebase",
        "Reduced code duplication to near-zero for business logic: one ViewModel, one service, one set of models drives both macOS and iOS",
        "Runs on physical iPhone via Xcode direct install and macOS natively — verified end-to-end on real hardware",
        "Queued deletion model eliminates the most common user fear (accidental permanent delete) without sacrificing speed",
        "Established a clean foundation ready for TestFlight distribution once a paid Apple Developer account is in place"
      ]
    }
  },
];
