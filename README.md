# 🚀 InterviewIQ

> **AI-Powered Mock Interview Platform**

Practice smarter. Interview confidently.

InterviewIQ is a full-stack AI-powered mock interview platform that helps candidates prepare for technical and HR interviews by analyzing resumes, generating personalized interview questions, evaluating answers, and providing intelligent feedback.

---

## ✨ Features

- 🔐 Secure JWT Authentication with Refresh Tokens
- 📄 Resume Upload & PDF Text Extraction
- 🤖 AI Resume Analysis
- 💬 AI-Generated Personalized Interview Questions
- 🎙️ Voice Answer Support (Speech-to-Text)
- 📝 Text & Voice Interview Responses
- 📊 AI Answer Evaluation & Scoring
- 📚 Interview History
- 👤 User Profile & Performance Statistics
- ⚡ Automatic Session Refresh
- 📱 Responsive Modern UI

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
- Railway *(Deployment)*
- Vercel *(Deployment)*
- Neon PostgreSQL

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
