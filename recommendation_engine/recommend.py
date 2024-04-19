from fastapi import FastAPI
import pickle as pk
from starlette.middleware.cors import CORSMiddleware

import json

app = FastAPI()

origins = [
    "http://localhost:8000",
    "http://localhost:5173",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

n_dataset = pk.load(open("imported from jupiter notebook/new_dataset.pkl","rb"))

@app.get("/get-food")
def hello():
    data = {
        "success" : True,
        "data" : n_dataset["name"].unique()
    }
    return data
