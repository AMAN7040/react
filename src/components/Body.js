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
  const [page, setPage] = useState(1);
  const [loading ,setLoading] = useState(true)

const handleInfiniteScroll = async() =>{
  try{
    if(window.innerHeight + document.documentElement.scrollTop + 1 >=  document.documentElement.scrollHeight){
      setLoading(true); 
      setPage((prev)=> prev + 1);
    }
  }catch(error){
    console.log(error)
  }
}

  useEffect(()=>{
    fetchData();
  },[page]);

 useEffect(()=>{
  window.addEventListener("scroll", handleInfiniteScroll);

  return ()=> window.removeEventListener('scroll', handleInfiniteScroll)
 },[])
  
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.853532&lng=77.663033&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING?_page=${page}`
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
      setRestaurantList((prev)=> [...prev, ...data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants]);
      setFilteredRestaurant((prev)=> [...prev, ...data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants]);
      setLoading(false);
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
      {loading && <Shimmer/>}
     </div>
    </div>
  )
}

export default Body;