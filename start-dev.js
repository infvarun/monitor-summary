#!/usr/bin/env node

// Cross-platform development startup script
// This solves the NODE_ENV issue on Windows systems

process.env.NODE_ENV = 'development';

// Import and run the server
import('./server/index.ts');