# 📊 DataViz Angular

## 🚀 Overview
This is a comprehensive **data visualization platform** built with Angular and SQL database technologies. The application provides interactive charts, dashboards and analytics tools for visualizing complex datasets with AI prompt and SQL sorcerer(anthropic).
<img src="/public/screenshot.png" alt="Angular DataViz" />

## 🛠 Tech Stack
- **Frontend:** Angular 20.x, TypeScript, RxJS
- **Backend:** Node.js, Express.js, TypeORM
- **Database:** Supabase(PostgreSQL) with migrations support
- **Charts:** Chart.js

## 🔥 Key Features

### Core Visualization Features
✅ Interactive charts and graphs (Line, Bar, Pie, Scatter plots)  
✅ Real-time data updates and live streaming  
✅ Customizable dashboards with drag-and-drop widgets  
✅ Multi-dataset support and data filtering

### Data Management & Analytics
📊 Advanced data processing and aggregation  
🔍 Search and filter capabilities across datasets  
📈 Statistical analysis and trend visualization  
💾 Export data in multiple formats

### User Experience & Interface
🎨 Responsive design for mobile and desktop
⚡ Performance-optimized rendering for large datasets  
🔧 Customizable chart configurations and styling

### Advanced Features
📡 RESTful API integration with the backend server  
🔄 Automatic data synchronization and caching  
📅 AI prompt and SQL sorcerer(anthropic) and AI generative charts.
🎯 Interactive tooltips and data point details

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn package manager
- Supabase

### 1. Clone the Repositories
```bash
# Clone the frontend repository
git clone https://github.com/archerzou/dataviz-angular.git
cd dataviz-angular

# Clone the backend repository (in a separate directory)
git clone https://github.com/archerzou/dataviz-server.git
```

### 2. Frontend Setup
```bash
cd dataviz-angular

# Install dependencies
npm install

# Start the development server
ng serve

# The application will be available at http://localhost:4200
```

### 3. Backend Setup
```bash
cd dataviz-server

# Install dependencies
npm install

# Run database migrations
npm run migration:run

# Start the server
npm start or host on render web server
```

### 4. Database Configuration
```bash
# Generate new migration (if needed)
npm run migration:generate src/database/migrations/{schema-name}

# Run migrations
npm run migration:run
```

## 🏗 Project Structure

```
dataviz-angular/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   ├── services/           # Data services and API calls
│   │   ├── models/             # TypeScript interfaces and models
│   │   ├── pages/              # Main application pages/views
│   │   └── shared/             # Shared utilities and helpers
│   ├── assets/                 # Static assets (images, icons)
│   ├── environments/           # Environment configurations
│   └── styles/                 # Global styles and themes
├── angular.json                # Angular CLI configuration
├── package.json               # Dependencies and scripts
└── tsconfig.json              # TypeScript configuration
```

## 🚀 Development Commands

```bash
# Start development server
ng serve

# Build for production
ng build

# Run unit tests
ng test

# Run end-to-end tests
ng e2e

# Generate new component
ng generate component component-name

# Generate new service
ng generate service service-name

# Lint the code
ng lint
```

## 🔌 API Integration

The frontend connects to the dataviz-server backend which provides:
- RESTful endpoints for data retrieval
- Real-time WebSocket connections for live updates
- Database management through TypeORM migrations
- Data processing and aggregation services

## 🚀 Deployment

### Production Build
```bash
ng build --prod
```

### Environment Configuration
Configure environment variables in `src/environments/`:
- `environment.ts` - Development environment
- `environment.prod.ts` - Production environment

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Related Repositories

- **Backend Server:** [dataviz-server](https://github.com/archerzou/dataviz-server)
- **API Documentation:** Available after starting the server

