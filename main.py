from fastapi import FastAPI, HTTPException
from fastapi.responses import RedirectResponse
from pydantic import EmailStr
from typing import Optional

app = FastAPI()

class SubscriptionForm(BaseModel):
    name: str
    email: EmailStr

@app.get("/subscribe", response_class=RedirectResponse, allow_redirects=False)
def subscribe():
    return RedirectResponse(url="/")

@app.post("/subscribe", response_class=RedirectResponse)
async def process_subscription(form_data: SubscriptionForm):
    # Here you can add the logic to send the new technical PDF eBooks
    # to the user through email or any other method

    # For the sake of simplicity, we just return a success message
    return RedirectResponse(url="/", status_code=status.HTTP_302_FOUND,
                            headers={"message": "Subscription successful. Check your email for the download link."})
