# GIBCE Educational Website

## Overview

This is a modern, responsive educational website for the Government Institute of Business & Commercial Education (GIBCE) located in Khairpur Mir's, Sindh, Pakistan. The website showcases the institution's programs, faculty, and facilities while providing prospective students with essential information about admissions, courses, and contact details. Built as a single-page application with smooth navigation and professional design elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Routing**: Wouter for lightweight client-side routing with a single-page application structure
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **UI Framework**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design system including institutional colors (navy blue and gold)
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Database ORM**: Drizzle ORM with PostgreSQL support for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-backed session storage using connect-pg-simple

### Component Structure
- **Layout System**: Section-based single-page design with sticky navigation
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Interactive Elements**: Smooth scrolling, intersection observers for active section tracking, and hover animations
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Asset Management**: Static asset serving with Vite's asset pipeline

### Design System
- **Typography**: Google Fonts (Poppins for headings, Open Sans for body text)
- **Color Palette**: Navy blue primary (#1E3A8A), gold accent (#D4AF37), neutral grays
- **Components**: Card-based layouts, consistent spacing using Tailwind's 4px grid system
- **Animations**: Subtle fade-in effects and smooth transitions (300ms duration)

## External Dependencies

### Database & Storage
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **Drizzle ORM**: Type-safe database queries and schema management
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI & Styling
- **Radix UI**: Headless component primitives for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Consistent icon library for UI elements
- **Google Fonts**: Web font loading (Poppins, Open Sans)

### Development & Build Tools
- **Vite**: Frontend build tool with HMR and asset optimization
- **TypeScript**: Static typing across frontend and backend
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing pipeline with Tailwind integration

### Form & Data Management
- **React Hook Form**: Performant form handling with minimal re-renders
- **Zod**: Runtime type validation for form data and API responses
- **TanStack Query**: Server state management, caching, and data synchronization

### Email Integration
- **SendGrid**: Email service integration for contact forms and notifications (configured but not actively used in current implementation)

### Asset Management
- **Generated Images**: AI-generated placeholder images for campus, faculty, and facilities stored in attached_assets directory
- **Static Assets**: Vite-managed asset pipeline for optimized image delivery