import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/styles/icons/css/fontello.css'

function CartIcon () {
    return( <>
        <ul class="navbar-nav ml-md-auto justify-content-end">
            <Link to={`/cart`}>
                <li class="nav-item dropdown" >
                    <button class="btn btn-light" type="button" data-toggle="modal" data-target="#cart-sidebar">
                        <span class="icon-cart" />
                    </button>
                </li>
            </Link>
        </ul>
        </>
)};

export default CartIcon;