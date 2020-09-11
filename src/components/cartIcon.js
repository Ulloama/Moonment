import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/styles/icons/css/fontello.css'

function CartIcon () {
    return( <>
        <ul className="navbar-nav ml-md-auto justify-content-end">
            <Link to={`/cart`}>
                <li className="nav-item dropdown" >
                    <button className="btn btn-light" type="button" data-toggle="modal" data-target="#cart-sidebar">
                        <span className="icon-cart" />
                    </button>
                </li>
            </Link>
        </ul>
        </>
)};

export default CartIcon;