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
    <div className='resItem'>
        <div className='itemContent'>
            <h4 className='content'>{name}</h4>
            <h4 className='content'>{price/100}</h4>
            <h5 className='content'>{description}</h5>
        </div>
        <div className='itemImgcontainer'>
            <img className="itemImg" src={MENU_IMG_URL + imageId} alt='MENU ITEM IMAGE'/>
        </div>
    </div>
  );
};

export default Menuitem;