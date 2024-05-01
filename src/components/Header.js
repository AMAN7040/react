import { useState } from 'react';
import logo from '../Images/Logo.png'
const Header = () =>{

    const [log , setLog] = useState('Logout')

    return(
      <div className='header'>
        <div className='logo-container'>
          <img className="logo" src={logo} alt='Logo Img'/>
        </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>🛒</li>
            <button className='loginbtn'
              onClick={()=> setLog(log==='Login'?'Logout': 'Login')}
            >{log}</button>
          </ul>
        </div>
      </div>
    )
  }
  
export default Header;