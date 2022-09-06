import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <>
        <ul>
            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSEo__EXpP_zd581Ds_X9HwwbXg_fRPIo6A&usqp=CAU" alt="logo" /></li>      
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/About">About</Link> </li>                                                             ,
            {/* <li><a href="myfavorites">MyFavorites</a></li> */}
            <li><Link className="nav-link" to="/Signup">Signup</Link> </li>
        </ul>
      </>
    );
};


export default Navbar;