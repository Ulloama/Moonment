import React from 'react';
import '../assets/styles/icons/css/fontello.css'

function Cart () {
    return( <>
        <ul class="navbar-nav ml-md-auto justify-content-end">
            <li class="nav-item dropdown">
                <button class="btn btn-light" type="button" data-toggle="modal" data-target="#cart-sidebar">
                    <span class="icon-cart" />
                </button>
            </li>
        </ul>
        </>
)};

export default Cart;