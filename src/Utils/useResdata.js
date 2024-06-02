import React, { useEffect, useState } from 'react'

const useResdata = (page) =>{

    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      
        const fetchData = async() =>{
           try{
             const response = await fetch(
                `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9939369&lng=77.5980282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING?_page=${page}`
             );

             if(!response.ok){
                throw new Error('failed to fetch the data');
             }

             const data = await response.json();
             setRestaurantList((prev)=> [...prev, ...data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants]);
             setFilteredRestaurant((prev)=> [...prev, ...data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants]);
             setLoading(false);
           }catch(error){
             console.error("Error fetching the data", error);
           }
        };
      fetchData();
    },[page]);

    return {restaurantList, filteredRestaurant, setFilteredRestaurant, loading, setLoading }
}

export default useResdata