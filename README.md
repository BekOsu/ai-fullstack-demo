# AI Fullstack Demo

A full-stack application with user authentication and AI-powered text generation. Built with FastAPI and Next.js.

## Tech Stack

- **Backend**: Python, FastAPI, SQLAlchemy, JWT Auth, OpenAI API
- **Frontend**: Next.js, React, TypeScript, Tailwind CSS

## Features

- User registration and login
- JWT-based authentication
- Protected user profile page
- AI text generation via OpenAI

## Prerequisites

- Python 3.9+
- Node.js 18+
- OpenAI API key

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/BekOsu/ai-fullstack-demo.git
cd ai-fullstack-demo
```

### 2. Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

Create a `.env` file:

```
OPENAI_API_KEY=your-api-key-here
JWT_SECRET=your-secret-key-here
```

Start the server:

```bash
uvicorn main:app --reload
```

Backend runs at http://localhost:8000

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at http://localhost:3000

## API Endpoints

| Method | Endpoint         | Description              | Auth Required |
|--------|------------------|--------------------------|---------------|
| GET    | `/health`        | Health check             | No            |
| POST   | `/api/generate`  | Generate AI response     | No            |
| POST   | `/auth/register` | Create new user          | No            |
| POST   | `/auth/login`    | Login, get JWT token     | No            |
| GET    | `/auth/me`       | Get current user profile | Yes           |

### Example Requests

**Register:**
```bash
curl -X POST http://localhost:8000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'
```

**Login:**
```bash
curl -X POST http://localhost:8000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'
```

**Generate AI Response:**
```bash
curl -X POST http://localhost:8000/api/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Explain REST APIs in one sentence"}'
```

## Project Structure

```
├── backend/
│   ├── main.py              # FastAPI app entry point
│   ├── config.py            # Environment config
│   ├── database.py          # SQLite connection
│   ├── models.py            # SQLAlchemy models
│   ├── routes/
│   │   ├── health.py        # Health check endpoint
│   │   ├── ai.py            # AI generation endpoint
│   │   └── auth.py          # Auth endpoints
│   ├── schemas/
│   │   ├── requests.py      # Request models
│   │   ├── responses.py     # Response models
│   │   └── auth.py          # Auth models
│   └── services/
│       ├── openai_service.py   # OpenAI integration
│       └── auth_service.py     # JWT & password utils
└── frontend/
    └── src/
        ├── app/
        │   ├── page.tsx        # Home (AI generator)
        │   ├── login/          # Login page
        │   ├── register/       # Register page
        │   └── profile/        # User profile
        ├── components/
        │   ├── PromptForm.tsx     # AI prompt input
        │   ├── ResponseDisplay.tsx # AI response display
        │   ├── AuthForm.tsx       # Login/register form
        │   └── Navbar.tsx         # Navigation bar
        └── lib/
            ├── api.ts          # Backend API calls
            └── auth.ts         # Token utilities
```