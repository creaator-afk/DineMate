import express from 'express';
import {recommendList,addRecommend} from '../controllers/recommendController.js'

const des_rec = express.Router();

des_rec.get("/food_list", recommendList);
des_rec.post("/add_list", addRecommend);

export default des_rec;