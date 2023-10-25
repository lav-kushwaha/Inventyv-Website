import React, { useState } from 'react'
import { NavLink,Link} from 'react-router-dom'
import './Navbar.css'
import Logo from '../../assets/asset 0.gif'
import {FiMenu} from 'react-icons/fi'
import {HiXMark} from 'react-icons/hi2'

const Menu = () => (
  <>
   <NavLink className="links"  to="coming-soon">Company</NavLink>
   <NavLink className="links" to="coming-soon">Technologies</NavLink>
   <NavLink className="links" to="coming-soon">Services</NavLink>
   <NavLink className="links" to="coming-soon">Careers</NavLink>
   <NavLink className="links" to="coming-soon">Contact Us</NavLink>
  </>
)
const Navbar = () => {
   const[toggleMenu,setToggleMenu] = useState(false);
  return (
   <div className="nav">
    <Link className='img-link' to="/"><img className="img" src={Logo} alt="Company-Logo" /></Link>
    <div className="navlinks">
    <NavLink className="links" to="coming-soon">Company</NavLink>
    <NavLink className="links" to="coming-soon">Technologies</NavLink>
    <NavLink className="links" to="coming-soon">Services</NavLink>
    <NavLink className="links" to="coming-soon">Careers</NavLink>
    <NavLink className="links" to="coming-soon">Contact Us</NavLink>
    </div>
    <div className="navMenu">
       {toggleMenu?<FiMenu size={50} onClick={()=>setToggleMenu(false)}/>
       :<HiXMark size={50} onClick={()=>setToggleMenu(true)}/>}
       {!toggleMenu && (
         <div className="menu-bar">
          <Menu className="menulinks"/>
         </div>
       )}
      </div>
    </div>
  )
}
export default Navbar