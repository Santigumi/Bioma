# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Bioma 🌱

**Bioma** is a gamified educational platform that teaches Colombian biodiversity to teenagers through interactive missions, rewards, and challenges. Our goal is to create environmental awareness and action in young people aged 12 to 18 years old.

## 🎯 Project Overview

This platform combines education with entertainment, making learning about Colombia's rich biodiversity engaging and memorable through game mechanics, interactive content, and progressive challenges.

## 🚀 Core Features

### 🎯 Gamified Learning
Missions and rewards for learning - Interactive missions and challenges about Colombian biodiversity with points, badges, and achievements to motivate learning.

### 🌿 Interactive Ecosystems  
Learn while exploring Colombian biodiversity - Discover and interact with real species data through engaging card-based interfaces and ecosystem exploration.

### 🏆 Achievements
Badges, levels, and sticker collection - Complete missions to unlock rewards, collect digital stickers, and advance through different learning levels.

## 🔧 Technical Features

- **User Authentication**: Complete login and registration with Firebase Auth
- **Interactive Games**: Built with Konva.js for engaging educational mini-games
- **Real-time Database**: Firestore integration for user progress and content
- **Global State Management**: Redux implementation for efficient state handling
- **Responsive Design**: Mobile-first approach with Material-UI components
- **Protected Routes**: Secure navigation with authentication-based routing
- **Performance Optimized**: Efficient rendering and minimal loading times

## 🛠️ Tech Stack

- **Frontend**: React 18+
- **Development**: Vite
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **State Management**: Redux Toolkit
- **UI Library**: Material-UI (MUI)
- **Graphics**: Konva.js
- **Routing**: React Router DOM
- **Deployment**: Vercel

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- npm package manager
- Firebase project set up with Authentication and Firestore enabled

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Santigumi/Bioma.git
   cd Bioma
   ```

2. **Switch to development branch**
   ```bash
   git checkout develop
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Install additional required packages**
   ```bash
   # Core dependencies
   npm install @reduxjs/toolkit react-redux
   npm install react-router-dom
   npm install @mui/material @emotion/react @emotion/styled
   npm install @mui/icons-material
   npm install konva react-konva
   
   # Firebase
   npm install firebase
   
   # HTTP client for API calls
   npm install axios
   ```

5. **Set up environment variables**
   Create a `.env` file in the root directory and add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

The application will open at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── assets/             # Static assets (images, icons)
├── components-Games/   # Game-specific components
├── components-screens/ # Screen-specific components
├── Data/              # Static data and configurations
│   ├── DataBiomas.js  # Biome information data
│   └── Datafacts.js   # Educational facts data
├── ProtectedRoute/    # Route protection components
├── redux/             # Redux store and state management
│   ├── auth/          # Authentication slice
│   │   ├── AuthSlice.js
│   │   ├── faunaSlice.js
│   │   └── thunkSlice.js
│   └── store.js       # Store configuration
├── Router/            # Application routing
├── screens/           # Main application screens/pages
├── services/          # External services
│   ├── fetchData.js   # Data fetching utilities and API calls
│   ├── firebaseConfig.js  # Firebase configuration
│   └── firebaseUtils.js   # Firebase utility functions
├── Themes/            # MUI theme configurations
├── utils/             # Utility functions
├── App.css           # Global styles
├── App.jsx           # Main App component
└── index.css         # Base styles
```

## 🔐 Authentication Flow

The application implements a complete authentication system:

1. **Registration**: New users can create accounts with email/password
2. **Login**: Existing users authenticate via Firebase Auth
3. **Protected Routes**: Authenticated routes using Redux state

## 🌿 Colombian Biodiversity API Integration

**Bioma** integrates with the official Colombian Biodiversity Catalog API to provide real, up-to-date information about native species:

```javascript
// API Endpoint Example
https://api.catalogo.biodiversidad.co/record_search/search?q=Plantae&size=30
```

### API Features
- **Real Species Data**: Access to official Colombian biodiversity records
- **Interactive Cards**: Display species information in engaging card format  
- **Dynamic Content**: Fresh data directly from scientific databases
- **Educational Focus**: Curated content appropriate for teenage learners

### Data Integration
The API provides species information including:
- Scientific and common names
- Habitat and distribution data
- Conservation status
- Images and descriptions
- Ecological relationships

## 🎮 Interactive Learning Games

Built with Konva.js, the games provide:

- **Species Discovery Cards**: Interactive cards with real biodiversity data
- **Ecosystem Exploration**: Navigate through Colombian biomes
- **Knowledge Challenges**: Gamified quizzes and missions
- **Collection Mechanics**: Unlock and collect species information

## 📊 State Management

Redux slices manage different aspects of the application:

- **AuthSlice**: User authentication and profile data
- **faunaSlice**: Wildlife and species information
- **thunkSlice**: Async operations and API calls

## 🔥 Firebase Integration

### Configuration
Firebase services are configured in `services/firebaseConfig.js` with utilities in `services/firebaseUtils.js`.

### Firestore Database Structure
```
users/
├── {userId}/           # Document ID (Firebase Auth UID)
│   ├── birthday        # User's birth date
│   ├── createdAt       # Account creation timestamp
│   ├── email           # User's email address
│   ├── lastLogin       # Last login timestamp
│   ├── uid             # Firebase user ID
│   └── username        # Display username

