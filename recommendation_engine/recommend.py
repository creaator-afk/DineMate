from fastapi import FastAPI
from pydantic import BaseModel
import pickle as pk
from starlette.middleware.cors import CORSMiddleware

import json

app = FastAPI()


class RecommendList(BaseModel):
    input: str

dataset = pk.load(open("imported from jupiter notebook/dataset.pkl","rb"))
n_dataset = pk.load(open("imported from jupiter notebook/new_dataset.pkl","rb"))
similarity_recommender = pk.load(open("imported from jupiter notebook/similarity_recommender.pkl","rb"))

def recommend_food(food_name):
    
    food_index = n_dataset[n_dataset["name"] == food_name].index[0]

    # Use the new_food_index to get recommendations from the similarity matrix
    distances = similarity_recommender[food_index]
    recommend_foods = sorted(list(enumerate(distances)), reverse=True, key=lambda x: x[1])[1:7]

    # Get details of the selected food
    current_food = [n_dataset.iloc[food_index][0], n_dataset.iloc[food_index][1]]

    # Get details of recommended foods
    food_list = []
    food_image = []
    for i in recommend_foods:
        index = i[0]
        food_list.append(n_dataset.iloc[index][0])
        food_image.append(n_dataset.iloc[index][1])

    return current_food, food_list, food_image
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

n_dataset = pk.load(open("imported from jupiter notebook/new_dataset.pkl","rb"))

@app.get("/get-food/")
async def hello():
    return {
        "success" : True,
        "data" : list(n_dataset["name"].unique())
    }


@app.post("/get-food/")
async def create_user(recommend_data: RecommendList):
    input = recommend_data.input

    current,name,poster = recommend_food(input)

    return {
        "Cname": current[0],
        "Cimage": current[1],

        "Rname": name,
        "Rimage": poster
    }

