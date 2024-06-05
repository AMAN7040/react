import { useContext, useState } from 'react';
import logo from '../Images/Logo.png'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Utils/useOnlineStatus';
import userContext from '../Utils/userContext';
import { useSelector } from 'react-redux';

const Header = () =>{
  
  const [isloogedIn, setLoggedIn] = useState('Logout')
 const onlineStatus = useOnlineStatus();
 const {loggedUser} = useContext(userContext)
 const cart = useSelector((store)=> store.cart.items);
 

  return (
    <div className='flex justify-center  items-center'>
     <div className=' h-20 flex items-center justify-center w-52 mx-10'> 
       <img className='h-[50] w-26 rounded-md ' src={logo} alt='Logo img'/>
     </div>
     <div className=' flex items-center justify-center h-14 w-full mx-20'>
      <div className='mx-10 font-normal text-lg cursor-pointer hover:text-orange-400'> 
       Online Status: {onlineStatus? '✅': '🔴'}
      </div>
      <div className='mx-10 font-normal text-lg cursor-pointer hover:text-orange-400'>
        <Link className='itemLink' to='/'>Home</Link>
      </div>
      <div className='mx-10 font-normal text-lg cursor-pointer hover:text-orange-400'>
         <Link className='itemLink' to='/about'>About Us</Link>
      </div>
      <div className='mx-10 font-normal text-lg cursor-pointer hover:text-orange-400'>
      <Link className='itemLink' to='/contact'>Contact Us</Link>
      </div>
      <div className='mx-10 font-normal text-lg cursor-pointer hover:text-orange-400'>
      <Link className='itemLink' to='/grocery'>Grocery</Link>
      </div>
      <div className='mx-10 font-normal text-lg cursor-pointer hover:text-orange-400'>
       <Link className='itemLink' to='/cart'> Cart-{cart.length }  items</Link>
      </div>
      <div className='mx-10 font-normal text-lg cursor-pointer hover:text-orange-400 w-[60] p-1'>
        <button className='cursor-pointer text-lg border-none bg-transparent'
       onClick={()=> setLoggedIn(isloogedIn==='Logout'? 'Login' : 'Logout')}
       >{isloogedIn}</button>
       </div>
       <div className='mx-10 font-normal text-lg cursor-pointer hover:text-orange-400'>
       {loggedUser}
      </div>
     </div>
    </div>
  )
}
  
export default Header;