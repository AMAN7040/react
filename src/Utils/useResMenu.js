import React, { useEffect, useState } from 'react'
import { MENU_API } from './constants';

const useResMenu = (resId) =>{

    const [resName , setResName] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async() =>{
      try{
        const response = await fetch(MENU_API + resId);
        
        if(!response.ok){
          throw new Error('Failed to fetch data');
        }
       
        const resData = await response.json();
        setResName(resData?.data)

      }catch(error){
        console.log('Error fetching data:', error);
      }
    };
    return resName;
}

export default useResMenu;