import React from 'react';
import Title from './title';
import Links from './links';
import Cart from './cart';

function NavBar () {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark" style={{background: '#021627'}}> 

            <Title/>
            <Links/>
            <Cart/>

      </nav>

    )};

export default NavBar;

