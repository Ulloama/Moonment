import React from 'react';
import { useListCartProvider } from '../context/contextCart';

function ButtonAddToCart ({totalCount}) {
    const { AddItem } = useListCartProvider();

    return (
    <button type='button' class='btn btn-outline-dark btn-block' onClick={() => AddItem('item agregado')}>Agregar al carrito ({totalCount})</button>
    )
};

export default ButtonAddToCart;