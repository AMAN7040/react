
import Shimmer from './Shimmer';
import { MENU_ITEM_TYPE_KEY } from '../Utils/constants';
import Category from './Category';
import { useParams } from 'react-router-dom';
import useResMenu from '../Utils/useResMenu';
import { useState } from 'react';

const RestaurantMenu = () => {

  const [activeIndex , setActiveIndex] = useState(null);

  const {resId} = useParams();
  const resName = useResMenu(resId);
    if(resName === null) return <Shimmer/>
      
    const {name, cuisines, costForTwoMessage, avgRating, totalRatingsString, sla} = resName?.cards[2]?.card?.card?.info;
    const menuContent = resName?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.
                          filter(x => x.card?.card?.['@type'] === MENU_ITEM_TYPE_KEY)
    
    const handleSetActiveIndex = (index) => {
       setActiveIndex(activeIndex === index ? null : index);
     }; 

    return(
     <div className='flex flex-col items-center m-5'>
      <div className='text-xl font-bold m-2'> 
       <h3>{name}</h3>
       
      </div>
      <div className='m-3 p-5 h-36 w-[850] border-2 border-gray-200 border-solid rounded-2xl shadow-2xl'>
        <h4 className='font-semibold p-1'>{cuisines.join(', ')} - {costForTwoMessage}</h4>
        <h5 className='font-semibold p-1'>{avgRating}⭐︎({totalRatingsString})</h5>
        <h5 className='font-semibold p-1'>{sla.minDeliveryTime} - {sla.maxDeliveryTime} mins</h5>
      </div>
      
       {menuContent.map((x,index)=>(
        <Category key={x.card?.card?.itemCards?.card?.info?.uniqueId}
                  categoryData={x} 
                  isCollapsed={index === activeIndex}
                  setActiveIndex={() => handleSetActiveIndex(index)}
        />
       ))}
     </div>
   );
};

export default RestaurantMenu;
