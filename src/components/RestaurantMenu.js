import React, { useEffect } from 'react';

const RestaurantMenu = () => {

    useEffect(()=> {
      fetchMenu();
    },[])
   
    const fetchMenu = async() =>{
        const data = await fetch('')
    }

  return (
    <div className='menu'>
       <h1>MY restaurant Name</h1>
    </div>
  )
}

export default RestaurantMenu;
