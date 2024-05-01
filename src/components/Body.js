import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";



const getRestaurant = (searchText, restaurantList) =>
  restaurantList.filter((res) =>
    res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
);

const Body = () => {

  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText,setSearchText] = useState('');
  const [filteredRestaurant, setFilteredRestautant] = useState([]);

  useEffect(()=> {
    fetchData();
  },[]);

   const fetchData = async() => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    //optional chaining
    setFilteredRestautant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

    return restaurantList.length === 0? <Shimmer/> : (
      <div className='body'>
        <div className='body-func'>
           <button className='button'
              onClick={()=>{
                 filteredresList = restaurantList.filter((res) => res.info.avgRating > 4.5);
                 setFilteredRestautant(filteredresList);
             }}
             >Top Rated Restaurents</button>
        
            <input type="text"
             placeholder="search any Restaurant"
             value={searchText}
             className="search"
             onChange={(e)=>{setSearchText(e.target.value)}}
            />
          <button className='button' 
             onClick={()=> 
              {const data = getRestaurant(searchText, restaurantList);
              setFilteredRestautant(data);
             }}
            >Search</button>
           <button className='button'>Sort</button>
        </div>
        <div className='res-container'>
          {filteredRestaurant.map((restaurant)=> (
            <RestaurentCard key={restaurant.info.id} resData={restaurant}/>
          ))}
        </div>
      </div>
    )
  }

export default Body;