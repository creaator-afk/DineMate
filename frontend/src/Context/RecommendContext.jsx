import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { resolvePath } from "react-router-dom";
export const RecommendContext = createContext(null);



const RecommendContextProvider = (props) => {
    const url = "http://localhost:8000"
    const [recommend_list, setRecommendList] = useState([]);
    //  and this too ()
    const [recommnedation_list, setRecommendendationList] = useState([]);
// 

    const fetchRecommendList = async () => {
        const response = await axios.get(url + "/get-food/");
        setRecommendList(response.data.data)
    }

    const fetchRecommendation = async (name) => {
        if(name)
            axios({
        // this causes an issue change 'post' to 'get' click on search icon, change back to 'post'
              method: 'post',
              url: 'http://localhost:8000/get-food/',
              data: JSON.stringify({
                "input": name,
              }),
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            })
            .then(response => {
              setRecommendendationList(response.data);
// Fix this
// 
              console.log(response.data)
            })
            .catch(error => {
              console.error(error);
            });

    }

    useEffect(() => {
        async function loadData() {
            await fetchRecommendList();
            await fetchRecommendation();
        }
    loadData()
    }, [])


    const contextValue = {
        url,
        recommend_list,
        fetchRecommendation,
        recommnedation_list,
    }

    return (
        <RecommendContext.Provider value = {contextValue}>
            {props.children}
        </RecommendContext.Provider>
    )
}

export default RecommendContextProvider