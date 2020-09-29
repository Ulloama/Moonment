import React from 'react';
import { useContextCart } from '../context/contextCart';

function ButtonAddToCart ({totalCount, i}) {
    const { AddItem } = useContextCart();

    return (
    <button type='button' className='btn btn-outline-dark btn-block' onClick={()=> AddItem(i)}>Agregar al carrito ({totalCount})</button>
    )
};

export default ButtonAddToCart;