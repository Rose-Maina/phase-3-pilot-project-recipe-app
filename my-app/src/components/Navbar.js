import React from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <>
        <ul>
            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSEo__EXpP_zd581Ds_X9HwwbXg_fRPIo6A&usqp=CAU" alt="logo" /></li>      
            <li><a class="active" href="home">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="myfavorites">MyFavorites</a></li>
            <li><a href="login">Login</a></li>
            {/* <li><a href="signup">Signup</a></li> */}
        </ul>
      </>
    );
};
export default Navbar;