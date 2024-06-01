import React from 'react'
import { MENU_IMG_URL } from '../Utils/constants';

const Menuitem = ({menuData}) => {
    const {
        name,
        imageId,
        price,
        description,
      } = menuData?.card?.info;
  return (
    <div className='flex justify-between h-50 w-[850] m-5 p-5 gap-4 font-medium cursor-pointer hover:bg-gray-50'>
        <div className='p-2'>
            <h4 className='p-2'>{name}</h4>
            <h4 className='p-2'>{price/100}</h4>
            <h5 className='p-2'>{description}</h5>
        </div>
        <div className='h-30 w-64 rounded-lg'>
            <img className="h-30 w-64 rounded-lg" src={MENU_IMG_URL + imageId} alt='MENU ITEM IMAGE'/>
        </div>
    </div>
  );
};

export default Menuitem;