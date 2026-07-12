<div align="center">

# 🚀 InterviewIQ

### AI-Powered Interview Preparation & Evaluation Platform

Practice smarter. Interview confidently.

<p align="center">

<img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs">
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-5-black?style=for-the-badge&logo=express">
<img src="https://img.shields.io/badge/PostgreSQL-16-4169E1?style=for-the-badge&logo=postgresql&logoColor=white">
<img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma">
<img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss">
<img src="https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge">

</p>

---

An AI-powered interview preparation platform that analyzes resumes, generates personalized interview questions, conducts voice-enabled mock interviews, evaluates responses using Generative AI, and provides actionable performance feedback.

</div>

---

# ✨ Features

## 🔐 Authentication

- User Registration & Login
- JWT Authentication
- Refresh Token Authentication
- Automatic Session Refresh
- Protected Routes
- Secure Password Hashing

---

## 📄 Resume Management

- Upload PDF Resume
- Resume Text Extraction
- AI Resume Analysis
- Resume Management
- Delete Resume

---

## 🤖 AI Interview Engine

- Personalized Interview Generation
- AI Resume Understanding
- Technical Interviews
- HR Interviews
- DSA Interviews
- Behavioral Interviews
- System Design Interviews
- Multiple Difficulty Levels
- Configurable Interview Duration

---

## 🎙️ Voice AI

- AI Text-to-Speech
- Speech-to-Text Answer Input
- Manual Text Answer Support

---

## 📊 AI Evaluation

- AI Answer Evaluation
- Interview Scoring
- Personalized Feedback
- Performance Insights

---

## 📈 Dashboard

- Performance Statistics
- Interview Analytics
- Resume Overview
- Recent Interviews

---

## 📚 Interview History

- Search Interviews
- Filter Interviews
- Sort Interviews
- Delete Interviews

---

## 👤 User Profile

- User Information
- Interview Statistics
- Latest Resume
- Average Performance Score

---

## 🎨 Modern UI

- Responsive Design
- Professional Dashboard
- Toast Notifications
- Smooth Navigation
- Modern Components

---

# 🏗️ System Architecture

```text
                        ┌────────────────────────────┐
                        │        Next.js App         │
                        │       (Frontend UI)        │
                        └─────────────┬──────────────┘
                                      │
                                      │ HTTPS
                                      ▼
                     ┌─────────────────────────────────┐
                     │        Express Gateway          │
                     │     REST API + Authentication   │
                     └───────┬───────────┬─────────────┘
                             │           │
                             │           │
                 ┌───────────▼───┐   ┌───▼────────────┐
                 │ PostgreSQL     │   │  AI Service    │
                 │ Prisma ORM     │   │ OpenAI/Gemini  │
                 └───────────────┘   └────────────────┘
```

---

# 🔄 Application Workflow

```text
User

↓

Register / Login

↓

Upload Resume

↓

PDF Text Extraction

↓

AI Resume Analysis

↓

Generate Interview Questions

↓

Start Interview

↓

🎙 Voice / ⌨ Text Answers

↓

AI Evaluation

↓

Score + Feedback

↓

Interview History

↓

Performance Dashboard
```

---

# 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | Next.js, React, TypeScript |
| Styling | Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| ORM | Prisma |
| Authentication | JWT, Refresh Tokens, bcrypt |
| AI | OpenAI / Gemini |
| State Management | React Query |
| HTTP Client | Axios |
| Monorepo | Turborepo + pnpm |

---

# 📂 Folder Structure

```text
InterviewIQ
│
├── apps
│   ├── gateway
│   │   ├── src
│   │   └── prisma
│   │
│   └── web
│       ├── app
│       ├── components
│       ├── hooks
│       ├── services
│       └── types
│
├── docs
│
├── infrastructure
│
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/InterviewIQ.git
```

Move into the project

```bash
cd InterviewIQ
```

Install dependencies

```bash
pnpm install
```

Create environment variables

```bash
cp .env.example .env
```

Run the application

```bash
pnpm dev
```

Frontend

```
http://localhost:3000
```

Backend

```
http://localhost:4000
```

---

# 🔑 Environment Variables

```env
DATABASE_URL=

JWT_ACCESS_SECRET=

JWT_REFRESH_SECRET=

ACCESS_TOKEN_EXPIRES_IN=15m

REFRESH_TOKEN_EXPIRES_IN=7d

OPENAI_API_KEY=
```

---

# 🚀 Future Improvements

- 🎥 Video Interviews
- 💻 Live Coding Interviews
- 🧠 Adaptive Follow-up Questions
- 📈 Advanced Analytics
- 🌙 Dark Mode
- 🌍 Multi-language Support
- 🏆 Achievements & Badges
- 📱 Mobile Application

---

# 📚 Documentation

Detailed documentation is available in the **docs/** directory.

- Architecture
- Backend
- Frontend
- Database
- Authentication
- AI Module
- Deployment
- API Reference

---

# 👩‍💻 Author

**Trishna Bhowmik**

B.Tech in Computational Mathematics

AI | Full Stack Development | Backend Engineering | Generative AI

GitHub: https://github.com/YOUR_USERNAME

LinkedIn: https://linkedin.com/in/YOUR_LINKEDIN

---

If you like this project, consider giving it a ⭐ on GitHub.
