import { CDN_URL } from "../Utils/constants";

const RestaurentCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    avgRating,
    sla,
    costForTwo,
    cuisines,
  } = resData?.info;

  return (
    <div className="restaurant-card">
        <img
          className="res-img"
          src={CDN_URL + cloudinaryImageId}
          alt="Card Image"
        />
     <div className="restaurant-content">
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}✯</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
     </div>
    </div>
  );
};

export default RestaurentCard;
