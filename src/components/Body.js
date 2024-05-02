import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";


const getRestaurant = (searchText, restaurantList) =>
  restaurantList.filter((res) =>
    res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
);

const Body = () => {

  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

 
  
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING'
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
  
      setRestaurantList(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRestaurant(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.error('Error fetching data:', error);
  
    }
  };
  

  

  return restaurantList.length===0? <Shimmer/> : (
    <div className="body">
     <div className="bodyFunc">
       <button
        onClick={()=>{
          const toprestaurants = restaurantList.filter((restaurant)=> restaurant.info.avgRating >4.5);
          setFilteredRestaurant(toprestaurants)
        }}>Ratings 4.5+</button>
       <input
         type='text'
         placeholder="Search Restaurant"
         value={searchText}
         onChange={(e)=>{setSearchText(e.target.value)}}
         />
       <button
        onClick={()=>{
          const searchRestaurant = getRestaurant(searchText, restaurantList);
          setFilteredRestaurant(searchRestaurant);
        }}>Search</button>
       <button>Filter</button>
       <button>Sort By</button>
     </div>
     <div className="restaurant-container">
     {filteredRestaurant.map((restaurant)=> (
       <RestaurentCard key={restaurant.info.id} resData={restaurant}/>         
     ))}
     </div>
    </div>
  )
}

export default Body;