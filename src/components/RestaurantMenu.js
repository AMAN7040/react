import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { MENU_ITEM_TYPE_KEY } from '../Utils/constants';
import Category from './Category';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const [resName, setResName] = useState(null)

    useEffect(()=> {
      fetchMenu();
    },[]) 
   
    const fetchMenu = async() =>{
       try{
        const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=302687&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER');
        
        if (!response.ok) {
         throw new Error('Failed to fetch data');
       }
       const resData = await response.json();
       
       console.log('data ', resData);
       setResName(resData?.data)
       
      }catch(error){
        console.log('Error fetching data:', error);
      }
    };
    
    if(resName === null) return <Shimmer/>
      
    const {name, cuisines, costForTwoMessage, avgRating, totalRatingsString, sla} = resName?.cards[2]?.card?.card?.info;
    const {title, itemCards} = resName?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const {cards} = resName?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    
    const menuContent = resName?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.
                          filter(x => x.card?.card?.['@type'] === MENU_ITEM_TYPE_KEY)
    console.log(menuContent)

    return(
     <div className='menu'>
      <div className='resName'> 
       <h3>{name}</h3>
       
      </div>
      <div className='menuRes'>
        <h4>{cuisines.join(', ')} - {costForTwoMessage}</h4>
        <h5>{avgRating}⭐︎({totalRatingsString})</h5>
        <h5>{sla.minDeliveryTime} - {sla.maxDeliveryTime} mins</h5>
      </div>
      
       {menuContent.map((x)=>(
        <Category key={x.card?.card?.itemCards?.card?.info?.category} categoryData={x}/>
       ))}
     </div>
   );
};

export default RestaurantMenu;
