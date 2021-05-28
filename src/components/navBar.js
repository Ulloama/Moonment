import React from 'react';
import Title from './title';
import Links from './links';
import CartIcon from './cartIcon';

function NavBar ({categories}) {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark" style={{background: '#021627'}}>
            <div className="container-md">
                  <Title/>
                  <Links categories={categories}/>
                  <CartIcon/> 
            </div> 
      </nav>
)};

export default NavBar;

