# Architecture

## Overview

InterviewIQ follows a modern monorepo architecture using Turborepo.

The application consists of:

- Next.js Frontend
- Express.js API Gateway
- PostgreSQL Database
- Prisma ORM
- OpenAI / Gemini AI
- JWT Authentication
- React Query
- Tailwind CSS

------------------------------

Frontend
        │
        │ HTTPS
        ▼
Express Gateway
        │
        ├────────► PostgreSQL
        │
        ├────────► AI Service
        │
        └────────► Resume Parser

------------------------------

Workflow

User

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

Evaluate Answers

↓

Generate Feedback

↓

Store Results