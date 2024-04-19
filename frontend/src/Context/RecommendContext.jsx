import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const RecommendContext = createContext(null);



const RecommendContextProvider = (props) => {
    const url = "http://localhost:8000"
    const [recommend_list, setRecommendList] = useState([]);


    const fetchRecommendList = async () => {
        const response = await axios.get(url + "/get-food");
        setRecommendList(response)
    }

    useEffect(() => {
        async function loadData() {
            await fetchRecommendList();
        }
    loadData()
    }, [])


    const contextValue = {
        url,
        recommend_list
    }

    return (
        <RecommendContext.Provider value = {contextValue}>
            {props.children}
        </RecommendContext.Provider>
    )
}

export default RecommendContextProvider