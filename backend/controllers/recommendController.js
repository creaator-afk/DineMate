import recommendModel from "../models/recommendModel.js";

const recommendList = async (req,res) => {
    try {
        const recommend = await recommendModel.find({})
        res.json({success : true, data: recommend })
    }catch(error) {
        console.log(error);
        res.json({success: false, message: "Error"})
    }
}
const addRecommend = async (req,res) => {
    console.log(req.body)
    const recommend = new recommendModel({
        name: req.body.name
    })
    try {
        await recommend.save();
        res.json({success : true, message : "Recommend added"})
    }catch(error) {
        console.log(error);
        res.json({success: false, message: "Error"})
    }
}

export {recommendList, addRecommend}