import React , {useState} from 'react'
import Menuitem from './Menuitem';

const Category = ({categoryData, isCollapsed ,setActiveIndex}) => {
    const {itemCards,title} = categoryData?.card?.card;

    const toggleCollapse = () => {
        setActiveIndex();
      };

  return (
    <div className='m-auto w-[890] p-2'>
     <div className='flex justify-between items-center m-5 p-3 font-bold cursor-pointer bg-gray-50 text-lg shadow-lg ' onClick={toggleCollapse}>
      <h4>{title} ({itemCards.length})</h4>
      <span className={`transition-transform duration-300 ease-in-out ${isCollapsed ? 'rotate-180' : ''}`}>▼</span>
     </div>
     <div className=''>
        {isCollapsed && itemCards.map((item) => (
          <Menuitem key={item.card.info.id} menuData={item}/>
        ))}
      </div>

    </div>
  )
}

export default Category;