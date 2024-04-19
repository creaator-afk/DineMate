import React, { useContext } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../Context/StoreContext";
import { RecommendContext } from "../../Context/RecommendContext";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const { recommnedation_list } = useContext(RecommendContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {recommnedation_list.Rimage?.map((item, index) => {
          return (
            <FoodItem
              key={index}
              image={item}
              name={recommnedation_list.Rname[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
