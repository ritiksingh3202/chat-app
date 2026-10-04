# 💬 ChatApp - Real-Time Messaging Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB.svg?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)

A scalable, real-time messaging application built with modern React and Vite. ChatApp supports authenticated user sessions, live socket-based messaging, online status tracking, and features a highly responsive, modular architecture designed for extensibility and performance.

[Live Demo](#) | [Report a Bug](https://github.com/ritiksingh3202/chat-app/issues) | [Request a Feature](https://github.com/ritiksingh3202/chat-app/issues)

## 📑 Table of Contents
- [Overview](#overview)
- [Key Features](#key-features)
- [Architecture & Tech Stack](#architecture--tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## 📖 Overview
ChatApp separates the user interface from data processing layers, leveraging the robust Context API for state management and Socket.IO for persistent real-time connections. Built on Vite, the project guarantees lightning-fast HMR (Hot Module Replacement) and optimized production builds.

## ✨ Key Features
- **Authentication:** Secure sign-up, login, and JWT-based session handling.
- **Real-Time Messaging:** Instant delivery using persistent WebSocket connections.
- **One-to-One Conversations:** Dedicated, secure channels between individual users.
- **Presence Tracking:** Live online/offline status indicators.
- **Media Sharing:** Native support for sharing images within the chat interface.
- **Responsive UI:** A mobile-first design system utilizing Tailwind CSS.

## 🛠 Architecture & Tech Stack

**Client Workflow:**
`React (Vite) Client` <--- `HTTP / WebSocket` ---> `Node.js API + Socket.IO` <---> `Database`

1. The client securely authenticates via HTTP endpoints and receives an authorization token.
2. A persistent Socket.IO connection is initialized upon successful authentication.
3. Messages and presence events are broadcasted asynchronously to connected conversation participants.

| Layer | Technology |
| :--- | :--- |
| **Frontend Ecosystem** | React 19, Vite, React Router DOM |
| **Styling** | Tailwind CSS (v4) |
| **State Management** | React Context API (`AuthContext`, `ChatContext`) |
| **Networking & API** | Axios, Socket.IO Client |
| **Code Quality** | ESLint, React Hot Toast |

## 📂 Project Structure

```text
chat-app/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images, fonts, and dummy data
│   ├── components/         # Modular React UI components (Sidebar, ChatContainer)
│   ├── context/            # Global state providers (Auth, Chat)
│   ├── lib/                # Utility and helper functions
│   ├── pages/              # Route-level views (HomePage, etc.)
│   ├── App.jsx             # Root application component
│   └── main.jsx            # Application entry point
├── .env                    # Environment configuration
├── eslint.config.js        # ESLint configuration and rulesets
├── vite.config.js          # Vite build tooling configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm, yarn, or pnpm
- A running instance of the companion backend API

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/ritiksingh3202/chat-app.git
cd chat-app
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure environment variables:**
Create a `.env` file in the root directory (you can copy from `.env.example` if available).
```bash
VITE_BACKEND_URL="http://localhost:5000"
```

4. **Start the development server:**
```bash
npm run dev
```
The application will be accessible at `http://localhost:5173`.

## ⚙️ Environment Variables

Vite explicitly exposes environment variables prefixed with `VITE_`.
Ensure your `.env` file contains the correct backend URL for your API and Socket server:

| Variable | Description | Default |
| :--- | :--- | :--- |
| `VITE_BACKEND_URL` | The base URL for API requests and WebSockets | `http://localhost:5000` |

> **Security Note:** Never commit your production `.env` file to version control.

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Boots up the Vite development server with HMR. |
| `npm run build` | Compiles an optimized, minified production build to the `dist/` folder. |
| `npm run preview` | Serves the production build locally for testing. |
| `npm run lint` | Runs ESLint across the codebase to enforce code quality standards. |

## 🗺 Roadmap
- [x] Secure User Authentication
- [x] Real-time one-to-one messaging
- [x] Online presence & status tracking
- [x] Image sharing capabilities
- [ ] Group chats & admin roles
- [ ] Message reactions & threads
- [ ] Unit and integration test suites

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes using [Conventional Commits](https://www.conventionalcommits.org/) (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

*Please ensure `npm run lint` passes before submitting a PR.*

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

## ✍️ Author
**Ritik Singh**
- GitHub: [@ritiksingh3202](https://github.com/ritiksingh3202)
