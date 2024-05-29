import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useResdata from "../Utils/useResdata";
import useInfiniteScroll from "../Utils/useInfiniteScroll";
import useOnlineStatus from "../Utils/useOnlineStatus";


const getRestaurant = (searchText, restaurantList) =>
  restaurantList.filter((res) =>
    res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
);

const Body = () => {


  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);

  const {restaurantList, filteredRestaurant, setFilteredRestaurant, loading, setLoading} = useResdata(page)
  useInfiniteScroll(setLoading,setPage);
  
  const onlineStatus = useOnlineStatus();  

  if(onlineStatus===false) return <h1>You're offline!!!! cheack your internet connection</h1> 

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
         placeholder="     Search Restaurant"
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
       <Link className='itemLink' key={restaurant.info.name} to={'/restaurant/'+restaurant.info.id}>
         <RestaurentCard  resData={restaurant}/>
       </Link> 
          
     ))}
      {loading && <Shimmer/>}
     </div>
    </div>
  )
}

export default Body;