import React from 'react';
import { Link } from 'react-router-dom'

export function CartEmpty () {
    return <>
    <div className="d-flex justify-content-center" style={{paddingTop: 50}}>
        <div className="card text-center" style={{width:800}}>
            <div className="card-header"><strong>Carrito de compras</strong></div>
            <div className='card-body'>
                <h4  style={{paddingBottom:20}}>El carrito esta vacío</h4>
                <Link to={`/`}>
                    <button className="btn btn-dark">Volver a comprar</button>
                </Link>
            </div>
        </div>
    </div>
    </>
}