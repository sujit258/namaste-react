
import { CDN_URL } from "../utils/constants";

const RestaurantList = (props) => {
    const { restData } = props;
    const {cloudinaryImageId, name, costForTwo, cuisines, avgRating, sla } = restData?.info;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={
           CDN_URL + 
            cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <p>{costForTwo}</p>
      <p>{cuisines.join(" , ")}</p>
      <p>{avgRating} Stars</p>
      <p>{sla.slaString} </p>
    </div>
  );
};
export default RestaurantList;