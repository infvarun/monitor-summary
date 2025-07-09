# Report Analytics Dashboard

A modern React reporting dashboard with date filtering, report selection, and AI-powered summaries.

## Features

✅ **Date Filtering**: Filter reports using operators (=, >, <, between)
✅ **Report Selection**: Choose from 5 different report types
✅ **Animated Loading**: AI genie character with sparkle animations
✅ **Data Visualization**: Properly formatted tables with status badges
✅ **AI Summary**: LLM-generated insights and recommendations
✅ **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd report-dashboard

# Install dependencies
npm install
```

### Running the Application

#### Option 1: Using npm scripts (Linux/Mac)
```bash
npm run dev
```

#### Option 2: Cross-platform startup scripts

**On Windows:**
```bash
# Option A: Using batch file
start-dev.bat

# Option B: Using Node.js script
node start-dev.js
```

**On Linux/Mac:**
```bash
# Option A: Using shell script
chmod +x start-dev.sh
./start-dev.sh

# Option B: Using Node.js script
node start-dev.js
```

The application will be available at `http://localhost:5000`

## Project Structure

```
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Page components
│   │   ├── lib/         # Utility functions
│   │   └── hooks/       # Custom React hooks
├── server/              # Express backend
├── shared/              # Shared types and schemas
├── start-dev.*          # Cross-platform startup scripts
└── package.json         # Project configuration
```

## API Integration

The dashboard is ready for backend integration:

### Report Generation Endpoint
```javascript
// POST /api/reports
{
  "dateOperator": "between",
  "startDate": "2024-01-01",
  "endDate": "2024-12-31", 
  "reportName": "sales_summary"
}
```

### AI Summary Endpoint
```javascript
// POST /api/ai-summary
{
  "reportData": "...",  // Table data in markdown format
  "reportType": "sales_summary"
}
```

## Available Report Types

- **Sales Summary**: Revenue and sales performance metrics
- **User Analytics**: User behavior and engagement data
- **Financial Report**: Financial performance indicators
- **Performance Metrics**: System and application performance
- **Inventory Status**: Stock levels and inventory tracking

## Development

### Building for Production
```bash
npm run build
npm start
```

### Database Setup
```bash
npm run db:push
```

## Troubleshooting

### Windows NODE_ENV Issues

If you encounter "NODE_ENV is not recognized" error on Windows:

1. **Use the cross-platform scripts** (recommended):
   ```bash
   # Use start-dev.bat or node start-dev.js
   start-dev.bat
   ```

2. **Install cross-env globally**:
   ```bash
   npm install -g cross-env
   ```

3. **Set environment variable manually**:
   ```bash
   set NODE_ENV=development
   npx tsx server/index.ts
   ```

### Common Issues

- **Port already in use**: Change port in `server/index.ts`
- **Module not found**: Run `npm install` to install dependencies
- **Build errors**: Run `npm run check` for TypeScript errors

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Build Tools**: Vite, esbuild
- **State Management**: TanStack Query

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details