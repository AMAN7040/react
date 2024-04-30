import logo from '../Images/Logo.png'
const Header = () =>{
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
          </ul>
        </div>
      </div>
    )
  }
  
export default Header;