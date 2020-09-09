import React from 'react';

function ButtonAddToCart ({totalCount}) {
    return (
    <button type='button' class='btn btn-outline-dark btn-block'>Agregar al carrito ({totalCount})</button>
    )
};

export default ButtonAddToCart;