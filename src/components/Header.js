import { useState } from 'react';
import logo from '../Images/Logo.png'
import { Link } from 'react-router-dom';
const Header = () =>{
  
  const [isloogedIn, setLoggedIn] = useState('Logout')


  return (
    <div className='header'>
     <div className='logo-container'> 
       <img className='logo' src={logo} alt='Logo img'/>
     </div>
     <div className='nav-items'>
      <div className='item'>
        <Link to='/'>Home</Link>
      </div>
      <div className='item'>
         <Link to='/about'>About Us</Link>
      </div>
      <div className='item'>
      <Link to='/contact'>Contact Us</Link>
      </div>
      <div className='item'>Cart</div>
      <button className='loginbtn'
       onClick={()=> setLoggedIn(isloogedIn==='Logout'? 'Login' : 'Logout')}
       >{isloogedIn}</button>
     </div>
    </div>
  )
}
  
export default Header;