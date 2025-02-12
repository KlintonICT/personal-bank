<div align="center">
  <h1 align="center">「 Bank App 」</h1>
</div>

## **Table of Contents**
- [**Overview**](#overview)
- [**Features**](#features)
- [**Installation \& Setup**](#installation--setup)
  - [**Prerequisites**](#prerequisites)
  - [☞ Docker](#-docker)
  - [☞ Manual](#-manual)
  - [**Others Available Scripts**](#others-available-scripts)
- [**Tech Stack**](#tech-stack)
- [**Project Structure**](#project-structure)

## **Overview**

This is a full-stack React banking app that consists of two parts:

- **`server/`**: A mock API using `json-server`
- **`bank-app/`**: A React frontend with Redux-Saga for state management

## **Features**

✔️ Client-side routing with multiple pages  
✔️ Global state management with Redux-Saga  
✔️ Mock API using `json-server`  
✔️ Authentication mock using `localStorage`  
✔️ Jest testing & Storybook for UI components

- **Pages:**
  - `/` - Displays user bank wallet information
  - `/pin` - PIN-based authentication (mocked using `localStorage`)
  - `Splash Screen` - Loading Component for the first rendering
- **Authentication:**
  - On login, `localStorage.setItem("isAuth", true)`
  - To mock a logout, remove `isAuth` from `localStorage`

## **Installation & Setup**

### **Prerequisites**
Make sure to have the following installed
- Start project manually: 
  - [![Node.js version](https://img.shields.io/badge/^20-Node.js-black?&logoColor=white&logo=node.js&color=5FA04E)](https://nodejs.org/en/download/package-manager) [![Yarn](https://img.shields.io/badge/-Yarn-black?&logoColor=white&logo=yarn&color=2C8EBB)](https://yarnpkg.com/)
- Start with Docker:
  - [![Docker](https://img.shields.io/badge/-Docker-black?&logoColor=white&logo=docker&color=2496ED)](https://www.docker.com/products/docker-desktop/)

### ☞ Docker

```bash
docker-compose up --build
```

### ☞ Manual
1. Install dependencies for both server and frontend:
    ```bash
    cd server && yarn install
    cd ../bank-app && yarn install
    ```
2. Start the mock API server:
   ```bash
   cd server
   yarn server
   ```
3. Start the frontend:
   ```bash
   cd ../bank-app
   yarn dev
   ```
4. Open the app in browser at: http://localhost:3000

### **Other Available Scripts**

```bash
yarn test         # Run Jest tests
yarn storybook    # Run Storybook for UI components
yarn lint         # Lint the code
```
Storybook will be available at: http://localhost:6006

## **Tech Stack**

- **Frontend**: React, TypeScript, Vite
- **State Management**: Redux-Saga
- **Routing**: React Router
- **Testing**: Jest, React Testing Library
- **Component Document**: Storybook
- **Mock API**: `json-server`

## **Project Structure**

```bash
📦 (root)
├── 📜 README.md               # Project documentation
├── 📜 docker-compose.yaml     # docker compose configuration
├── 📂 bank-app/               # React frontend
│   ├── 📂 .storybook/         # Storybook setup files
│   ├── 📂 environments/       # Necessary .env files
│   ├── 📂 src/                         
│   │   ├── 📂 apis/           # API service
│   │   ├── 📂 assets/         # Images and other assets
│   │   ├── 📂 components/     # Reusable UI components including storybook and test
│   │   ├── 📂 constants/      # constant data
│   │   ├── 📂 pages/          # Page components
│   │   ├── 📂 store/          # Redux store & sagas
│   │   ├── 📂 test-utils/     # Utilization for test setup
│   │   ├── 📂 types/          # Data type to use across app
│   │   ├── 📂 utils/          # Helper functions, etc.
│   │   ├── 📜 App.tsx         # Main app components and route
│   │   ├── 📜 index.css       # Global style
│   │   ├── 📜 main.tsx        # Entry point
│   │   └── 📜 vite-env.d.ts   # Global for vite
│   └── ...
└── 📂 server                  # Mock API server
    ├── 📜 db.json             # JSON database
    ├── 📜 routes.json         # Custom Routes
    └── ...
```
