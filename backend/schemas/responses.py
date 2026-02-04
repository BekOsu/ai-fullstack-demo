from pydantic import BaseModel


class GenerateResponse(BaseModel):
    result: str
    model: str
    usage: dict


class HealthResponse(BaseModel):
    status: str