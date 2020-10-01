import React from 'react';
import { useContextCart } from '../context/contextCart';

function ButtonAddToCart ({i, totalCount}) {
    const { AddItem } = useContextCart();

    return (
    <button type='button' className='btn btn-outline-dark btn-block'
        onClick={()=> AddItem({...i, quantity: totalCount})}>
        Agregar al carrito ({totalCount})
    </button>
    )
};

export default ButtonAddToCart;