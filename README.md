# 🚀 InterviewIQ

> **AI-Powered Interview Preparation & Evaluation Platform**

InterviewIQ is a full-stack AI-powered mock interview platform that helps candidates prepare for technical and HR interviews through intelligent resume analysis, AI-generated interview questions, voice-enabled conversations, and automated performance evaluation.

The platform combines modern web technologies with Generative AI to simulate realistic interview experiences and provide actionable feedback for continuous improvement.

---

## ✨ Features

### 🔐 Authentication
- User Registration & Login
- JWT Authentication (Access + Refresh Tokens)
- Automatic Session Refresh
- Protected Routes
- Secure Password Hashing

### 📄 Resume Management
- Upload PDF Resume
- Resume Text Extraction
- Resume Management (View & Delete)
- AI Resume Analysis

### 🤖 AI Interview Engine
- AI-Generated Personalized Interview Questions
- Multiple Interview Types (HR, Technical, DSA, Behavioral, System Design)
- Multiple Difficulty Levels (Easy, Medium, Hard)
- Configurable Interview Duration

### 🎙️ Voice AI
- AI Text-to-Speech (Questions are spoken aloud)
- Speech-to-Text (Voice Answer Input)
- Manual Text Answer Support

### 📊 AI Evaluation
- AI Answer Evaluation
- Interview Scoring
- Personalized Feedback
- Performance Insights

### 📈 Dashboard
- Interview Statistics
- Resume Overview
- Performance Metrics
- Recent Activity

### 📚 Interview History
- Search Interviews
- Filter by Status
- Sort by Date
- Delete Interviews

### 👤 User Profile
- Profile Information
- Interview Statistics
- Latest Resume
- Average Performance Score

### 🎨 User Experience
- Responsive UI
- Modern Dashboard
- Toast Notifications
- Loading States
- Smooth Navigation
---

## 🖥️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Query
- Axios

### Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication

### AI

- OpenAI / Gemini API
- Resume Analysis
- Interview Question Generation
- AI Feedback Generation

### DevOps

- Turborepo
- pnpm
- GitHub

---

## 🏗️ System Architecture

```
                 ┌───────────────────────┐
                 │      Next.js UI       │
                 └──────────┬────────────┘
                            │
                            │ HTTPS
                            ▼
                 ┌───────────────────────┐
                 │   Express Gateway     │
                 └──────────┬────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
 PostgreSQL            AI Service          Resume Parser
   Prisma         (OpenAI / Gemini)           PDF
```

---

## 🔄 Application Workflow

```
User

↓

Login

↓

Upload Resume

↓

Extract Resume Text

↓

AI Resume Analysis

↓

Generate Interview Questions

↓

Start Interview

↓

Submit Answers

↓

AI Evaluation

↓

Score + Feedback

↓

Interview History
```

---

## 📂 Folder Structure

```text
InterviewIQ
│
├── apps
│   ├── gateway          # Backend API
│   ├── web              # Next.js Frontend
│
├── docs                 # Documentation
│
├── infrastructure       # Deployment configs
│
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

---

## ⚙️ Installation

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

Run the project

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

## 🔑 Environment Variables

```env
DATABASE_URL=

JWT_ACCESS_SECRET=

JWT_REFRESH_SECRET=

ACCESS_TOKEN_EXPIRES_IN=15m

REFRESH_TOKEN_EXPIRES_IN=7d

OPENAI_API_KEY=
```

---

## 🚀 Future Improvements

- 🎥 AI Video Interview Support
- 💻 Live Coding Interview Environment
- 🧠 Adaptive Follow-up Questions
- 📈 Advanced Performance Analytics
- 🌙 Dark Mode
- 📱 Mobile Application
- 🌍 Multi-language Support
- 🏆 Achievement & Leaderboard System
- 🏢 Company-Specific Interview Tracks

---

## 👩‍💻 Author

**Trishna Bhowmik**

- GitHub: https://github.com/YOUR_USERNAME
- LinkedIn: https://linkedin.com/in/YOUR_PROFILE

---

⭐ If you found this project helpful, consider giving it a star!
