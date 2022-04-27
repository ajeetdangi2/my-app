import { BrowserRouter , Link } from "react-router-dom";
import React  from 'react';
import './Navbar.css';
function Navbar (){
    return(
        <div className='navbar'>
            <p className='navbar-logo'><Link to='/'>ISRO🚀</Link></p>
            <p className='navbar-text navbar-button'><Link to="/Login">Login / Register</Link></p>
            <p className='navbar-text navbar-button'><Link to="/Test">Take Test</Link></p>
        </div>
    );
}
export default Navbar;