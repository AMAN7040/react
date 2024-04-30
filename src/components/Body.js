import { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { resList } from "../Utils/constants";

const Body = () => {

  const [restaurantList, setRestaurantList] = useState(resList)
    return(
      <div className='body'>
        <div className='body-func'>
           <button className='button'
              onClick={()=>{
                 filteredresList = resList.filter((res) => res.info.avgRating > 4 );
                 setRestaurantList(filteredresList);
             }}
             >Top Rated Restaurents</button>
           <button className='button'>Search</button>
           <button className='button'>Sort</button>
        </div>
        <div className='res-container'>
          {restaurantList.map((restaurant)=> (
            <RestaurentCard key={restaurant.info.id} resData={restaurant}/>
          ))}
        </div>
      </div>
    )
  }

export default Body;