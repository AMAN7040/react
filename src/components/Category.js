import React , {useState} from 'react'
import Menuitem from './Menuitem';

const Category = ({categoryData}) => {
    const {itemCards,title} = categoryData?.card?.card;
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
      };

  return (
    <div className={`m-3 overflow-hidden ${isCollapsed ? 'collapsed' : ''}`}>
     <div className='flex justify-between items-center m-5 p-3 cursor-pointer bg-gray-50 text-lg ' onClick={toggleCollapse}>
      <h4>{title} ({itemCards.length})</h4>
      <span className={`transition-transform duration-300 ease-in-out ${isCollapsed ? 'rotate-180' : ''}`}>▼</span>
     </div>
     <div className={`p-3 transition-h duration-300 ease-in-out ${isCollapsed ? 'h-0 p-0 overflow-hidden' : ''}`}>
        {itemCards.map((item) => (
          <Menuitem key={item.card.info.id} menuData={item} />
        ))}
      </div>

    </div>
  )
}

export default Category;