import wikipedia
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

@app.get('/{query}')
def qp(query: str):
    return 'Query: ' + query + '. Path: ' + wikipedia.page(query).url