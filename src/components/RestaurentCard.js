import { CDN_URL } from "../Utils/constants";

const RestaurentCard = ({resData}) => {
    const {name, cloudinaryImageId, avgRating, deliveryTime , costForTwo, cuisines} = resData?.info;
    return(
      <div className='res-card'>
        <div className='cardImg'>
           <img className='Img' src={ CDN_URL + cloudinaryImageId} alt='Card Image'/>
        </div>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime} Minutes</h4>
      </div>
    )
  }

export default RestaurentCard;