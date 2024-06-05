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
    <div className="rounded-lg shadow-md w-120 h-99 p-5 m-6 text-center bg-gray-100 hover:border-2 hover:border-gray-300">
        <img
          className="h-52 w-80 rounded-lg mx-9"
          src={CDN_URL + cloudinaryImageId}
          alt="Card Image"
        />
     <div className="p-1 ml-14 w-80 h-52 text-center">
      <h3 className="font-bold text-lg">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}✯</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
     </div>
    </div>
  );
};

//high order components
export const isOpened = (RestaurentCard) =>{
  return(props) => {
    return(
      <div>
        <label className="absolute bg-black text-white ml-4 p-1 rounded-lg">OPEN</label>
        <RestaurentCard {...props}/>
      </div>
    )
  };
};
export default RestaurentCard;
