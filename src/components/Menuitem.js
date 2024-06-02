import React from 'react'
import { MENU_IMG_URL } from '../Utils/constants';

const Menuitem = ({menuData}) => {
    const {
        name,
        imageId,
        price,
        description,
        defaultPrice
      } = menuData?.card?.info;
  return (
    <div className='flex justify-between h-60 w-[850] m-5 p-3 gap-4 border-b-2 border-gray font-medium cursor-pointer hover:bg-gray-50'>
        <div className='p-1 w-full'>
            <h4 className='p-2'>{name}</h4>
            <h4 className='p-2'>₹{price/100 || defaultPrice/100}</h4>
            <h5 className='p-2'>{description}</h5>
        </div>
        <div className='h-36 w-64 rounded-lg'>
           <div className='relative top-5 -left-3.5'>
            <button className='bg-white shadow-lg m-auto border-2 rounded-lg w-14 border-gray text-green-600'>Add+</button>
           </div>
            <img className="h-36 w-64 rounded-lg" src={MENU_IMG_URL + imageId} alt='MENU ITEM IMAGE'/>
        </div>
    </div>
  );
};

export default Menuitem;