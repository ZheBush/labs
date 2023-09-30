import wikipedia
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Output(BaseModel):
    query: str
    path: str
class Input(BaseModel):
    query: str

@app.post("/")
def qp(query_input: Input):
    '''Создание запроса'''
    return 'Query: ' + query_input.query + '. Path: ' + wikipedia.page(query_input.query).url