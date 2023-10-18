from fastapi import FastAPI
from pydantic import BaseModel
import wikipedia

app = FastAPI()
@app.get('/{query}')
def q(query: str, num_query: int):
    wikipedia.set_lang('ru')
    return 'Query: ' + str(wikipedia.search(query, results = num_query))
@app.get('/multi/{path}')
def p(path: str, num_path: int):
    wikipedia.set_lang('ru')
    result = ''
    query_array = wikipedia.search(path, results = num_path)
    count = 0
    for i in query_array:
        count += 1
        result += 'Path №' + str(count) + ': ' + str(wikipedia.page(i).url) + ' '
    return result
class Output(BaseModel):
    query: str
    path: str
class Input(BaseModel):
    query: str
@app.post("/", response_model = Output)
def qp(query_input: Input):
    wikipedia.set_lang('ru')
    return Output(query = query_input.query, path = wikipedia.page(query_input.query).url)