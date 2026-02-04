# AI Fullstack Demo

A simple full-stack application that generates AI-powered text responses. Built with FastAPI and Next.js.

## Tech Stack

- **Backend**: Python, FastAPI, OpenAI API
- **Frontend**: Next.js, React, TypeScript, Tailwind CSS

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

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| GET    | `/health`       | Health check             |
| POST   | `/api/generate` | Generate AI response     |

### Example Request

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
│   ├── routes/              # API endpoints
│   ├── schemas/             # Pydantic models
│   └── services/            # OpenAI integration
└── frontend/
    └── src/
        ├── app/             # Next.js pages
        ├── components/      # React components
        └── lib/             # API utilities
```