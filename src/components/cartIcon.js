import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../assets/styles/icons/css/fontello.css'
import '../assets/styles/icons/css/styles.css'
import { useContextCart } from '../context/contextCart';

function CartIcon () {
    const { totalQ } = useContextCart();
    const [quantityT, setQuantityT] = useState();

    useEffect (() => {
        if ( totalQ === 0 ) {
            setQuantityT(null);
        } else {
            setQuantityT(totalQ)}
    }, [totalQ]);

    return( <>
        <ul className="navbar-nav ml-md-auto justify-content-end">
            <Link to={`/cart`}>
                <li className="nav-item dropdown" >
                    <button className="btn btn-light">
                        <span className="icon-cart"></span>
                        <span className="badge">{quantityT}</span>
                    </button>
                </li>
            </Link>
        </ul>
        </>
)};

export default CartIcon;