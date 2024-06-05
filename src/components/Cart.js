import React from 'react'
import Menuitem from './Menuitem'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../Utils/cartSlice';
const Cart = () => {
   
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClear = () =>{
       dispatch(removeItem());
    }

    return (
    <div className='text-center m-8 p-8'>
      <h1 className=' text-2xl font-bold'>Cart</h1>
      <div className='text-center w-6/12 m-auto'>
        <button className='bg-blue-400 p-2 m-2 rounded-lg' onClick={handleClear}>Clear Cart</button>
        {cartItems.length === 0 && <h3>Your Cart is Empty!!! PLease Add some Items un your cart</h3>}
        {
            cartItems.map((item)=> (
                <Menuitem key={item.card.info.id} menuData={item}/>
            ))
        }
      </div>
    </div>)
}
export default Cart