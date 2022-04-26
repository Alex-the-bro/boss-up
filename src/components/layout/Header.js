import React from "react";
import './header.css'
import logo from '../layout/logo.png'
import { NavLink, Link} from "react-router-dom";



const Header = ()=>{
    return(
        <header>
            <Link to="/">
            <img src={logo} alt="Boss-logo" className="logo" />
            </Link>
            

            <nav className="navbar">
                
                <ul className="navbar-items">
                    
                    <li className="navbar-item">
                        <NavLink to='/Episodes'> Shows </NavLink>
                    </li>
                    
                    <li className="navbar-item">
                        <NavLink to='/Blog'> Blog</NavLink>
                    </li>
                    
                    <li className="navbar-item">
                       <NavLink to="/Contact"> Contact </NavLink>
                    </li>
                    
                    <li className="navbar-item">
                       <NavLink to="/about">About</NavLink>
                    </li>
                
                </ul>
            </nav>

        </header>
    )
}

export default Header;