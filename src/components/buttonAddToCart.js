import React from 'react';
import { useContextCart } from '../context/contextCart';

function ButtonAddToCart ({totalCount}) {
    const { AddItem } = useContextCart();

    return (
    <button type='button' class='btn btn-outline-dark btn-block' onClick={AddItem}>Agregar al carrito ({totalCount})</button>
    )
};

export default ButtonAddToCart;