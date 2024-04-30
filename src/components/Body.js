import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";



const getRestaurant = (searchText, restaurantList) =>
  restaurantList.filter((res) =>
    res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
);

const Body = () => {

  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText,setSearchText] = useState('');

  useEffect(()=> {
    fetchData();
  },[]);

   const fetchData = async() => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    //optional chaining
    setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
 
    return(
      <div className='body'>
        <div className='body-func'>
           <button className='button'
              onClick={()=>{
                 filteredresList = resList.filter((res) => res.info.avgRating > 4 );
                 setRestaurantList(filteredresList);
             }}
             >Top Rated Restaurents</button>
           <input type="text" 
            placeholder="Search a Restaurant"
            value={searchText} 
            className="search"
            onChange={(e)=> setSearchText(e.target.value)}
           />
           <button className='button' 
             onClick={()=> 
              {const data = getRestaurant(searchText, restaurantList);
              setRestaurantList(data);
             }}
            >Search</button>
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