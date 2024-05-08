import React , {useState} from 'react'
import Menuitem from './Menuitem';

const Category = ({categoryData}) => {
    const {itemCards,title} = categoryData?.card?.card;
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
      };

  return (
    <div className={`menuItem ${isCollapsed ? 'collapsed' : ''}`}>
     <div className='category' onClick={toggleCollapse}>
      <h4>{title} ({itemCards.length})</h4>
      <span className={`arrow ${isCollapsed ? 'collapsed' : ''}`}>▼</span>
     </div>
     <div className={`menuItems ${isCollapsed ? 'collapsed' : ''}`}>
        {itemCards.map((item) => (
          <Menuitem key={item.card.info.id} menuData={item} />
        ))}
      </div>

    </div>
  )
}

export default Category;
