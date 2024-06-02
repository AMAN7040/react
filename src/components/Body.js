import { useEffect, useState } from "react";
import RestaurentCard, {isOpened} from "./RestaurentCard";
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
  const RestaurentCardOpened = isOpened(RestaurentCard);

  const {restaurantList, filteredRestaurant, setFilteredRestaurant, loading, setLoading} = useResdata(page)
  console.log(restaurantList);
  useInfiniteScroll(setLoading,setPage);
  
  const onlineStatus = useOnlineStatus();  

  if(onlineStatus===false) return <h1>You're offline!!!! cheack your internet connection</h1> 

  return restaurantList.length===0? <Shimmer/> : (
    <div className="">
     <div className="flex justify-evenly ">
       <button className="cursor-pointer text-sm-5 h-10 w-28 rounded-md border-1 border-gray p-2 hover:bg-gray-200 mx-10"
        onClick={()=>{
          const toprestaurants = restaurantList.filter((restaurant)=> restaurant.info.avgRating >4.5);
          setFilteredRestaurant(toprestaurants)
        }}>Ratings 4.5+</button>
       <input className="cursor-pointer text-sm-5 h-10 w-46 rounded-md border-1 border-gray p-2 hover:border-2 border-black"
         type='text'
         placeholder="     Search Restaurant"
         value={searchText}
         onChange={(e)=>{setSearchText(e.target.value)}}
         />
       <button className=" bg-orange-500 cursor-pointer text-sm-5 h-10 w-28 rounded-md border-1 border-gray p-2 hover:bg-gray-200 mx-10"
        onClick={()=>{
          const searchRestaurant = getRestaurant(searchText, restaurantList);
          setFilteredRestaurant(searchRestaurant);
        }}>Search</button>
       <button className="cursor-pointer text-sm-5 h-10 w-28 rounded-md border-1 border-gray p-2 hover:bg-gray-200 mx-10">Filter</button>
       <button className="cursor-pointer text-sm-5 h-10 w-28 rounded-md border-1 border-gray p-2 hover:bg-gray-200 mx-10">Sort By</button>
     </div>
     <div className="flex flex-wrap justify-center">
     {filteredRestaurant.map((restaurant)=> (
       <Link className='itemLink' key={restaurant.info.name} to={'/restaurant/'+restaurant.info.id}>
        {
          restaurant.info.isOpen? (<RestaurentCardOpened  resData={restaurant}/> ):  (<RestaurentCard  resData={restaurant}/>)
        }
       </Link> 
          
     ))}
      {loading && <Shimmer/>}
     </div>
    </div>
  )
}

export default Body;