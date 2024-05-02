import { useState } from 'react';
import logo from '../Images/Logo.png'
const Header = () =>{
  
  const [isloogedIn, setLoggedIn] = useState('Logout')

  return (
    <div className='header'>
     <div className='logo-container'> 
       <img className='logo' src={logo} alt='Logo img'/>
     </div>
     <div className='nav-items'>
      <div className='item'>Home</div>
      <div className='item'>Help</div>
      <div className='item'>Contact Us</div>
      <div className='item'>Cart</div>
      <button className='loginbtn'
       onClick={()=> setLoggedIn(isloogedIn==='Logout'? 'Login' : 'Logout')}
       >{isloogedIn}</button>
     </div>
    </div>
  )
}
  
export default Header;