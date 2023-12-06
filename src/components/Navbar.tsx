import './navbar.css';
import logo from '../../public/logo.png'

function Navbar() {
  return (
    <nav className='nav-container'>
     <div className="logo">
        <img src={logo} alt="" />
     </div>
     <div className="links">
    <li><a href="">Home</a></li>
    <li><a href="">About Us</a></li>
    <li><a href="">Book</a></li>
    <li><a href="">Category</a></li>
     </div>
    </nav>
  )
}

export default Navbar
