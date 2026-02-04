# AI Fullstack Demo - Checklist

## Project Setup
- [ ] Create GitHub repo with clean name (e.g. `ai-fullstack-demo`)
- [ ] Set up monorepo structure: `/backend` (FastAPI) + `/frontend` (Next.js)
- [ ] Create `.env.example` with `OPENAI_API_KEY=your-key-here`
- [ ] Create `.gitignore` (Python + Node)

## Backend (FastAPI)
- [ ] Initialize Python project with `requirements.txt`
- [ ] Create folder structure:
  ```
  backend/
    main.py
    routes/
      health.py
      ai.py
    schemas/
      requests.py
      responses.py
    services/
      openai_service.py
    config.py
  ```
- [ ] Implement `config.py` - load env vars
- [ ] Implement `GET /health` - health check endpoint
- [ ] Implement `POST /api/generate` - accepts user prompt, returns AI response
- [ ] Add request validation (Pydantic models)
- [ ] Add error handling (OpenAI failures, missing key, bad input)
- [ ] Implement `openai_service.py` - clean OpenAI API call with basic prompt engineering
- [ ] Enable CORS for frontend origin
- [ ] Test backend manually with curl or Swagger UI

## Frontend (Next.js)
- [ ] Initialize Next.js project (`npx create-next-app`)
- [ ] Create folder structure:
  ```
  frontend/
    src/
      app/
        page.tsx        (main page)
        layout.tsx
      components/
        PromptForm.tsx
        ResponseDisplay.tsx
      lib/
        api.ts          (fetch wrapper)
  ```
- [ ] Build `PromptForm` - text input/textarea + submit button
- [ ] Build `ResponseDisplay` - show AI response text
- [ ] Add loading state (spinner or text indicator)
- [ ] Add error state (user-friendly error message)
- [ ] Wire up API call to FastAPI backend
- [ ] Basic clean styling (CSS modules or Tailwind - keep minimal)

## End-to-End Integration
- [ ] Verify full flow: User input -> Next.js -> FastAPI -> OpenAI -> response displayed
- [ ] Test error scenarios (empty input, API down, invalid key)
- [ ] Confirm both services run locally with simple commands

## README
- [ ] Project title and one-line description
- [ ] Tech stack list
- [ ] Prerequisites (Python 3.11+, Node 18+, OpenAI key)
- [ ] Setup instructions:
  - Backend: `pip install -r requirements.txt && uvicorn main:app --reload`
  - Frontend: `npm install && npm run dev`
- [ ] Environment variables section
- [ ] API endpoints table
- [ ] Screenshot or demo GIF (add after everything works)

## Final Polish
- [ ] Remove all AI-generated comments or signatures
- [ ] Review naming - clean, professional, consistent
- [ ] Make small, meaningful git commits with natural messages
- [ ] Verify cold-start setup works (clone -> run in minutes)
- [ ] Push to GitHub