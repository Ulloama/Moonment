import React from 'react';
import { Link } from 'react-router-dom';

export function Order ({id}) {
    return <>
        <div className="d-flex justify-content-center" style={{paddingTop: 50}}>
            <div className="card text-center" style={{width:800}}>
                <div className="card-header"><strong>Carrito de compras</strong></div>
                <div className='card-body'>
                        <h4 style={{ paddingBottom:10 }}>¡Exito! Tu pedido se genero bajo el número de orden <strong>{id}</strong></h4>
                        <h5 style={{ paddingBottom:20 }}>Nos pondremos en contacto con vos para coordinar el envío.</h5>
                    <Link to={`/`}>
                        <button className="btn btn-dark">Seguir comprando</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
};