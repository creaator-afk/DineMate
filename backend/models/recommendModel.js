import mongoose, { mongo } from "mongoose";

const recommendSchema = new mongoose.Schema({
    name: { type : String, required: true }
})

const recommendModel = mongoose.models.recommend || mongoose.model("recommend", recommendSchema);
export default recommendModel;