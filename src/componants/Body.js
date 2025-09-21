import React from "react";
import RestaurantList from "./RestaurantList";
import  restList  from "../utils/mockData/RestList.json";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search food items" />
      </div>
      <div className="restaurant-list">
        {restList.map((restaurant, index) => (
          <RestaurantList key={restaurant.info.id} restData={restaurant} /> 
        ))}
        
      </div>
    </div>
  );
};

export default Body;