### Real-time Features
- Live progress tracking
- Achievement notifications
- Leaderboard updates
- Collaborative learning features

## 📱 Responsive Design

The application follows Material-UI's responsive design principles:

- **Mobile-first approach**: Optimized for teenage users on mobile devices
- **Cross-device compatibility**: Seamless experience across devices
- **Touch-friendly interactions**: Intuitive navigation for young users
- **Accessibility**: Compliant with web accessibility standards

## 🚀 Deployment

The project is deployed using **Vercel** for optimal performance and easy CI/CD integration.

### Build for Production
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## 🔧 Available Scripts

```bash
npm run dev        # Start development server with Vite
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run lint       # Run ESLint for code quality
```

## 🌿 Educational Content

**Bioma** focuses on Colombian biodiversity including:

- **Ecosystems**: Amazon rainforest, Andes mountains, Caribbean coast, Pacific coast
- **Endemic Species**: Unique Colombian flora and fauna
- **Conservation**: Environmental protection and sustainability
- **Cultural Connection**: Indigenous knowledge and biodiversity

## 📈 Performance Optimizations

- **Vite Build Tool**: Fast development and optimized production builds
- **Code Splitting**: Lazy loading for better performance
- **Image Optimization**: Compressed assets for faster loading
- **Caching Strategy**: Efficient data management with Redux

## 🔄 Git Workflow

The project uses a branching strategy with:

- **main**: Production-ready code
- **develop**: Integration and testing branch
- **mariana**: Feature development branch
- **santiago-gutierrez**: Feature development branch

### Contributing Workflow
1. Create feature branch from `develop`
2. Make your changes
3. Test thoroughly
4. Create pull request to `develop`
5. After review, merge to `main` for deployment

## 🤝 Team

- **[@liziyeah](https://github.com/liziyeah)** - Frontend Developer
- **[@Santigumi](https://github.com/Santigumi)** - Frontend Developer

## 🛡️ Security Features

- **Protected Routes**: Authentication-based navigation
- **Input Validation**: Secure data handling
- **Firebase Security Rules**: Database access control
- **Environment Variables**: Secure configuration management

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Mission

Our mission is to foster environmental awareness and conservation action among Colombian teenagers by making biodiversity education engaging, interactive, and accessible through modern web technologies.

## 🙏 Acknowledgments

- Material-UI team for the excellent component library
- Firebase team for robust backend services
- Konva.js community for powerful 2D canvas capabilities
- Redux Toolkit for simplified state management
- Colombian biodiversity research institutions for educational content

---

**Repository**: [https://github.com/Santigumi/Bioma](https://github.com/Santigumi/Bioma)

**Note**: This project is actively being developed. Please check the `develop` branch for the latest features.