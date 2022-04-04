import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>

     <div className='navbar'>
         <div>
      <img src="logo.png" alt="" />
         </div>
         <div className='manubar'>
         <Link to='/'>Home</Link>
        <Link to ='/review'>Reviews</Link>
        <Link to ='/deshboard'>Deshboard</Link>
        <Link to ='/blogs'>Blogs</Link>
        <Link to ='/about'>About</Link>
         </div>
     </div>

        </div>
    );
};

export default Header;