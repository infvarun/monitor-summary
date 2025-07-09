# Replit.md

## Overview

This is a full-stack web application built with a React frontend and Express backend. The project appears to be a report generation dashboard that allows users to create filtered reports with AI-powered summaries. The application uses modern web technologies including React, TypeScript, Tailwind CSS, and Drizzle ORM for database operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- **2024-01-09**: Added cross-platform startup scripts to resolve Windows NODE_ENV issues
  - Created start-dev.bat for Windows users
  - Created start-dev.sh for Linux/Mac users  
  - Created start-dev.js as Node.js alternative
  - Added comprehensive README.md with troubleshooting guide

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for fast development and building

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session store
- **Development**: Hot reloading with Vite middleware integration

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Page components
│   │   ├── lib/         # Utility functions
│   │   └── hooks/       # Custom React hooks
├── server/           # Express backend
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database abstraction layer
│   └── vite.ts       # Vite development integration
├── shared/           # Shared types and schemas
└── migrations/       # Database migrations
```

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` with Zod validation
- **Current Tables**: Users table with basic authentication fields
- **Storage Interface**: Abstraction layer in `server/storage.ts` with both memory and database implementations

### Frontend Components
- **Dashboard**: Main application page with report generation interface
- **Report Filters**: Component for setting report parameters (date ranges, report names)
- **Report Table**: Displays generated report data in tabular format
- **Summary Panel**: AI-powered insights and recommendations
- **Loading Genie**: Animated loading component for report generation
- **UI Components**: Comprehensive set of shadcn/ui components

### API Integration
- **Query Client**: TanStack Query for efficient data fetching and caching
- **Error Handling**: Centralized error handling with toast notifications
- **Authentication**: Cookie-based session management

## Data Flow

1. **User Input**: Users configure report parameters through the filters component
2. **Report Generation**: Frontend sends request to backend API (currently mocked)
3. **Data Processing**: Backend processes request and generates report data
4. **AI Analysis**: System generates insights and recommendations (currently mocked)
5. **Display**: Results are displayed in table format with AI summary panel

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query for server state
- **Utilities**: date-fns, clsx, lucide-react icons

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution, Vite for development server

### Development Tools
- **Build**: Vite for frontend, esbuild for backend
- **TypeScript**: Full TypeScript support across the stack
- **Linting**: ESLint configuration
- **Database**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` script

### Development Workflow
1. Run `npm run dev` to start development server
2. Backend serves on Express with Vite middleware for frontend
3. Hot reloading enabled for both frontend and backend changes
4. Database changes applied through Drizzle migrations

### Production Deployment
- **Start Command**: `npm start` runs the built Express server
- **Static Files**: Frontend assets served from `dist/public`
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Session Storage**: PostgreSQL-based session persistence

### Environment Requirements
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment setting (development/production)
- **Session Configuration**: Automatic cookie-based session management

The application is structured for easy deployment to platforms like Replit, Vercel, or similar hosting services with PostgreSQL database support.