from fastapi import APIRouter, HTTPException

from schemas.requests import GenerateRequest
from schemas.responses import GenerateResponse
from services.openai_service import generate_response

router = APIRouter(prefix="/api")


@router.post("/generate", response_model=GenerateResponse)
def generate(request: GenerateRequest):
    try:
        return generate_response(request.prompt)
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"AI service error: {str(e)}")